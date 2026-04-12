// ============================================
// MINI-PROJECT: Interactive Calculator 🔴
// ============================================

console.log("\n=== 🧮 Calculator Project ===");

// Basic operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot modulo by zero";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// Main calculate function
function calculate(num1, operator, num2) {
    // Convert string inputs to numbers if needed
    const a = Number(num1);
    const b = Number(num2);
    
    // Validate numbers
    if (isNaN(a) || isNaN(b)) {
        return "Error: Invalid numbers";
    }
    
    // Execute operation
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
        case "x":
        case "×":
            return multiply(a, b);
        case "/":
        case "÷":
            return divide(a, b);
        case "%":
            return modulus(a, b);
        case "**":
        case "^":
            return power(a, b);
        default:
            return `Error: Invalid operator "${operator}". Use +, -, *, /, %, or **`;
    }
}

// Test the calculator
console.log("\n🧪 Calculator Tests:");
const tests = [
    [10, "+", 5],
    [10, "-", 5],
    [10, "*", 5],
    [10, "/", 5],
    [10, "/", 0],
    [17, "%", 5],
    [2, "**", 8],
    ["invalid", "+", 5],
    [10, "&", 5]
];

tests.forEach(([a, op, b]) => {
    const result = calculate(a, op, b);
    console.log(`   ${a} ${op} ${b} = ${result}`);
});

// ✅ Interactive Console Calculator (Bonus)
function runInteractiveCalculator() {
    console.log("\n🎮 Interactive Calculator Started!");
    console.log("   Type 'quit' to exit");
    console.log("   Format: number operator number (e.g., 10 + 5)");
    console.log("   Operators: +, -, *, /, %, **\n");
    
    // Note: This works in Node.js or browser console
    // For browser, you'd need prompt() which is blocking
    if (typeof window !== "undefined" && typeof window.prompt === "function") {
        let input;
        while ((input = prompt("Enter calculation (or 'quit'):"))?.toLowerCase() !== "quit") {
            if (!input) continue;
            
            const parts = input.trim().split(/\s+/);
            if (parts.length !== 3) {
                alert("Invalid format. Use: number operator number");
                continue;
            }
            
            const [num1, operator, num2] = parts;
            const result = calculate(num1, operator, num2);
            alert(`${input} = ${result}`);
        }
        console.log("   Calculator exited.");
    }
}

// Uncomment to run interactive mode in browser:
// runInteractiveCalculator();

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculate, add, subtract, multiply, divide };
}