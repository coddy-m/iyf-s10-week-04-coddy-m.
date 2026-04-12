// Day 3: Find Largest Number 🟢
// Don't use Math.max() - use a loop!
// Then try with reduce()

console.log("\n=== 📈 Day 3: Find Largest Number ===\n");

// Approach 1: For loop
function findLargest1(arr) {
    if (arr.length === 0) return undefined;
    
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Approach 2: For...of loop
function findLargest2(arr) {
    if (arr.length === 0) return undefined;
    
    let largest = arr[0];
    for (const num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

// Approach 3: reduce (functional)
function findLargest3(arr) {
    if (arr.length === 0) return undefined;
    
    return arr.reduce((max, num) => num > max ? num : max);
}

// Test cases
const testArrays = [
    [3, 7, 2, 9, 1],
    [-5, -2, -10, -1],
    [42],
    [5, 5, 5, 5],
    []
];

console.log("🧪 Test Results:");
testArrays.forEach((arr, i) => {
    const result1 = findLargest1(arr);
    const result2 = findLargest2(arr);
    const result3 = findLargest3(arr);
    
    console.log(`\nTest ${i + 1}: [${arr.join(", ")}]`);
    console.log(`   Loop: ${result1}`);
    console.log(`   For...of: ${result2}`);
    console.log(`   Reduce: ${result3}`);
    console.log(`   ✅ Match: ${result1 === result2 && result2 === result3}`);
});

// ⚠️ Note: Math.max(...arr) would be simplest but we're practicing loops!