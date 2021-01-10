// console.log vs console.error
const speeder = require('speeder');

function consoleLog() {
  console.log('hi');
}

function consoleError() {
  console.error('hi');
}

async function compareFunctions() {
  const results = await speeder([consoleLog, consoleError], {
    names: ['console.log', 'console.error'],
  });

  console.log(results);
}

compareFunctions();
