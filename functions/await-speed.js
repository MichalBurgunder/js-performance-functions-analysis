// sync function vs async function
const speeder = require('speeder');

async function asyncReturn() {
  return 'returned!';
}

function syncReturn() {
  return 'returned!';
}

async function compareFunctions() {
  const results = await speeder([syncReturn, asyncReturn], {
    names: ['Sync Simple Return', 'Async Simple Return'],
  });

  console.log(results);
}

compareFunctions();
