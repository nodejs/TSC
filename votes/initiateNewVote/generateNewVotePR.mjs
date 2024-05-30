#!/usr/bin/env node

import { parseArgs } from "node:util";
import { prOptions, createVotePR } from "./_generateNewVotePR.mjs";

const { values: argv } = parseArgs({ options: prOptions });

const shareholdersThreshold = 3;

const keyServerURL = "hkps://keys.openpgp.org";

await createVotePR(argv, shareholdersThreshold, keyServerURL);
