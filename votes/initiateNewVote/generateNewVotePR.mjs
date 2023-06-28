#!/usr/bin/env node

import { createInterface as readLines } from "node:readline";
import { exit } from "node:process";
import { get } from "node:https";
import { resolve } from "node:path";
import { once } from "node:events";
import { open, readFile } from "node:fs/promises";
import { parseArgs } from "node:util";
import { spawn } from "node:child_process";

import generateNewVoteFolder from "@node-core/caritat/generateNewVoteFolder";

import readReadme from "./extractInfoFromReadme.mjs";

const { values: argv } = parseArgs({
  options: {
    remote: {
      type: "string",
      describe:
        "Name or URL to the remote repo. If not provided, SSH pointing to --github-repo-name will be used.",
    },
    ["github-repo-name"]: {
      type: "string",
      describe: "GitHub repository, in the format owner/repo",
      default: "nodejs/TSC",
    },
    "create-pull-request": {
      type: "boolean",
      describe: "Use GitHub API to create a Pull Request. Requires gh CLI tool",
    },
    "pr-intro": {
      type: "string",
      describe: "Add an intro in markdown format for the PR body",
    },
    "gpg-binary": {
      type: "string",
    },
    ["gpg-sign"]: {
      type: "boolean",
      short: "S",
      describe: "GPG-sign commits.",
    },
    "nodejs-repository-path": {
      type: "string",
      short: "r",
    },
    "tsc-repository-path": {
      type: "string",
      short: "R",
      description:
        "Path to the local nodejs/TSC repository. If not provided, it will be fetched from GitHub",
    },
    subject: {
      type: "string",
      short: "s",
    },
    branch: {
      type: "string",
      short: "b",
      describe: "Name of the branch and subdirectory to use for the tests",
      demandOption: true,
    },
    candidate: {
      type: "string",
      multiple: true,
      short: "c",
    },
    "shuffle-candidates": {
      type: "string",
    },
    "header-instructions": {
      type: "string",
    },
    "footer-instructions": {
      type: "string",
    },
    vote: {
      type: "boolean",
      describe: "Register a vote just after the vote is initialized",
    },
    abstain: {
      type: "boolean",
      describe:
        "Use this flag to create a blank ballot and skip the voting if --vote is provided",
    },
    "do-not-clean": {
      type: "boolean",
      describe: "Use this flag to keep temp files on the local FS",
    },
    help: {
      type: "boolean",
      short: "h",
    },
    version: {
      type: "boolean",
      short: "v",
    },
  },
});

if (argv.help) {
  // TODO parse args subjects
  console.log("Mandatory flags:");
  console.log(
    "\t--branch (alias -b): A name for the vote to take place. It will also be used for naming the subfolder."
  );
  console.log("\t--subject (alias -s): Subject of vote.");
  console.log("Node.js specific options:");
  console.log(
    "\t--nodejs-repository-path (alias -r): Path to a local clone of " +
      "nodejs/node. If not provided, files will be downloaded from HTTPS."
  );
  console.log(
    "\t--tsc-repository-path (alias -R): Path to a local clone of " +
      "nodejs/TSC. If not provided, it will be cloned from SSH (or HTTPS if " +
      "an HTTPS remote is provided)."
  );
  console.log(
    "\t--github-repo-name: GitHub repository, in the format owner/repo. Default is nodejs/TSC."
  );
  console.log(
    "\t--remote: Default is git@github.com:${{--github-repo-name}}.git."
  );
  exit(0);
}

if (argv.version) {
  const pJson = await readFile(
    new URL("../../package.json", import.meta.url),
    "utf-8"
  );
  console.log(JSON.parse(pJson).version);
  exit(0);
}

if (!argv.branch) {
  throw new Error("You must pass a branch name");
}
if (!argv.subject) {
  throw new Error("You must pass a subject");
}

let input, crlfDelay;
if (argv["nodejs-repository-path"] == null) {
  input = await fetch(
    "https://raw.githubusercontent.com/nodejs/node/main/README.md"
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Wrong status code", { cause: res });
    } else {
      return res.text();
    }
  });
} else {
  const fh = await open(
    join(resolve(argv["nodejs-repository-path"]), "README.md"),
    "r"
  );
  input = fh.createReadStream();
  crlfDelay = Infinity;
}

const tscMembersArray = [];
for await (const member of readReadme(readLines({ input, crlfDelay }))) {
  tscMembersArray.push(member);
}

input.destroy?.();

const shareholdersThreshold = 3; // Math.ceil(tscMembersArray.length / 4);

const keyServerURL = "hkps://keys.openpgp.org";

await generateNewVoteFolder({
  candidates: argv.candidate,
  headerInstructions: argv["header-instructions"],
  footerInstructions: argv["footer-instructions"],
  canShuffleCandidates: argv["shuffle-candidates"] !== "false",
  subject: argv.subject,
  gpgOptions: {
    binaryPath: argv["gpg-binary"],
    trustModel: "always",
    keyServerURL,
  },
  gitOptions: {
    repo: argv.remote ?? `git@github.com:${argv["github-repo-name"]}.git`,
    branch: argv.branch,
    baseBranch: "main",
    forceClone: !argv["tsc-repository-path"],
  },
  shareholdersThreshold,
  shareholders: tscMembersArray.map(({ email }) => email),
  allowedVoters: tscMembersArray.map(
    (voter) => `${voter.name} <${voter.email}>`
  ),
  method: "Condorcet",
  path: argv["tsc-repository-path"]
    ? resolve(argv["tsc-repository-path"], argv.branch)
    : argv.branch,
});

if (argv["create-pull-request"]) {
  const cp = spawn(
    "gh",
    [
      "api",
      `repos/${argv["github-repo-name"]}/pulls`,
      "-F",
      "base=main",
      "-F",
      `head=${argv.branch}`,
      "-F",
      `title=${argv.subject}`,
      "-F",
      `body=${argv["pr-intro"] ?? ""}

The following users are invited to participate in this vote:

${tscMembersArray
  .map(({ name, handle }) => `- ${name} @${handle} (TSC)`)
  .join("\n")}

To close the vote, a minimum of ${shareholderThreshold} key parts would need to be revealed.

Vote instructions will follow.`,
      "--jq",
      ".html_url",
    ],
    { stdio: ["inherit", "pipe", "inherit"] }
  );
  // @ts-ignore toArray does exist!
  const out = cp.stdout.toArray();
  const [code] = await once(cp, "exit");
  if (code !== 0) exit(code);

  const prUrl = Buffer.concat(await out)
    .toString()
    .trim();

  {
    const cp = spawn(
      "gh",
      [
        "pr",
        "edit",
        prUrl,
        "--body",
        `${argv["pr-intro"] ?? ""}

Vote instructions:

- on the CLI: ${"`"}git node vote ${prUrl}${"`"}
- on the web: <https://nodejs.github.io/caritat/#${prUrl}>

To close the vote, at least ${shareholderThreshold} secret holder(s)[^1] must \
run the following command: ${"`"}git node vote ${prUrl} --decrypt-key-part --post-comment${"`"}

/cc @nodejs/tsc

[^1]: secret holders are folks who have access to the private key associated with \
a public key on <${keyServerURL}> that references an email address listed on the \
TSC voting member list at the time of the opening of the vote.
        `,
      ],
      { stdio: "inherit" }
    );

    const [code] = await once(cp, "exit");
    if (code !== 0) exit(code);
  }

  console.log("PR created", prUrl);
}
