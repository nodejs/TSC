This directory contains JSON files recording the votes (including abstentions)
of TSC members. This is used by automation to determine when TSC members are
inactive, per the TSC charter.

The format of the file names is `YYYY-MM-DD-N.json` where N is an integer. It
will usually be `0` but will need to be incremented if there is more than one
vote on a given day. (The day itself is imprecise anyway as a vote can take many
days to be completed and the day will be different depending on the time zone
being used to determine it.)

The votes are represented as `1` for a vote in favor, `0` for an abstention, and
`-1` for a vote against. Abstentions must be explicit. People who did not
participate in the vote are not listed in the JSON file.
