#!/usr/bin/env node

import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { createInterface as readLines } from "node:readline";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import countFromGit from "@node-core/caritat/countBallotsFromGit";

const { values: parsedArgs } = parseArgs({
  options: {
    remote: {
      type: "string",
      describe:
        "Name or URL to the remote repo. If not provided, SSH pointing to --github-repo-name will be used.",
    },
    branch: {
      type: "string",
      describe: "Name of the branch where the vote takes place",
    },
    mailmap: {
      type: "string",
      describe: "Path to the mailmap file (if any)",
    },
    fromCommit: {
      describe: "reference to the commit initiating the vote",
      type: "string",
    },
    toCommit: {
      type: "string",
      describe: "reference to the last vote commit",
    },
    prURL: {
      describe: "URL to the PR to add to the vote summary file",
      type: "string",
    },
    comments: {
      describe: "The body of the PR comments that contains the key part(s)",
      type: "string",
    },
    "commit-json-summary": {
      describe: "Commit JSON summary",
      type: "boolean",
    },
    "save-markdown-summary": {
      describe: "Write the markdown to a file (use - for stdout)",
      type: "string",
    },
  },
});

const keyParts = JSON.parse(parsedArgs.comments)
  .map(
    (txt) =>
      /-----BEGIN SHAMIR KEY PART-----(.+)-----END SHAMIR KEY PART-----/s.exec(
        txt
      )?.[1]
  )
  .filter(Boolean);

const firstCommitRef = parsedArgs.fromCommit;
const voteFileCanonicalName = "vote.yml";

const subPath = await new Promise(async (resolve, reject) => {
  const cp = spawn("git", [
    "--no-pager",
    "show",
    firstCommitRef,
    "--name-only",
  ]);
  cp.on("error", reject);
  for await (const line of readLines(cp.stdout)) {
    if (line === voteFileCanonicalName) return resolve("./");
    if (line.endsWith(`/${voteFileCanonicalName}`))
      return resolve(line.slice(0, -voteFileCanonicalName.length));
  }
});

const { result, privateKey } = await countFromGit({
  cwd: fileURLToPath(new URL("../../", import.meta.url)),
  repoURL: parsedArgs.remote,
  branch: parsedArgs.branch,
  subPath,
  keyParts,
  firstCommitRef,
  lastCommitRef: parsedArgs.toCommit,
  mailmap: parsedArgs.mailmap,
  commitJsonSummary: parsedArgs["commit-json-summary"]
    ? {
        refs: parsedArgs.prURL,
      }
    : null,
});

if (parsedArgs["save-markdown-summary"]) {
  function* toArmoredMessage(str, chunkSize = 64) {
    yield "-----BEGIN PRIVATE KEY-----";
    for (let i = 0; i < str.length; i += chunkSize) {
      yield str.substr(i, chunkSize);
    }
    yield "-----END PRIVATE KEY-----";
  }
  await writeFile(
    parsedArgs["save-markdown-summary"],
    result.generateSummary(
      Array.from(
        toArmoredMessage(Buffer.from(privateKey).toString("base64"))
      ).join("\n")
    ),
    "utf8"
  );
}
