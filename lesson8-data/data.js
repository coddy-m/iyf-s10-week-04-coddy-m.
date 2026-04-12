// ============================================
// TASK 8.1: Arrays 🟢
// ============================================

console.log("\n=== Task 8.1: Arrays ===");

// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(`\n🍎 Array Basics:`);
console.log(`   fruits[0]: "${fruits[0]}"`);
console.log(`   fruits.length: ${fruits.length}`);

// Modifying arrays
console.log(`\n🔧 Array Methods:`);
console.log(`   Original: [${fruits.join(", ")}]`);
fruits.push("grape");
console.log(`   After push("grape"): [${fruits.join(", ")}]`);
fruits.unshift("mango");
console.log(`   After unshift("mango"): [${fruits.join(", ")}]`);
fruits.pop();
console.log(`   After pop(): [${fruits.join(", ")}]`);
fruits.shift();
console.log(`   After shift(): [${fruits.join(", ")}]`);

// Exercise 2: Array Methods
console.log(`\n⚡ Array Methods with [${numbers.join(", ")}]:`);

// forEach
console.log(`   forEach (x2):`);
numbers.forEach(num => console.log(`     ${num} × 2 = ${num * 2}`));

// map
const doubled = numbers.map(num => num * 2);
console.log(`   map (×2): [${doubled.join(", ")}]`);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`   filter (even): [${evenNumbers.join(", ")}]`);

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(`   find (first even): ${firstEven}`);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`   reduce (sum): ${sum}`);

// includes
console.log(`   includes(3): ${numbers.includes(3)}`);

// ✅ Build: Array Method Challenges
console.log(`\n🎯 Array Challenges:`);
const challengeNums = [3, -1, 7, -5, 12, 0, 8];

// 1. Double all numbers
const allDoubled = challengeNums.map(n => n * 2);
console.log(`   Double all: [${allDoubled.join(", ")}]`);

// 2. Filter out negative numbers
const noNegatives = challengeNums.filter(n => n >= 0);
console.log(`   No negatives: [${noNegatives.join(", ")}]`);

// 3. Find first number > 10
const firstOver10 = challengeNums.find(n => n > 10);
console.log(`   First > 10: ${firstOver10}`);

// 4. Calculate product of all numbers
const product = challengeNums.reduce((prod, num) => prod * num, 1);
console.log(`   Product: ${product}`);


// ============================================
// TASK 8.2: Objects 🟡
// ============================================

console.log("\n=== Task 8.2: Objects ===");

// Exercise 1: Object Basics
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(`\n👤 Object Access:`);
console.log(`   firstName (dot): ${person.firstName}`);
console.log(`   lastName (bracket): ${person["lastName"]}`);
console.log(`   address.city (nested): ${person.address.city}`);

console.log(`\n🔧 Object Modification:`);
console.log(`   Original age: ${person.age}`);
person.age = 31;
console.log(`   Updated age: ${person.age}`);
person.email = "john@example.com";
console.log(`   Added email: ${person.email}`);
delete person.isStudent;
console.log(`   Deleted isStudent: ${person.isStudent}`);

// Exercise 2: Object Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide(a, b) {
        return b === 0 ? "Error: Division by zero" : a / b;
    }
};

console.log(`\n🧮 Object Methods:`);
console.log(`   add(5, 3): ${calculator.add(5, 3)}`);
console.log(`   subtract(10, 4): ${calculator.subtract(10, 4)}`);
console.log(`   multiply(6, 7): ${calculator.multiply(6, 7)}`);
console.log(`   divide(20, 4): ${calculator.divide(20, 4)}`);

// Exercise 3: Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(`\n📊 Object Iteration:`);
console.log(`   Keys: [${Object.keys(scores).join(", ")}]`);
console.log(`   Values: [${Object.values(scores).join(", ")}]`);
console.log(`   Entries:`);
Object.entries(scores).forEach(([subject, score]) => {
    console.log(`     ${subject}: ${score}`);
});


// ============================================
// TASK 8.3: Array of Objects 🔴
// ============================================

console.log("\n=== Task 8.3: Array of Objects ===");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

console.log(`\n🎓 Student Data (${students.length} students):`);

// 1. Get all student names
const names = students.map(s => s.name);
console.log(`   Names: [${names.join(", ")}]`);

// 2. Get students with grade > 80
const highAchievers = students.filter(s => s.grade > 80);
console.log(`   Grade > 80: [${highAchievers.map(s => s.name).join(", ")}]`);

// 3. Find student named "Charlie"
const charlie = students.find(s => s.name === "Charlie");
console.log(`   Charlie: ${JSON.stringify(charlie)}`);

// 4. Calculate average grade
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(`   Class average: ${avgGrade.toFixed(2)}`);

// 5. Get CS majors only
const csMajors = students.filter(s => s.major === "CS");
console.log(`   CS Majors: [${csMajors.map(s => s.name).join(", ")}]`);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(`   Sorted by grade: [${sortedByGrade.map(s => `${s.name}(${s.grade})`).join(", ")}]`);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(s => s.grade > 90);
console.log(`   Has grade > 90: ${hasTopStudent}`);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(s => s.grade >= 60);
console.log(`   All passing (≥60): ${allPassing}`);