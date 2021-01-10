// const vs let vs var
const speeder = require('speeder');

function constVariable(input) {
  const dataPoint = input;
}

function letVariable(input) {
  let dataPoint = input;
}

function varVariable(input) {
  var dataPoint = input;
}

async function compareFunctions() {
  const results = await speeder([constVariable, letVariable, varVariable], {
    names: ['const', 'let', 'var'],
  });

  console.log(results);
}

compareFunctions();
