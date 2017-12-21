'use strict';

const stdev = require('compute-stdev');

const LENGTH = +process.argv[2] || 3;
const NUM_RESULTS = +process.argv[3] || 5;
const MINIMUM_SCORE = +process.argv[4] || 0;

const raw = require('fs').readFileSync(__dirname + '/data.tsv', 'utf-8');

function split(string, delim) {
  return string.split(delim)
               .map(x => x)
               .filter(x => x);
}

const timeScores = split(raw, '\n').map(x => split(x, '\t').map(x => +x));

// Normalize scores. If someone didn't include any fives, then they will cause
// the selection of lower-scored times for everyone else so that the scores are
// equitable. So bump up all scores for anyone who did not include any fives
// until they have a five.
let data = timeScores.map((scores) => {
  while (! scores.includes(5)) {
    scores = scores.map((score) => score + 1);
  }
  return scores;
});

// List of indexes to ignore for times that do not work (score of 0 or 1) for
// half or more of attendees. This avoids the selection of equitably terrible
// times.
const indexesToIgnore = [];
for (let i=0; i<24; i++) {
  const count = data.filter((individualTimePrefs) => {
    return individualTimePrefs[i] > 1;
  }).length;
  if (count <= data.length / 2) {
    indexesToIgnore.push(i);
  }
}
let START = 0;
while (indexesToIgnore.includes(START)) {
  START++;
}

// Because our 0-5 scoring maps to percentages that don't increase linearly,
// let's convert to the percentages.
const scoreLegend = [0, .25, .5, .8, .9, 1]
data = data.map((scoresForOnePerson) => {
  return scoresForOnePerson.map((value) => {
    return scoreLegend[value];
  });
});

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

var allResults = [];

generateCombinations(0, []);

allResults.sort((a, b) => a.standardDeviation - b.standardDeviation);
allResults.slice(0, NUM_RESULTS).forEach((value) => console.log(value));

function generateCombinations(start, rv) {
  rv = rv.slice();
  if (rv.length === LENGTH) {
    // Get the scores for all times.
    const rawScores = rv.map((time) => data.map((value) => value[time]));

    // Get the sum of the scores for each individual
    const scores = data.map(function(undefined, i) {
      return sum(rawScores.map((row) => { return row[i]; }));
    });

    // Bail if this fails the minimum-total-score-for-all-inidividuals test
    if (scores.some((val) => val < MINIMUM_SCORE)) {
      return;
    }

    // Calculate the standard deviation of the total scores
    const standardDeviation = stdev(scores);

    allResults.unshift({
      times: rv,
      standardDeviation:  standardDeviation, // lower == more equitable
      // scores: scores
    });
    return;
  }

  if (start < 24) {
    let next = start + 1;
    while (indexesToIgnore.includes(next)) {
      next = next + 1;
    }
    generateCombinations(next, rv);
    rv.push(start);
    generateCombinations(next, rv);
  }
}
