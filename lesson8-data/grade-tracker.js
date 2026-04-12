// ============================================
// MINI-PROJECT: Student Grade Tracker 🔴
// ============================================

console.log("\n=== 📚 Grade Tracker Project ===");

const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        // grades is an object: { math: 85, english: 90, ... }
        const student = {
            name: name,
            grades: grades,
            id: Date.now() // Simple unique ID
        };
        this.students.push(student);
        console.log(`   ✅ Added student: ${name}`);
        return student;
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(s => s.name.toLowerCase() === name.toLowerCase()) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        
        const grades = Object.values(student.grades);
        if (grades.length === 0) return null;
        
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return sum / grades.length;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .filter(s => s.grades[subject] !== undefined)
            .map(s => s.grades[subject]);
        
        if (subjectGrades.length === 0) return null;
        
        const sum = subjectGrades.reduce((total, grade) => total + grade, 0);
        return sum / subjectGrades.length;
    },
    
    // Get top performer (highest overall average)
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        return this.students.reduce((top, student) => {
            const topAvg = this.getStudentAverage(top.name);
            const studentAvg = this.getStudentAverage(student.name);
            return studentAvg > topAvg ? student : top;
        });
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(s => {
            const avg = this.getStudentAverage(s.name);
            return avg !== null && avg < 70;
        });
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `❌ Student "${name}" not found`;
        
        const avg = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(avg);
        
        let report = `📋 Report Card: ${student.name}\n`;
        report += `   ${"=".repeat(30)}\n`;
        
        Object.entries(student.grades).forEach(([subject, grade]) => {
            const subjLetter = this.getLetterGrade(grade);
            report += `   ${subject.padEnd(12)}: ${grade.toString().padStart(3)}% (${subjLetter})\n`;
        });
        
        report += `   ${"-".repeat(30)}\n`;
        report += `   Overall Average: ${avg.toFixed(2)}% (${letterGrade})\n`;
        
        return report;
    },
    
    // Bonus: Remove a student
    removeStudent(name) {
        const index = this.students.findIndex(s => 
            s.name.toLowerCase() === name.toLowerCase()
        );
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            console.log(`   🗑️ Removed: ${removed.name}`);
            return true;
        }
        return false;
    },
    
    // Bonus: Update a student's grade
    updateGrade(name, subject, newGrade) {
        const student = this.getStudent(name);
        if (!student) return false;
        
        student.grades[subject] = newGrade;
        console.log(`   ✏️ Updated ${name}'s ${subject} grade to ${newGrade}`);
        return true;
    }
};

// ============================================
// TEST THE GRADE TRACKER
// ============================================

console.log("\n🧪 Grade Tracker Tests:\n");

// Add students
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });
gradeTracker.addStudent("Diana", { math: 88, english: 92, science: 85 });

// Test getStudent
console.log(`\n🔍 getStudent("Alice"):`);
console.log(gradeTracker.getStudent("Alice"));

// Test getStudentAverage
console.log(`\n📊 Averages:`);
["Alice", "Bob", "Charlie"].forEach(name => {
    const avg = gradeTracker.getStudentAverage(name);
    console.log(`   ${name}: ${avg?.toFixed(2)}%`);
});

// Test getSubjectAverage
console.log(`\n📐 Subject Averages:`);
["math", "english", "science"].forEach(subject => {
    const avg = gradeTracker.getSubjectAverage(subject);
    console.log(`   ${subject}: ${avg?.toFixed(2)}%`);
});

// Test getTopStudent
console.log(`\n🏆 Top Student:`);
const top = gradeTracker.getTopStudent();
console.log(`   ${top?.name} with average: ${gradeTracker.getStudentAverage(top?.name).toFixed(2)}%`);

// Test getStrugglingStudents
console.log(`\n⚠️ Struggling Students (<70 avg):`);
const struggling = gradeTracker.getStrugglingStudents();
if (struggling.length > 0) {
    struggling.forEach(s => {
        console.log(`   ${s.name}: ${gradeTracker.getStudentAverage(s.name).toFixed(2)}%`);
    });
} else {
    console.log(`   None! 🎉`);
}

// Test getLetterGrade
console.log(`\n🔤 Letter Grades:`);
[95, 85, 75, 65, 55].forEach(score => {
    console.log(`   ${score}% → ${gradeTracker.getLetterGrade(score)}`);
});

// Test generateReportCard
console.log(`\n${"=".repeat(40)}`);
console.log(gradeTracker.generateReportCard("Alice"));
console.log("=".repeat(40));

// Bonus: Update and remove
console.log(`\n✏️ Bonus Features:`);
gradeTracker.updateGrade("Charlie", "science", 72);
console.log(`   Updated Charlie's science grade`);
console.log(`   Charlie's new average: ${gradeTracker.getStudentAverage("Charlie").toFixed(2)}%`);

console.log(`\n🗑️ Removing Bob...`);
gradeTracker.removeStudent("Bob");
console.log(`   Students remaining: ${gradeTracker.students.map(s => s.name).join(", ")}`);

// Export for use elsewhere
if (typeof module !== "undefined" && module.exports) {
    module.exports = { gradeTracker };
}