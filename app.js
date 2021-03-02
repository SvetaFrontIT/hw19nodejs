// Задание
// 1) Сделать npm модуль
// 2) set, add, sub, mult, div должны быть отдельными файлами и подключаться в файл calculator

const calculator = require('./calculator');

console.log('app.js set:', calculator.set(10)); //10
console.log('addition', calculator.add(2)); // 12
console.log('substruction', calculator.sub(5)) // 7
console.log('multiplication', calculator.mult(4)) // 28
console.log('division', calculator.div(2)) // 14