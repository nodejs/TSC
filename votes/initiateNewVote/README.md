# Initiate a new TSC vote

For yes/no questions, the TSC will typically use GH reactions to conduct a vote,
and use this workflow only for questions with several candidate answers, or to
e.g guarantee vote secrecy until the vote is counted.

## From the GitHub web UI

1. Edit the [`_EDIT_ME.yml`](./_EDIT_ME.yml) file, fill in the info related to
   vote to open.
2. When committing, chose to commit to new branch and open a Pull Request to
   discuss the vote terms with the whole TSC.
3. Once the PR has approvals, merge it on the `initiateNewVote` branch (GHA
   should have set that as the target/base branch automatically).
4. GHA will open a new PR with the vote initiated.

## From the CLI

This method is not recommended.

1. Edit the [`_EDIT_ME.yml`](./_EDIT_ME.yml) file, fill in the info related to
   vote to open.
2. Commit your changes.
3. Push that to the remote `refs/heads/initiateNewVote`.
4. GHA will open a new PR with the vote initiated.
