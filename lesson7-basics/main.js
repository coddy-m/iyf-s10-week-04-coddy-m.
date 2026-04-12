// ============================================
// TASK 7.1: Variables Practice 🟢
// ============================================

// Declare variables for personal info
const myName = "Your Name";                    // string
let myAge = 25;                                // number
const isStudent = true;                        // boolean
const favoriteColors = ["blue", "green", "purple"]; // array
const today = new Date();                      // Date object

// Console.log each with descriptive message
console.log("=== Task 7.1: Variable Practice ===");
console.log(`👤 Name: ${myName} (type: ${typeof myName})`);
console.log(`🎂 Age: ${myAge} years (type: ${typeof myAge})`);
console.log(`🎓 Student: ${isStudent} (type: ${typeof isStudent})`);
console.log(`🎨 Favorite Colors: ${favoriteColors.join(", ")} (type: ${typeof favoriteColors})`);
console.log(`📅 Today: ${today.toLocaleDateString()} (type: ${typeof today})`);

// let vs const demonstration
let score = 100;
console.log(`\n📊 Initial score: ${score}`);
score = 150;
console.log(`📊 Updated score: ${score} (let allows reassignment)`);

const PI = 3.14159;
console.log(`🔢 PI: ${PI} (const cannot be reassigned)`);
// PI = 3; // ❌ This would throw: TypeError: Assignment to constant variable


// ============================================
// TASK 7.2: Data Types & Operators 🟢
// ============================================

console.log("\n=== Task 7.2: Operators ===");

// Exercise 1: Number Operations
let a = 10, b = 3;
console.log(`\n🔢 Math with a=${a}, b=${b}:`);
console.log(`   Addition: ${a + b}`);
console.log(`   Subtraction: ${a - b}`);
console.log(`   Multiplication: ${a * b}`);
console.log(`   Division: ${a / b}`);
console.log(`   Modulus: ${a % b}`);
console.log(`   Exponentiation: ${a ** b}`);

// Increment/Decrement
let count = 0;
console.log(`\n📈 Count: ${count} → ${++count} → ${count--} → ${count}`);

// Exercise 2: String Operations
let firstName = "John";
let lastName = "Doe";

console.log(`\n🔤 String Operations:`);
console.log(`   Concatenation: "${firstName}" + " " + "${lastName}" = "${firstName + " " + lastName}"`);
console.log(`   Template literal: \`Hello, \${firstName}!\` = "Hello, ${firstName}!"`);
console.log(`   Length: "${firstName}".length = ${firstName.length}`);
console.log(`   toUpperCase: "${firstName}".toUpperCase() = "${firstName.toUpperCase()}"`);
console.log(`   includes: "${firstName + " " + lastName}".includes("John") = ${(firstName + " " + lastName).includes("John")}`);

// Exercise 3: Comparison & Logical Operators
console.log(`\n🔍 Comparison Operators:`);
console.log(`   5 > 3: ${5 > 3}`);
console.log(`   5 < 3: ${5 < 3}`);
console.log(`   5 === 5 (strict): ${5 === 5}`);
console.log(`   5 == "5" (loose): ${5 == "5"} ⚠️ Avoid loose equality!`);
console.log(`   5 !== 3: ${5 !== 3}`);

console.log(`\n🔗 Logical Operators:`);
console.log(`   true && true: ${true && true}`);
console.log(`   true || false: ${true || false}`);
console.log(`   !true: ${!true}`);

// ✅ Challenge: Age Calculations
console.log(`\n🎯 Age Challenge:`);
const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurn100 = new Date().getFullYear() + (100 - myAge);

console.log(`   Age in days (approx): ${ageInDays.toLocaleString()} days`);
console.log(`   Age in hours (approx): ${ageInHours.toLocaleString()} hours`);
console.log(`   Year I'll turn 100: ${yearTurn100}`);


// ============================================
// TASK 7.3: Functions 🟡
// ============================================

console.log("\n=== Task 7.3: Functions ===");

// Exercise 1: Function Types
function greetDeclaration(name) {
    return `Hello, ${name}! (declaration)`;
}

const greetExpression = function(name) {
    return `Hello, ${name}! (expression)`;
};

const greetArrow = (name) => `Hello, ${name}! (arrow)`;

console.log(`\n🗣️ Function Types:`);
console.log(`   ${greetDeclaration("Alice")}`);
console.log(`   ${greetExpression("Bob")}`);
console.log(`   ${greetArrow("Charlie")}`);

// Exercise 2: Build Functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name[0])
        .join("")
        .toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(`\n🔧 Custom Functions:`);
console.log(`   Area (5x3): ${calculateArea(5, 3)}`);
console.log(`   25°C to °F: ${celsiusToFahrenheit(25).toFixed(1)}°F`);
console.log(`   isEven(4): ${isEven(4)}, isEven(7): ${isEven(7)}`);
console.log(`   Initials of "John Doe": "${getInitials("John Doe")}"`);
console.log(`   Reverse "hello": "${reverseString("hello")}"`);

// Exercise 3: Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(`\n🎁 Default Parameters:`);
console.log(`   greet(): "${greet()}"`);
console.log(`   greet("Alice"): "${greet("Alice")}"`);
console.log(`   greet("Bob", "Hi"): "${greet("Bob", "Hi")}"`);

// ✅ Build: calculateTip function
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(`\n💰 Tip Calculator:`);
console.log(`   $50 bill, 15% tip: $${calculateTip(50).toFixed(2)}`);
console.log(`   $50 bill, 20% tip: $${calculateTip(50, 20).toFixed(2)}`);


// ============================================
// TASK 7.4: Control Flow 🟡
// ============================================

console.log("\n=== Task 7.4: Control Flow ===");

// Exercise 1: If/Else - Grade Function
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(`\n📚 Grade Converter:`);
[95, 82, 76, 65, 45].forEach(score => {
    console.log(`   Score ${score} → Grade ${getGrade(score)}`);
});

// Exercise 2: Switch - Day Name
function getDayName(dayNumber) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNumber] || "Invalid day";
}

console.log(`\n📅 Day Names:`);
for (let i = 0; i <= 7; i++) {
    console.log(`   ${i} → ${getDayName(i)}`);
}

// Exercise 3: Loops
console.log(`\n🔄 Loop Examples:`);

// For loop 1-5
console.log(`   For loop: `, Array.from({length: 5}, (_, i) => i).join(", "));

// While loop equivalent
let countWhile = 0;
const whileResults = [];
while (countWhile < 5) {
    whileResults.push(countWhile++);
}
console.log(`   While loop: ${whileResults.join(", ")}`);

// For...of with array
const colors = ["red", "green", "blue"];
console.log(`   For...of: ${colors.join(", ")}`);

// ✅ Build Programs:
console.log(`\n🎯 Built Programs:`);

// 1. Print numbers 1-100 (showing first 10)
const numbers1to100 = Array.from({length: 10}, (_, i) => i + 1);
console.log(`   1-10: ${numbers1to100.join(", ")}... (100 total)`);

// 2. Even numbers 1-50 (showing first 10)
const evenNumbers = Array.from({length: 25}, (_, i) => (i + 1) * 2);
console.log(`   Even 1-50: ${evenNumbers.slice(0, 10).join(", ")}...`);

// 3. FizzBuzz (first 20)
console.log(`   FizzBuzz (1-20):`);
for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(`     ${i}: ${output || i}`);
}

// 4. Triangle of stars
console.log(`   Star Triangle:`);
for (let i = 1; i <= 5; i++) {
    console.log(`     ${"*".repeat(i)}`);
}