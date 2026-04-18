// TASK 7.3: Functions 🟡
// Run: node exercises/task-7-3-functions.js

console.log("📋 Task 7.3: Functions\n");

// EXERCISE 2: Build These Functions
const calculateArea = (width, height) => width * height;

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

const isEven = (number) => number % 2 === 0;

const getInitials = (fullName) => fullName.split(" ").map(word => word[0]).join("").toUpperCase();

const reverseString = (str) => str.split("").reverse().join("");

// EXERCISE 3: Default Parameters
const calculateTip = (bill, tipPercent = 15) => bill * (tipPercent / 100);

// TESTING
console.log(`📐 calculateArea(5, 8) = ${calculateArea(5, 8)}`);
console.log(`🌡️ celsiusToFahrenheit(30) = ${celsiusToFahrenheit(30).toFixed(1)}°F`);
console.log(`🔢 isEven(7) = ${isEven(7)} | isEven(12) = ${isEven(12)}`);
console.log(`🔤 getInitials("Jane Doe") = ${getInitials("Jane Doe")}`);
console.log(`🔄 reverseString("JavaScript") = ${reverseString("JavaScript")}`);
console.log(`💰 calculateTip(120) = $${calculateTip(120).toFixed(2)}`);
console.log(`💰 calculateTip(120, 20) = $${calculateTip(120, 20).toFixed(2)}`);

console.log("\n✅ Task 7.3 Complete!");