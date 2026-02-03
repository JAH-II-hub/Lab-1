const numbers = [1, 2, 3, 4, 5];

// Square each number
const squared = numbers.map(num => num * num);

// Get only even numbers
const evens = numbers.filter(num => num % 2 === 0);

// Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);

console.log('Squared:', squared);
console.log('Evens:', evens);
console.log('Sum:', sum);