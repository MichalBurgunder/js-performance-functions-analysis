// object.keys for vs for-in loop
const speeder = require('speeder');

function objectKeysFor(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {}
}

function forIn(obj) {
  for (const key in Object.keys(obj)) {
  }
}

async function compareFunctions() {
  const theObj = { key1: 1, key2: 2, key3: 3, key4: 4, key5: 5 };

  const results = await speeder([objectKeysFor, forIn], {
    names: ['object.keys for', 'for-in loop'],
    inputs: [theObj, theObj],
    error: [false, false],
  });

  console.log(results);
}

compareFunctions();
