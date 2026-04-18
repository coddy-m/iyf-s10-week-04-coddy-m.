/**
 * Day 5: Palindrome Checker
 * Ignores case, spaces, and special characters
 */

function isPalindrome(str) {
    // Remove non-alphanumeric chars and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare with reversed version
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Alternative: Two-pointer approach (more memory efficient)
function isPalindromeOptimized(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log("🎯 Day 5: Palindrome Checker\n");
const tests = [
    "racecar",
    "hello",
    "A man a plan a canal Panama",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "12321",
    "12345"
];

tests.forEach(test => {
    const result = isPalindrome(test);
    console.log(`  "${test}" → ${result ? '✅ Palindrome' : '❌ Not palindrome'}`);
});

// Export
if (typeof module !== 'undefined') {
    module.exports = { isPalindrome, isPalindromeOptimized };
}