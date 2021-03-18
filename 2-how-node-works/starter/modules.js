// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
const calc2 = require('./test-module-2');
const { add, multiply, divide } = require('./test-module-2.js');
console.log(calc2.multiply(2, 7));
console.log(add(2, 9));

// caching: module only gets loaded once
// const greeter = require('./test-module-3');
// greeter();
// greeter();
// greeter();
// greeter();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
