// return await vs await vs return, throw new Error
const speeder = require("speeder");

async function asyncThrow() {
  throw new Error();
}

async function syncFuncReturn() {
  return asyncThrow();
}

async function asyncFuncReturnAwait() {
  return await asyncThrow();
}

async function asyncFuncAwait() {
  await asyncThrow();
}

async function compareFunctions() {
  const results = await speeder(
    [syncFuncReturn, asyncFuncReturnAwait, asyncFuncAwait],
    {
      names: [
        "async return throw",
        "async return await throw",
        "async await throw",
      ],
      errors: [true, true, true],
    }
  );

  console.log(results);
}

compareFunctions();
