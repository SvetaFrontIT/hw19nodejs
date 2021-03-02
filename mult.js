const calculator = require('./calculator');
const a = calculator.currentNum;
const mult = function(b) {
    const result = a * b;
    return result;
}
module.exports = mult;