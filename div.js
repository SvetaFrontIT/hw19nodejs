const calculator = require('./calculator');
const a = calculator.currentNum;
const div = function(b) {
    const result = a / b;
    return result;
}
module.exports = div;