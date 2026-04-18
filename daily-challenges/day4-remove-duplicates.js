/**
 * Day 4: Remove Duplicates from Array
 * Using Set and filter approaches
 */

// Approach 1: Set (most efficient)
const removeDuplicatesSet = arr => [...new Set(arr)];

// Approach 2: filter + indexOf
const removeDuplicatesFilter = arr => 
    arr.filter((item, index) => arr.indexOf(item) === index);

// Approach 3: reduce
const removeDuplicatesReduce = arr => 
    arr.reduce((unique, item) => 
        unique.includes(item) ? unique : [...unique, item], []);

// Test
console.log("🎯 Day 4: Remove Duplicates\n");
const testArr = [1, 2, 2, 3, 4, 4, 5, 3, 1];
console.log(`  Original: [${testArr}]`);
console.log(`  Set method: [${removeDuplicatesSet(testArr)}]`);
console.log(`  Filter method: [${removeDuplicatesFilter(testArr)}]`);
console.log(`  Reduce method: [${removeDuplicatesReduce(testArr)}]`);

// Export
if (typeof module !== 'undefined') {
    module.exports = { removeDuplicatesSet, removeDuplicatesFilter, removeDuplicatesReduce };
}