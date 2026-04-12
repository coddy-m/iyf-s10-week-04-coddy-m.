// Day 1: FizzBuzz 🟢
// Print 1-100, but:
// - Multiples of 3 → "Fizz"
// - Multiples of 5 → "Buzz"  
// - Multiples of both → "FizzBuzz"

console.log("\n=== 🎯 Day 1: FizzBuzz ===\n");

function fizzBuzz(max = 100) {
    for (let i = 1; i <= max; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        console.log(output || i);
    }
}

// Run it
fizzBuzz();

// ✅ Alternative: Return array instead of logging
function fizzBuzzArray(max = 100) {
    const result = [];
    
    for (let i = 1; i <= max; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    
    return result;
}

// Test alternative
console.log("\n📦 First 20 as array:");
console.log(fizzBuzzArray(20));