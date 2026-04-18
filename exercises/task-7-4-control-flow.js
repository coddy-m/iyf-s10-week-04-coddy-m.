// TASK 7.4: Control Flow 🟡
// Run: node exercises/task-7-4-control-flow.js

console.log("📋 Task 7.4: Control Flow\n");

// BUILD 1: Print numbers 1-100 (showing first 10 & last 10 for console space)
console.log("🔢 Numbers 1-10:");
for (let i = 1; i <= 10; i++) console.log(i);
console.log("...");
console.log("Numbers 91-100:");
for (let i = 91; i <= 100; i++) console.log(i);

// BUILD 2: Print only even numbers 1-50
console.log("\n🔢 Even numbers 1-50:");
let evenOutput = [];
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) evenOutput.push(i);
}
console.log(evenOutput.join(", "));

// BUILD 3: FizzBuzz (1-30 for readability)
console.log("\n🟨 FizzBuzz (1-30):");
let fizzBuzzOutput = [];
for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) fizzBuzzOutput.push("FizzBuzz");
    else if (i % 3 === 0) fizzBuzzOutput.push("Fizz");
    else if (i % 5 === 0) fizzBuzzOutput.push("Buzz");
    else fizzBuzzOutput.push(i);
}
console.log(fizzBuzzOutput.join(", "));

// BUILD 4: Print a triangle of stars
console.log("\n⭐ Star Triangle:");
const rows = 5;
for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

console.log("\n✅ Task 7.4 Complete!");