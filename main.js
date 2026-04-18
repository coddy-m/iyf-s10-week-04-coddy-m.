/**
 * Week 4: JavaScript Fundamentals
 * All Lesson 7 & 8 exercises consolidated
 * Open console to see outputs
 */

console.log("🚀 Week 4 JavaScript Exercises Loaded\n");

// ============================================
// TASK 7.1: Variables Practice
// ============================================
console.log("📋 Task 7.1: Variables");
const myName = "Your Name";
const myAge = 25;
const isStudent = true;
const favoriteColors = ["blue", "green", "purple"];
const today = new Date();

console.log(`  Name: ${myName} (type: ${typeof myName})`);
console.log(`  Age: ${myAge} (type: ${typeof myAge})`);
console.log(`  Student: ${isStudent} (type: ${typeof isStudent})`);
console.log(`  Colors: ${favoriteColors.join(', ')}`);
console.log(`  Today: ${today.toLocaleDateString()}\n`);

// ============================================
// TASK 7.2: Data Types & Operators
// ============================================
console.log("📋 Task 7.2: Data Types & Operators");

// Number operations
const a = 10, b = 3;
console.log(`  ${a} + ${b} = ${a + b}`);
console.log(`  ${a} - ${b} = ${a - b}`);
console.log(`  ${a} * ${b} = ${a * b}`);
console.log(`  ${a} / ${b} = ${(a / b).toFixed(2)}`);
console.log(`  ${a} % ${b} = ${a % b}`);
console.log(`  ${a} ** ${b} = ${a ** b}`);

// String operations
const firstName = "John", lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(`\n  Full Name: ${fullName}`);
console.log(`  Uppercase: ${fullName.toUpperCase()}`);
console.log(`  Includes "John": ${fullName.includes("John")}`);

// Age calculations challenge
const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearAt100 = new Date().getFullYear() + (100 - myAge);
console.log(`\n  🎯 Challenge:`);
console.log(`  Age in days: ~${ageInDays.toLocaleString()}`);
console.log(`  Age in hours: ~${ageInHours.toLocaleString()}`);
console.log(`  Year turning 100: ${yearAt100}\n`);

// ============================================
// TASK 7.3: Functions
// ============================================
console.log("📋 Task 7.3: Functions");

const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
const isEven = (num) => num % 2 === 0;
const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const reverseString = (str) => str.split('').reverse().join('');
const calculateTip = (bill, tipPercent = 15) => bill * (tipPercent / 100);

console.log(`  Area (5x10): ${calculateArea(5, 10)}`);
console.log(`  25°C → ${celsiusToFahrenheit(25).toFixed(1)}°F`);
console.log(`  Is 42 even? ${isEven(42)}`);
console.log(`  Initials of "Jane Doe": ${getInitials("Jane Doe")}`);
console.log(`  Reverse "hello": ${reverseString("hello")}`);
console.log(`  Tip on $50 (18%): $${calculateTip(50, 18).toFixed(2)}\n`);

// ============================================
// TASK 7.4: Control Flow
// ============================================
console.log("📋 Task 7.4: Control Flow");

const getGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
};

const getDayName = (num) => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[num] || "Invalid day";
};

console.log(`  Grade for 85: ${getGrade(85)}`);
console.log(`  Day 3: ${getDayName(3)}`);

// Loop exercises
console.log(`  \n  🔄 Numbers 1-10: ${[...Array(10)].map((_,i)=>i+1).join(', ')}`);
console.log(`  🔄 Even numbers 1-50 (first 10): ${[...Array(25)].map((_,i)=>(i+1)*2).slice(0,10).join(', ')}...`);

// FizzBuzz (1-20 sample)
const fizzBuzz = (n) => {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
};
console.log(`  🔄 FizzBuzz (1-20): ${[...Array(20)].map((_,i)=>fizzBuzz(i+1)).join(', ')}`);

// Star triangle
console.log(`  🔄 Star Triangle:\n${[...Array(5)].map((_,i)=>' '.repeat(4-i)+'*'.repeat(2*i+1)).join('\n')}\n`);

// ============================================
// TASK 8.1: Arrays
// ============================================
console.log("📋 Task 8.1: Arrays");

const numbers = [1, 2, 3, 4, 5, -2, -5, 15];
console.log(`  Original: [${numbers}]`);
console.log(`  Doubled: [${numbers.map(n => n * 2)}]`);
console.log(`  Positive only: [${numbers.filter(n => n > 0)}]`);
console.log(`  First > 10: ${numbers.find(n => n > 10)}`);
console.log(`  Product: ${numbers.reduce((prod, n) => prod * n, 1)}\n`);

// ============================================
// TASK 8.2: Objects
// ============================================
console.log("📋 Task 8.2: Objects");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "coding"],
    address: { city: "New York", country: "USA" }
};
console.log(`  Person: ${person.firstName} ${person.lastName}`);
console.log(`  Lives in: ${person.address.city}, ${person.address.country}`);
console.log(`  Hobbies: ${person.hobbies.join(', ')}\n`);

// ============================================
// TASK 8.3: Array of Objects
// ============================================
console.log("📋 Task 8.3: Array of Objects");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

console.log(`  Names: [${students.map(s => s.name).join(', ')}]`);
console.log(`  Grade > 80: [${students.filter(s => s.grade > 80).map(s => s.name).join(', ')}]`);
console.log(`  Found Charlie: ${students.find(s => s.name === "Charlie")?.grade}`);
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(`  Average grade: ${avgGrade.toFixed(2)}`);
console.log(`  CS Majors: [${students.filter(s => s.major === "CS").map(s => s.name).join(', ')}]`);
const sorted = [...students].sort((a,b) => b.grade - a.grade);
console.log(`  Top student: ${sorted[0].name} (${sorted[0].grade})`);
console.log(`  Has grade > 90? ${students.some(s => s.grade > 90)}`);
console.log(`  All passing (≥60)? ${students.every(s => s.grade >= 60)}\n`);

console.log("✅ All lesson exercises complete!\n");