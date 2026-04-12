// Day 2: Reverse a String 🟢
// Input: "hello" → Output: "olleh"

console.log("\n=== 🔄 Day 2: Reverse String ===\n");

// Approach 1: Built-in methods (cleanest)
function reverseString1(str) {
    return str.split("").reverse().join("");
}

// Approach 2: For loop (manual)
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Approach 3: For...of loop
function reverseString3(str) {
    let reversed = "";
    for (const char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Approach 4: reduce (functional)
function reverseString4(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "");
}

// Test all approaches
const testStr = "hello";
console.log(`Original: "${testStr}"`);
console.log(`Approach 1 (split/reverse/join): "${reverseString1(testStr)}"`);
console.log(`Approach 2 (for loop): "${reverseString2(testStr)}"`);
console.log(`Approach 3 (for...of): "${reverseString3(testStr)}"`);
console.log(`Approach 4 (reduce): "${reverseString4(testStr)}"`);

// Edge cases
console.log(`\n🧪 Edge Cases:`);
console.log(`Empty string: "${reverseString1("")}"`);
console.log(`Single char: "${reverseString1("a")}"`);
console.log(`Palindrome: "${reverseString1("racecar")}"`);
console.log(`With spaces: "${reverseString1("hello world")}"`);