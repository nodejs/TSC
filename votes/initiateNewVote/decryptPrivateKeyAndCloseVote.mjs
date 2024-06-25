#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { open, writeFile } from "node:fs/promises";
import path from "node:path";
import { createInterface as readLines } from "node:readline";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import countFromGit from "@node-core/caritat/countBallotsFromGit";
import readReadme from "./extractInfoFromReadme.mjs";

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
    "prepare-json-summary-dirname": {
      describe: "Directory where to create the JSON summary when using ",
      type: "string",
    },
    "prepare-json-summary-graphql-query": {
      describe: "Path to store mutation request to commit JSON summary",
      type: "string",
    },
    "save-markdown-summary": {
      describe: "Write the markdown to a file (use - for stdout)",
      type: "string",
    },
    "nodejs-repository-path": {
      type: "string",
    },
  },
});

const keyParts = [
  ...new Set(
    JSON.parse(parsedArgs.comments || "[]")
      .map(
        (txt) =>
          /-----BEGIN SHAMIR KEY PART-----(.+)-----END SHAMIR KEY PART-----/s.exec(
            txt,
          )?.[1],
      )
      .filter(Boolean),
  ),
];

const firstCommitRef = parsedArgs.fromCommit;
const voteFileCanonicalName = "vote.yml";

const subPath = await new Promise(async (resolve, reject) => {
  try {
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
  } catch (err) {
    reject(err);
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
  pushToRemote: false,
  commitJsonSummary: parsedArgs["commit-json-summary"]
    ? {
        refs: parsedArgs.prURL,
      }
    : null,
});

async function generateSummaryFilePath() {
  const date = new Date().toISOString().slice(0, 10);
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    const filepath = path.join(
      parsedArgs["prepare-json-summary-dirname"],
      `${date}-${i}.json`,
    );
    if (!existsSync(filepath)) {
      return filepath;
    }
  }

  throw new Error("Could not find a path for the summary file");
}

async function getSHA(ref) {
  return new Promise(async (resolve, reject) => {
    const cp = spawn("git", [
      "--no-pager",
      "rev-parse",
      ref,
    ]);
    cp.on("error", reject);
    resolve(cp.stdout.toArray().then((b) => Buffer.concat(b).toString("utf-8").trim()));
  });
}

if (parsedArgs["prepare-json-summary-graphql-query"]) {
  let input, crlfDelay;
  if (parsedArgs["nodejs-repository-path"] == null) {
    input = await fetch(
      "https://raw.githubusercontent.com/nodejs/node/HEAD/README.md",
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
      "r",
    );
    input = fh.createReadStream();
    crlfDelay = Infinity;
  }

  const summary = result.toJSON();
  for await (const { handle, name, email } of readReadme(
    readLines({ input, crlfDelay }),
  )) {
    const authorName = `${name} <${email}>`;
    if (authorName in summary.votes) {
      summary.votes[handle] = summary.votes[authorName];
      delete summary.votes[authorName];
    }
  }

  summary.refs = parsedArgs.prURL;

  const lastCommitSHA = await getSHA(parsedArgs.toCommit);
  await writeFile(
    parsedArgs["prepare-json-summary-graphql-query"],
    `mutation ($repo: String!, $commit_title: String!, $commit_body: String) {
    createCommitOnBranch(input: {
      branch: {
        repositoryNameWithOwner: $repo,
        branchName: ${JSON.stringify(parsedArgs.branch)}
      },
      message: {
        headline: $commit_title,
        body: $commit_body
      },
      expectedHeadOid: ${JSON.stringify(lastCommitSHA)},
      fileChanges: {
        additions: [{
          path: ${JSON.stringify(await generateSummaryFilePath())},
          contents: ${JSON.stringify(Buffer.from(JSON.stringify(summary)).toString("base64"))},
        }],
        deletions: [${
          await new Promise(async (resolve, reject) => {
            try {
              const cp = spawn("git", [
                "--no-pager",
                "diff",
                `${firstCommitRef}^..${lastCommitSHA}`,
                "--name-only",
              ]);
              cp.on("error", reject);
              const files = [];
              for await (const path of readLines(cp.stdout)) {
                files.push(`\n          { path: ${JSON.stringify(path)} }`);
              }
              resolve(files.join(','));
            } catch (err) {
              reject(err);
            }
          })
        }
        ]
    }}) {
      commit {
          url
        }
      }
    }\n`,
  );
}

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
