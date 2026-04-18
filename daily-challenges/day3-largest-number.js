/**
 * Day 3: Find Largest Number in Array
 * Without Math.max(), then with reduce()
 */

// Approach 1: Traditional loop
function findLargest(arr) {
    if (!arr || arr.length === 0) return undefined;
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}

// Approach 2: reduce()
const findLargestReduce = arr => 
    arr?.length ? arr.reduce((max, num) => num > max ? num : max) : undefined;

// Test
console.log("🎯 Day 3: Find Largest Number\n");
const testArr = [3, 7, 2, 9, 1, 5, 8];
console.log(`  Array: [${testArr}]`);
console.log(`  Loop method: ${findLargest(testArr)}`);
console.log(`  Reduce method: ${findLargestReduce(testArr)}`);
console.log(`  Edge case (empty): ${findLargest([])}`);

// Export
if (typeof module !== 'undefined') {
    module.exports = { findLargest, findLargestReduce };
}