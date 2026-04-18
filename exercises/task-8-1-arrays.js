// TASK 8.1: Arrays 🟢
// Run: node exercises/task-8-1-arrays.js

console.log("📋 Task 8.1: Arrays\n");

const numbers = [5, -2, 8, -15, 12, 3, -7, 11, 0];

// BUILD: Use array methods
const doubled = numbers.map(num => num * 2);
console.log(`🔹 Doubled: [${djoined}]`);

const noNegatives = numbers.filter(num => num >= 0);
console.log(`🔹 No negatives: [${noNegatives}]`);

const firstOverTen = numbers.find(num => num > 10);
console.log(`🔹 First > 10: ${firstOverTen}`);

const product = numbers.reduce((total, num) => total * num, 1);
console.log(`🔹 Product of all: ${product}`);

console.log("\n✅ Task 8.1 Complete!");