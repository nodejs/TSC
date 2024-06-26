# TSC votes

## Initiate a new TSC vote

For yes/no questions, the TSC will typically use GH reactions to conduct a vote,
and use this workflow only for questions with several candidate answers, or to
e.g guarantee vote secrecy until the vote is counted.

### From the GitHub web UI

1. Edit the [`_EDIT_ME.yml`](./_EDIT_ME.yml) file, fill in the info related to
   vote to open.
2. When committing, chose to commit to new branch and open a Pull Request to
   discuss the vote terms with the whole TSC.
3. Once the PR has approvals, merge it on the `initiateNewVote` branch (GHA
   should have set that as the target/base branch automatically).
4. GHA will open a new PR with the vote initiated.

### From the CLI

This method is not recommended.

1. Edit the [`_EDIT_ME.yml`](./_EDIT_ME.yml) file, fill in the info related to
   vote to open.
2. Commit your changes.
3. Push that to the remote `refs/heads/initiateNewVote`.
4. GHA will open a new PR with the vote initiated.

## Close a vote

You can only close a vote if enough secret holders have revealed their secret part.

### Using the GitHub Actions workflow

Start a `Close vote` workflow, either from
[GitHub web UI](https://github.com/nodejs/TSC/actions/workflows/closeVote.yml)
or using the CLI. Pass the vote PR ID that you wish to close.

This will reconstruct the private key by searching for key parts in the PR
comments, decrypt the ballots, count the votes. It will add a comment showing
all the vote and the results, and push a commit that removes all the vote files
to replace them with a JSON summary. That JSON file is used by our automation to
detect inactive TSC voting members.

### Using the CLI

Use this method only to debug the GHA workflow, or to avoid disclosing the vote
ballots.

Check out the default branch of this repo locally and perform the following steps:

1. Install the latest `@node-core/caritat` from npm.
2. Fetch the top of the vote branch.
3. Run the `decryptPrivateKeyAndCloseVote.mjs` with the following arguments:

   * `--remote`: the name/URL of the upstream (maybe `origin`).
   * `--comments`: a JSON array containing the secret parts.
   * `--branch`: the name of the vote branch.
   * `--fromCommit`: a reference to the commit that initialized the vote.
   * `--toCommit`: a reference to the last commit to take into account (should
     be the top of the vote branch).
   * `--prURL`: the URL to the vote PR.
   * `--save-json-summary`: the path where to save the JSON summary.
   * `--save-markdown-summary`: the path where to save the markdown summary.

For the happy path, you can use the following command:

```bash
npm install --no-save @node-core/caritat
gh pr view <PR-number-or-URL> \
  --json comments,headRefName,commits,url \
  --jq '[
   ([
      "git",
      "fetch",
      "https://github.com/nodejs/TSC.git",
      @sh "\(.headRefName)"
   ] | join (" ")),
   ([
    "./votes/initiateNewVote/decryptPrivateKeyAndCloseVote.mjs",
    "--remote=https://github.com/nodejs/TSC.git",
    (.comments | map(.body | select(contains("-----BEGIN SHAMIR KEY PART-----"))) | tojson | @sh "--comments=\(.)"),
    (@sh "--branch=\(.headRefName)"),
    (@sh "--fromCommit=\(.commits[0].oid)"),
    (@sh "--toCommit=\(.commits[-1].oid)"),
    (@sh "--prURL=\(.url)"),
    "--save-json-summary=summary.json",
    "--save-markdown-summary=summary.md"
  ] | join(" "))
  ] | join(";")' | sh
```

In case of a secret vote, the key parts won't be disclosed as comments, but
instead should be communicated privately to the person closing the vote – in
which case the `SHAMIR KEY PART` should be provided manually.

If you are trying to replicate a vote count from a vote that has already closed,
you'd need to change the `--toCommit` argument to not include the commit closing
the vote.

This will create two files:

* `summary.json`: the JSON summary that should be committed for the vote to be
  taken into account for the inactivity bot. In case of a secret vote, make sure
  to edit the file to replace the actual votes with the string `"REDACTED"`.
* `summary.md`: the markdown summary file. You can publish this as a comment on
  the PR thread. In case of a secret vote, make sure to remove the private key
  and the annotations that show the actual votes.
