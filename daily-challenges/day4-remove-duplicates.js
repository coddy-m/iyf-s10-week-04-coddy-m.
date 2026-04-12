// Day 4: Remove Duplicates 🟡
// Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
// Try with Set, try with filter

console.log("\n=== 🗑️ Day 4: Remove Duplicates ===\n");

// Approach 1: Set (simplest & most efficient)
function removeDuplicates1(arr) {
    return [...new Set(arr)];
}

// Approach 2: filter + indexOf
function removeDuplicates2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Approach 3: reduce + includes
function removeDuplicates3(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}

// Approach 4: Manual loop with object lookup
function removeDuplicates4(arr) {
    const seen = {};
    const result = [];
    
    for (const item of arr) {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item);
        }
    }
    return result;
}

// Test cases
const testCases = [
    [1, 2, 2, 3, 4, 4, 5],
    ["a", "b", "a", "c", "b"],
    [1, 1, 1, 1],
    [],
    [5, 3, 8, 3, 9, 5, 1]
];

console.log("🧪 Test Results:");
testCases.forEach((arr, i) => {
    const r1 = removeDuplicates1(arr);
    const r2 = removeDuplicates2(arr);
    const r3 = removeDuplicates3(arr);
    const r4 = removeDuplicates4(arr);
    
    console.log(`\nTest ${i + 1}: [${arr.join(", ")}]`);
    console.log(`   Set: [${r1.join(", ")}]`);
    console.log(`   filter+indexOf: [${r2.join(", ")}]`);
    console.log(`   reduce+includes: [${r3.join(", ")}]`);
    console.log(`   Manual loop: [${r4.join(", ")}]`);
});

// ✅ Recommendation: Use Set for best performance & readability
console.log(`\n💡 Best Practice: Use [...new Set(arr)] for most cases!`);