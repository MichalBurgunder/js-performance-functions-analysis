// concat vs spread operator
const speeder = require('speeder');

function concatArrays(arr1, arr2) {
  arr1.concat(arr2);
}

function spreadOperatorArrays(arr1, arr2) {
  [...arr1, ...arr2];
}

async function compareFunctions() {
  const results = await speeder([concatArrays, spreadOperatorArrays], {
    names: ['concat', 'spread'],
    inputs: [
      [[1], [2]],
      [[1], [2]],
    ],
    multipleInputs: [true, true],
    error: [false, false],
  });
  console.log(results);
}

compareFunctions();
