// push vs direct assign
const speeder = require("speeder");

function pushAssignment(data, element) {
  data.push(element);
}

function directAssignment(data, element) {
  data[data.length] = element;
}

async function compareFunctions() {
  const results = await speeder([pushAssignment, directAssignment], {
    names: ["Push Assignment", "Direct Assignment"],
    inputs: [
      [[], 999],
      [[], 999],
    ],
    multipleInputs: [true, true],
  });

  console.log(results);
}

compareFunctions();
