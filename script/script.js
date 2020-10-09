let money = 30000;
let income = 'Подработка';
let addExpenses = 'Интернет, такси, кафе';
let deposit = true;
let mission = 100000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay);