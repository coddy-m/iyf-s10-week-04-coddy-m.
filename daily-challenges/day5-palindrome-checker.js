// Day 5: Palindrome Checker 🟡
// "racecar" → true
// "hello" → false
// Ignore case and spaces: "A man a plan a canal Panama" → true

console.log("\n=== 🔁 Day 5: Palindrome Checker ===\n");

// Helper: Clean string (lowercase, remove non-alphanumeric)
function cleanString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Approach 1: Reverse & compare
function isPalindrome1(str) {
    const cleaned = cleanString(str);
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// Approach 2: Two pointers (more efficient)
function isPalindrome2(str) {
    const cleaned = cleanString(str);
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Approach 3: Every + charAt
function isPalindrome3(str) {
    const cleaned = cleanString(str);
    const len = cleaned.length;
    
    return [...cleaned].every((char, i) => 
        char === cleaned[len - 1 - i]
    );
}

// Test cases
const testCases = [
    { input: "racecar", expected: true },
    { input: "hello", expected: false },
    { input: "A man a plan a canal Panama", expected: true },
    { input: "Was it a car or a cat I saw", expected: true },
    { input: "12321", expected: true },
    { input: "12345", expected: false },
    { input: "", expected: true },
    { input: "a", expected: true },
    { input: "No 'x' in Nixon", expected: true }
];

console.log("🧪 Test Results:\n");
console.log(`Input`.padEnd(30) + `Result`.padEnd(10) + `Expected`);
console.log(`─`.repeat(50));

let allPassed = true;

testCases.forEach(({ input, expected }) => {
    const result1 = isPalindrome1(input);
    const result2 = isPalindrome2(input);
    const result3 = isPalindrome3(input);
    const passed = result1 === expected && result2 === expected && result3 === expected;
    
    if (!passed) allPassed = false;
    
    console.log(
        `"${input}"`.padEnd(30) + 
        `${result1}`.padEnd(10) + 
        `${expected} ${passed ? "✅" : "❌"}`
    );
});

console.log(`\n${"=".repeat(50)}`);
console.log(`Overall: ${allPassed ? "✅ All tests passed!" : "❌ Some tests failed"}`);

// ✅ Recommendation: Two-pointer approach for best performance on long strings
console.log(`\n💡 Tip: Two-pointer method is O(n/2) time, O(1) space!`);