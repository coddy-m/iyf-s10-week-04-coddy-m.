/**
 * Student Grade Tracker Management System
 */

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        // grades: { math: 85, english: 90, ... }
        if (this.getStudent(name)) {
            console.warn(`⚠️ Student "${name}" already exists. Updating...`);
            this.students = this.students.filter(s => s.name !== name);
        }
        this.students.push({ name, grades });
        console.log(`✅ Added: ${name}`);
    },
    
    getStudent(name) {
        return this.students.find(s => s.name.toLowerCase() === name.toLowerCase()) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const scores = Object.values(student.grades);
        if (scores.length === 0) return null;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    },
    
    getSubjectAverage(subject) {
        const scores = this.students
            .map(s => s.grades[subject])
            .filter(score => score !== undefined);
        if (scores.length === 0) return null;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    },
    
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => {
            const topAvg = this.getStudentAverage(top.name);
            const currAvg = this.getStudentAverage(student.name);
            return (currAvg || 0) > (topAvg || 0) ? student : top;
        });
    },
    
    getStrugglingStudents() {
        return this.students.filter(s => {
            const avg = this.getStudentAverage(s.name);
            return avg !== null && avg < 70;
        });
    },
    
    getLetterGrade(score) {
        if (score === null || score === undefined) return "N/A";
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "❌ Student not found";
        
        const avg = this.getStudentAverage(name);
        let report = `📊 REPORT CARD: ${student.name}\n`;
        report += `${'═'.repeat(40)}\n`;
        
        for (const [subject, score] of Object.entries(student.grades)) {
            const letter = this.getLetterGrade(score);
            report += `${subject.padEnd(15)} ${score.toString().padStart(3)}  (${letter})\n`;
        }
        
        report += `${'─'.repeat(40)}\n`;
        report += `Overall Average: ${avg?.toFixed(2) || 'N/A'}  (${this.getLetterGrade(avg)})\n`;
        report += `${'═'.repeat(40)}`;
        return report;
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gradeTracker;
}

// Demo data if running in Node
if (typeof window === 'undefined' && require.main === module) {
    console.log("📊 Grade Tracker Demo\n");
    
    gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
    gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
    gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });
    
    console.log(`\nAlice's Average: ${gradeTracker.getStudentAverage("Alice").toFixed(2)}`);
    console.log(`Math Class Average: ${gradeTracker.getSubjectAverage("math").toFixed(2)}`);
    console.log(`Top Student: ${gradeTracker.getTopStudent()?.name}`);
    console.log(`Struggling: [${gradeTracker.getStrugglingStudents().map(s=>s.name).join(', ')}]`);
    console.log(`\n${gradeTracker.generateReportCard("Alice")}`);
}