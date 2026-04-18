// TASK 7.1: JavaScript Setup & Variables 🟢
// Run: node exercises/task-7-1-variables.js

console.log("📋 Task 7.1: Variables Exercise\n");

// 1. Declare required variables
const myName = "Your Name";
const myAge = 25;
const isStudent = true;
const favoriteColors = ["blue", "green", "purple"];
const todaysDate = new Date();

// 2. Console.log each with descriptive message
console.log(`👤 Name: ${myName} (type: ${typeof myName})`);
console.log(`🎂 Age: ${myAge} (type: ${typeof myAge})`);
console.log(`🎓 Is Student: ${isStudent} (type: ${typeof isStudent})`);
console.log(`🎨 Favorite Colors: ${favoriteColors.join(", ")} (type: ${typeof favoriteColors})`);
console.log(`📅 Today's Date: ${todaysDate.toLocaleDateString()} (type: ${typeof todaysDate})`);

console.log("\n✅ Task 7.1 Complete!");