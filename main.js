// variables
let myName = "Michelle";
let myAge = 18;
const isStudent = true;
const favoriteColors = ["black", "red", "blue"];
const today = new Date()
console.log("Name", myName);
console.log("Age:", myAge);
console.log("Student?", isStudent);
console.log("Favorite colors:", favoriteColors)
console.log("Today's date:", today. toDateString());
console.log(typeof myName);    //string
console.log(typeof myAge);     //number
console.log(typeof isStudent)  //boolean

//Data types & operators
  //number operators
let a = 10, b= 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
 // string operations
let firstName = "Michelle";
let lastName = "Njoroge";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your Name has ${firstName.length} characters.`;
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Michelle"));
 //comparison & logic operators
console.log(5 > 3);
console.log(5 === 5);
console.log(5== "5");  // true (loose - void)
console.log(5 !== 3);
console.log(true && true);
console.log(true || true);
console.log( !true);
const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurn100 = new Date().getFullYear() -myAge + 100;
console.log(`Age in days: ~${ageInDays}`);
console.log(`age in hours: ~${ ageInHours}`);
console.log(`Year I turn 100: ${yearTurn100}`);
 // Functions
function greet(name) {
  return `Hello, ${name}!`;
}
const add = function(a, b) { return a + b; };
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b ===0) return "cannot divide by zero";
  return a / b;
};

function calculateArea(width, height) {
  return width * height;
}
function celsiusToFahrenheit(celsius) {
 return (celsius * 9) /5 + 32;
}
function isEven(number) {
  return number % 2 === 0;
}
function getInitials(fullName) {
  return fullName
  .split(" ")
  .map(word => word[0]. toUpperCase())
  .join("")
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(calculateArea(5, 10));
console.log(celsiusToFahrenheit(100));
console.log(isEven(4)),
console.log(getInitials("Michelle Njoroge"));
console.log(reverseString("hello"));
 // default parameters
function greetUser(name = "Guest", greeting = "Hello") {
  return `{greeting}, ${name}!`;
} 
console.log(greetUser());
console.log(greetUser("Jason"));
console.log(greetUser("Amie", "Hi"));
  //Build
function calculateTip(bill, tipPercent = 15) {
  return (bill * tipPercent) / 100
} 
console.log(calculateTip(100));
console.log(calculateTip(80, 20));

 // control flow
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >=70) return "C";
  else if (score >=60) return "D";
  else return "F"
}
console.log(getGrade(95));
console.log(getGrade(73));
console.log(getGrade(45));

function getDayName(dayNumber) {
  switch (dayNumber){
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(9));

//print 1-100
for (let i= 1; i <= 100; i++) {
  console.log(i);
}

// even numbers 1-50
for (let i= 2; i <= 50; i+=2) {
  console.log(i);
}

//fizzbuzz
for (let i= 1; i<= 5; i++) {
  if (i % 15==0) console.log("fizzbuzz");
  else if (i% 3===0) console.log("fizz");
  else if (i % 5===0) console.log("buzz");
  else console.log(i);
}
 //triangle of stars
for (let i=1; i<=5; i++) {
  console.log("*".repeat(i));
} 

 // calculator
function subtract(a, b) { return a-b;}
function addnums(a, b) {return a+b;}
function multiplynums(a, b) {return a*b;}
function dividenums(a,b) {
  if ( b===0) return "error: division by zero";
  return a/b
}
function modulus(a,b) { return a % b;}
function power(a,  b) {return a ** b;}
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+": return addnums(num1, num2);
    case "-": return subtract(num1, num2);
    case "*": return multiplynums(num1, num2);
    case "/": return dividenums(num1, num2);
    case "%": return modulus(num1, num2);
    case "**": return power(num1,num2);
    default: return "invalid operator";
    }
}
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 8));

// arrays
const numbers = [1, 2, 3, 4, 5];
// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));
// map - transform each element
const doubled = numbers.map(num => num * 2);
// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
// includes - check if element exists
console.log(numbers.includes(3)); 
console.log(doubled);
console.log(evenNumbers);
console.log(firstEven);
console.log(sum);

const mixedNums = [-3, -1, 0, 4, 7, 12,15];
const doubledAll =mixedNums.map(n => n* 2);
const positives =mixedNums.filter(n => n>=0);
const firstOver10 =mixedNums.find(n => n>10);
const product =mixedNums.reduce((acc, n) => acc * n, 1);
console.log(doubledAll);
console.log(positives);
console.log(firstOver10);
console.log(product);

// objects
const person = {
  firstName: "Michelle",
  lastName: "Njoroge",
  age: 18
  [isStudent] = false,
  hobbies: ["reading", "coding","crocheting"],
  address: { city: "Nairobi", country: "Kenya"}
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
person.age = 19;
person.email = "michelle@gmail.com";
delete person.isStudent;
const scores = {maths:95, english:90, biology:92};
console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const charlie = students.find(s => s.name === "Charlie");
const avgGrade = students.reduce((total, s) => total + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(s => s.grade > 90);
const allPassing = students.every(s => s.grade >= 60);

console.log(names);
console.log(highAchievers.map(s => s.name));
console.log(charlie);
console.log(`Class average: ${avgGrade.toFixed(2)}`);
console.log(csMajors.map(s => s.name));
console.log(sortedByGrade.map(s => `${s.name}: ${s.grade}`));
console.log("Any student above 90?", hasTopStudent);
console.log("All passing?", allPassing);


// ============================================================
// MINI-PROJECT: Student Grade Tracker
// ============================================================

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        const avg = values.reduce((sum, g) => sum + g, 0) / values.length;
        return parseFloat(avg.toFixed(2));
    },

    getSubjectAverage(subject) {
        const studentsWithSubject = this.students.filter(
            s => s.grades[subject] !== undefined
        );
        if (studentsWithSubject.length === 0) return null;
        const total = studentsWithSubject.reduce(
            (sum, s) => sum + s.grades[subject], 0
        );
        return parseFloat((total / studentsWithSubject.length).toFixed(2));
    },

    getTopStudent() {
        return this.students.reduce((top, student) => {
            const avg = this.getStudentAverage(student.name);
            const topAvg = this.getStudentAverage(top.name);
            return avg > topAvg ? student : top;
        }).name;
    },

    getStrugglingStudents() {
        return this.students
            .filter(s => this.getStudentAverage(s.name) < 70)
            .map(s => s.name);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student "${name}" not found.`;

        const lines = [`Report Card — ${student.name}`, "─".repeat(30)];

        for (const [subject, score] of Object.entries(student.grades)) {
            lines.push(` ${subject}: ${score} (${this.getLetterGrade(score)})`);
        }

        const avg = this.getStudentAverage(name);
        lines.push("─".repeat(30));
        lines.push(` Average: ${avg} (${this.getLetterGrade(avg)})`);

        return lines.join("\n");
    }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math")); 
console.log(gradeTracker.getTopStudent()); 
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));


// ============================================================
// DAILY CHALLENGES
// ============================================================

// Day 1: FizzBuzz 


function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// Built-in approach
const reverseBuiltin = str => str.split("").reverse().join("");

console.log(reverseStr("hello")); 
console.log(reverseBuiltin("hello")); 

// Day 3: Largest number (no Math.max)
function findLargest(arr) {
    let largest = arr[0];
    for (const num of arr) {
        if (num > largest) largest = num;
    }
    return largest;
}
// With reduce
const findLargestReduce = arr =>
    arr.reduce((max, num) => (num > max ? num : max), arr[0]);

console.log(findLargest([3, 1, 9, 2, 7])); 
console.log(findLargestReduce([3, 1, 9, 2, 7])); 

// Day 4: Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// With filter
const removeDupsFilter = arr =>
    arr.filter((item, index) => arr.indexOf(item) === index);

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDupsFilter([1, 2, 2, 3, 4, 4, 5])); 

// Day 5: Palindrome checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man a plan a canal Panama")); 