// map vs for vs forEach, add 1
const speeder = require("speeder");

function addOneMap(input) {
  return input.map((point) => point++);
}

function addOneFor(input) {
  for (let i = 0; i < input.length; i++) {
    input[i]++;
  }
  return input;
}

function addOneForEach(input) {
  input.forEach((point) => point++);
  return input;
}

async function compareFunctions() {
  const theArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
  const results = await speeder([addOneMap, addOneFor, addOneForEach], {
    names: ["map", "for", "forEach"],
    inputs: [theArr, theArr, theArr],
  });

  console.log(results);
}

compareFunctions();
