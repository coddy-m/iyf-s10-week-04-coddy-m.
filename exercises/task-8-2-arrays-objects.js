// TASK 8.2: Objects 🟡
// Run: node exercises/task-8-2-objects.js

console.log("📋 Task 8.2: Objects\n");

const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    hobbies: ["reading", "coding", "hiking"],
    address: { city: "Seattle", country: "USA" }
};

// EXERCISE 1: Accessing & modifying
console.log(`👤 Full Name: ${person.firstName} ${person.lastName}`);
person.age = 29;
person.email = "alice@example.com";
delete person.hobbies;
console.log(`📧 Email added: ${person.email}`);
console.log(`🎂 Updated age: ${person.age}`);

// EXERCISE 2: Object Methods
const calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply: (a, b) => a * b
};
console.log(`🧮 calc.add(10, 5) = ${calculator.add(10, 5)}`);

// EXERCISE 3: Object Iteration
const scores = { math: 95, english: 88, science: 92, history: 78 };
console.log("\n📊 Subject Scores:");
for (const [subject, score] of Object.entries(scores)) {
    console.log(`  ${subject}: ${score}`);
}

console.log("\n✅ Task 8.2 Complete!");