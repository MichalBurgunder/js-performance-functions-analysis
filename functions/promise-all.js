// Promise.all vs serial awaits
const speeder = require("speeder");

async function someFunction() {
  return 0;
}

async function serialAwait() {
  await someFunction();
}

async function promiseAllAwait() {
  await Promise.all([someFunction()]);
}

async function compareFunctions() {
  const results = await speeder([serialAwait, promiseAllAwait], {
    names: ["Serial async return", "Parallel async return"],
  });

  console.log(results);
}

compareFunctions();
