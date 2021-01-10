// reduce sum vs forEach sum
const speeder = require('speeder');

function reduceSum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function forEachSum(arr) {
  let finalValue = 0;
  arr.forEach((element) => finalValue + element);
  return finalValue;
}

async function compareFunctions() {
  const theArr = [1, 2, 3, 4, 5, 6, 7, 8];

  const results = await speeder([reduceSum, forEachSum], {
    names: ['reduce() Sum', 'forEach Sum'],
    inputs: [theArr, theArr],
  });

  console.log(results);
}

compareFunctions();
