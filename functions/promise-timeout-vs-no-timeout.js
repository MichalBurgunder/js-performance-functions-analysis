const speeder = require("./index");

function resolveWithTimeout(name) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
}

function simplePromise() {
  return new Promise(function (resolve, reject) {
    resolve(true);
  });
}

async function compareFunctions() {
  const results = await speeder([resolveWithTimeout, simplePromise], {
    names: ["Simple Resolve", "Timeout resolve"],
  });

  console.log(results);
}

compareFunctions();
