/**
 * Day 2: Reverse a String
 * Multiple approaches demonstrated
 */

// Approach 1: Built-in methods (cleanest)
const reverse1 = str => str.split('').reverse().join('');

// Approach 2: For loop
function reverse2(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// Approach 3: Reduce
const reverse3 = str => [...str].reduce((rev, char) => char + rev, '');

// Test
console.log("🎯 Day 2: Reverse String\n");
const test = "hello";
console.log(`  Input: "${test}"`);
console.log(`  Method 1 (split/reverse/join): "${reverse1(test)}"`);
console.log(`  Method 2 (for loop): "${reverse2(test)}"`);
console.log(`  Method 3 (reduce): "${reverse3(test)}"`);

// Export
if (typeof module !== 'undefined') {
    module.exports = { reverse1, reverse2, reverse3 };
}