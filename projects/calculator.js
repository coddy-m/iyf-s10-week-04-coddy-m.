/**
 * Interactive Calculator - Console Version
 * Supports: +, -, *, /, %, **
 */

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "❌ Error: Cannot divide by zero"; 
    return a / b; 
}
function modulus(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    const operations = {
        '+': add, '-': subtract, '*': multiply,
        '/': divide, '%': modulus, '**': power
    };
    
    if (!operations[operator]) return "❌ Error: Invalid operator";
    return operations[operator](num1, num2);
}

// Export for browser use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate, add, subtract, multiply, divide, modulus, power };
}

// Console demo
if (typeof window === 'undefined') {
    console.log("🧮 Calculator Ready");
    console.log(`  10 + 5 = ${calculate(10, '+', 5)}`);
    console.log(`  10 - 5 = ${calculate(10, '-', 5)}`);
    console.log(`  10 * 5 = ${calculate(10, '*', 5)}`);
    console.log(`  10 / 5 = ${calculate(10, '/', 5)}`);
    console.log(`  10 % 3 = ${calculate(10, '%', 3)}`);
    console.log(`  2 ** 8 = ${calculate(2, '**', 8)}`);
    console.log(`  10 / 0 = ${calculate(10, '/', 0)}\n`);
}