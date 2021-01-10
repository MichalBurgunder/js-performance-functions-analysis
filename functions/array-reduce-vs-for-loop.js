// reduce vs for loop
const speeder = require("speeder");

function reduceSum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function forLoopSum(arr) {
  let myRes = 0;
  for (let i = 0; i < arr.length; i++) {
    myRes += arr[i];
  }
  return myRes;
}

async function compareFunctions() {
  const theArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

  const results = await speeder([reduceSum, forLoopSum], {
    names: ["reduce() Sum", "For loop Sum"],
    inputs: [theArr, theArr],
  });

  console.log(results);
}

compareFunctions();
