#!/usr/bin/env node

import { exit } from "node:process";
import { env } from "node:process";
import count from "@node-core/caritat/countParticipationFromGit";

const START_MARKER = "<!-- BEGIN PARTICIPATION -->";
const END_MARKER = "<!-- END PARTICIPATION -->";

const participationResult = await count({
  subPath: env.SUBPATH,
  firstCommitRef: env.FIRST_COMMIT_REF,
  lastCommitRef: env.LAST_COMMIT_REF,
  reportInvalidCommitsAfter: env.CHECK_COMMITS_AFTER,
});

const participation = participationResult?.participation;

if (participation == null) {
  console.error("Can't compute participation", participationResult);
  exit(1);
}

const mdParticipation = `\n\n${START_MARKER}\n\nCurrent estimated participation: ${
  Math.round(participation * 100_00) / 100
}%\n\n${END_MARKER}\n`;

let body = env.PR_DESCRIPTION || "";
const startMarkerIndex = body.indexOf(START_MARKER);

if (startMarkerIndex === -1) {
  body += mdParticipation;
} else {
  const endMarkerIndex = body.lastIndexOf(END_MARKER) + END_MARKER.length;
  body =
    body.slice(0, startMarkerIndex) +
    mdParticipation +
    (endMarkerIndex > startMarkerIndex && endMarkerIndex < body.length
      ? body.slice(endMarkerIndex)
      : "");
}

const invalidCommitReason = Object.entries(
  participationResult.invalidCommits ?? {}
)
  .map(
    ([sha, reason]) =>
      `Commit ${sha} won't be taken into account for the following reason: ${reason}`
  )
  .join("\n\n");

console.log(
  JSON.stringify({
    body,
    hasFailures: Boolean(invalidCommitReason),
    invalidCommitReason,
  })
);
