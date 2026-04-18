/**
 * Day 1: FizzBuzz
 * Print 1-100: "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both
 */

function fizzBuzz(max = 100) {
    for (let i = 1; i <= max; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

// Run
console.log("🎯 Day 1: FizzBuzz (1-100)\n");
fizzBuzz();

// Export for testing
if (typeof module !== 'undefined') module.exports = fizzBuzz;