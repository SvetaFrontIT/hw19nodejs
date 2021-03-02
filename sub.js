const calculator = require('./calculator');
const a = calculator.currentNum;
const sub = function(b) {
    const result = a - b;
    return result;
}
module.exports = sub;