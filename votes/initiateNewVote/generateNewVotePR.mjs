#!/usr/bin/env node

import { parseArgs } from "node:util";
import { prOptions, createVotePR } from "./_generateNewVotePR.mjs";

const { values: argv } = parseArgs({ options: prOptions });

await createVotePR(argv);
