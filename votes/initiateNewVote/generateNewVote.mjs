#!/usr/bin/env node

import { createInterface as readLines } from "node:readline";
import { exit } from "node:process";
import { Readable } from "node:stream";
import { resolve } from "node:path";
import { open, readFile } from "node:fs/promises";
import { parseArgs } from "node:util";

import generateNewVoteFolder from "@node-core/caritat/generateNewVoteFolder";

import readReadme from "./extractInfoFromReadme.mjs";
import { prOptions, createVotePR, shareholdersThreshold, keyServerURL } from "./_generateNewVotePR.mjs";

const { values: argv } = parseArgs({
  options: {
    remote: {
      type: "string",
      describe:
        "Name or URL to the remote repo. If not provided, SSH pointing to --github-repo-name will be used.",
    },
    "create-pull-request": {
      type: "boolean",
      describe: "Use GitHub API to create a Pull Request. Requires gh CLI tool",
    },
    ...prOptions,
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
    "vote-repository-path": {
      type: "string",
      short: "R",
      description:
        "Path to the local vote repository. If not provided, it will be fetched from GitHub",
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
    "\t--vote-repository-path (alias -R): Path to a local clone of " +
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
      return Readable.fromWeb(res.body);
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
    forceClone: !argv["vote-repository-path"],
    pushToRemote: !argv["vote-repository-path"],
  },
  shareholdersThreshold,
  shareholders: tscMembersArray.map(({ email }) => email),
  allowedVoters: tscMembersArray.map(
    (voter) => `${voter.name} <${voter.email}>`
  ),
  method: "Condorcet",
  path: argv["vote-repository-path"]
    ? resolve(argv["vote-repository-path"], argv.branch)
    : argv.branch,
});

if (argv["create-pull-request"]) {
  await createVotePR(argv);
}
