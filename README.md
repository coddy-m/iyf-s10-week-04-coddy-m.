# Week 4: JavaScript Fundamentals

## Author
- **Name:** Michelle Wanja
- **GitHub:** [@coddy-m](https://github.com/coddy-m)
- **Date:** March 2026

## Project Description
Master the core concepts of JavaScript: variables, data types, functions, control flow, arrays, and objects. Built an interactive calculator and student grade tracker to apply these fundamentals.

## Technologies Used
- HTML5
- CSS3 (minimal, for structure)
- Vanilla JavaScript (ES6+)
- Browser Console for testing

## Features

### 🧮 Interactive Calculator
- Basic operations: `+`, `-`, `*`, `/`
- Advanced: `%` (modulus), `**` (exponentiation)
- Error handling for division by zero
- Support for multiple operator formats (`×`, `÷`, `^`)

### 📚 Student Grade Tracker
- Add/remove students with multiple subject grades
- Calculate individual and class averages
- Letter grade conversion (A-F)
- Identify struggling students (<70 avg)
- Generate formatted report cards
- Bonus: Update grades dynamically

### 🎯 Daily Challenges Completed
1. ✅ **FizzBuzz** (1-100 with conditional output)
2. ✅ **String Reversal** (4 different approaches)
3. ✅ **Find Largest Number** (loop & reduce methods)
4. ✅ **Remove Duplicates** (Set, filter, reduce, manual)
5. ✅ **Palindrome Checker** (case/space insensitive)

## How to Run
### Check if Node.js is installed
- node --version
- npm --version
- If not installed, download from: https://nodejs.org
- Or use a version manager:
- Windows: choco install nodejs-lts

 
## Lessons Learned 

- Variable Scope: let for reassignment, const for constants
- Type Coercion: Prefer === strict equality to avoid bugs
- Functions: Arrow functions for concise syntax, default parameters for flexibility
- Array Methods: map, filter, reduce enable functional programming patterns
- Objects: Dot vs bracket notation, nested property access, iteration with Object.entries()

## Challenges faced
- challenge 1: calculating averages required handling empty grade objects and avoiding division by zero.
- Solution: Added null checks and used Object.values() to extract grades safely:
- Problem: Handling mixed case, spaces, and punctuation in palindrome checking.
- Solution: Created a cleanString() helper that normalizes input: