const calculator = require('./calculator');
const a = calculator.currentNum;
console.log(a);
const sum = function(b) {
    result = a + b;
    return result;
}
module.exports = sum;