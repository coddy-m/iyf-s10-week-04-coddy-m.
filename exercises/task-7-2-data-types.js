// TASK 7.2: Data Types & Operators 🟢
// Run: node exercises/task-7-2-data-types.js

console.log("📋 Task 7.2: Data Types & Operators\n");

// CHALLENGE: Calculate and display age metrics
const currentYear = new Date().getFullYear();
const myAge = 25;

const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurn100 = currentYear + (100 - myAge);

console.log(`📊 Age Calculations:`);
console.log(`  Age in days: ~${ageInDays.toLocaleString()}`);
console.log(`  Age in hours: ~${ageInHours.toLocaleString()}`);
console.log(`  Year turning 100: ${yearTurn100}`);

// String Operations (from lesson)
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(`\n📝 String Ops:`);
console.log(`  Uppercase: ${fullName.toUpperCase()}`);
console.log(`  Lowercase: ${fullName.toLowerCase()}`);
console.log(`  First char: ${firstName.charAt(0)}`);
console.log(`  Includes "John": ${fullName.includes("John")}`);

// Comparison & Logical (from lesson)
console.log(`\n🔍 Comparison & Logical:`);
console.log(`  5 > 3: ${5 > 3}`);
console.log(`  5 === 5: ${5 === 5}`);
console.log(`  5 == "5": ${5 == "5"} (avoid loose equality)`);
console.log(`  true && false: ${true && false}`);
console.log(`  true || false: ${true || false}`);

console.log("\n✅ Task 7.2 Complete!");