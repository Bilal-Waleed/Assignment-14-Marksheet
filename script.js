var studentName = prompt("Enter your name:");
var fatherName = prompt("Enter your father's name:"); 
var rollNumber = prompt("Enter your roll number:");
var studentClass = prompt("Enter your class:");
var institute = prompt("Enter your institute name:");

var subjects = [];
for (var i = 1; i <= 5; i++) {
    subjects.push(prompt("Enter the name of subject " + i + ":"));
}

var obtainedMarks = [];
for (var i = 0; i < 5; i++) {
    var marks = parseInt(prompt("Enter obtained marks for " + subjects[i] + ":"));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100.");
        i--; 
    } else {
        obtainedMarks.push(marks);
    }
}

var totalMarksEach = 100;
var totalMarks = totalMarksEach * subjects.length;
var totalObtainedMarks = 0;
for (var i = 0; i < obtainedMarks.length; i++) {
    totalObtainedMarks += obtainedMarks[i];
}
var percentages = [];
for (var i = 0; i < obtainedMarks.length; i++) {
    percentages.push((obtainedMarks[i] / totalMarksEach) * 100);
}
var overallPercentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
if (overallPercentage >= 90) {
    grade = "A+";
} else if (overallPercentage >= 80) {
    grade = "A+";
} else if (overallPercentage >= 70) {
    grade = "A";
} else if (overallPercentage >= 60) {
    grade = "B";
} else if (overallPercentage >= 50) {
    grade = "C";
} else {
    grade = "F";
}

var scholarshipDiscount;
if (overallPercentage >= 90) {
    scholarshipDiscount = "50% discount";
} else if (overallPercentage >= 80) {
    scholarshipDiscount = "30% discount";
} else if (overallPercentage >= 70) {
    scholarshipDiscount = "15% discount";
} else {
    scholarshipDiscount = "No discount";
}

var remarks;
if (grade === "A+" || grade === "A") {
    remarks = "Excellent performance!";
} else if (grade === "B") {
    remarks = "Good job!";
} else if (grade === "C") {
    remarks = "Fair, needs improvement.";
} else {
    remarks = "Work harder next time.";
}

document.getElementById("studentName").textContent = studentName;
document.getElementById("fatherName").textContent = fatherName; 
document.getElementById("rollNumber").textContent = rollNumber;
document.getElementById("class").textContent = studentClass;
document.getElementById("institute").textContent = institute;

var marksTable = document.getElementById("marksTable");

for (var i = 0; i < subjects.length; i++) {
    var row = document.createElement("tr");

    var subjectCell = document.createElement("td");
    subjectCell.textContent = subjects[i];
    row.appendChild(subjectCell);

    var totalMarksCell = document.createElement("td");
    totalMarksCell.textContent = totalMarksEach;
    row.appendChild(totalMarksCell);

    var obtainedMarksCell = document.createElement("td");
    obtainedMarksCell.textContent = obtainedMarks[i]; 
    row.appendChild(obtainedMarksCell);

    var percentageCell = document.createElement("td");
    percentageCell.textContent = percentages[i].toFixed(2) + "%";
    row.appendChild(percentageCell);

    marksTable.appendChild(row);
}


var totalRow = document.createElement("tr");

var totalLabelCell = document.createElement("td");
totalLabelCell.textContent = "Total";
totalRow.appendChild(totalLabelCell);

var totalMarksCell = document.createElement("td");
totalMarksCell.textContent = totalMarks;
totalRow.appendChild(totalMarksCell);

var totalObtainedCell = document.createElement("td");
totalObtainedCell.textContent = totalObtainedMarks;
totalRow.appendChild(totalObtainedCell);

var overallPercentageCell = document.createElement("td");
overallPercentageCell.textContent = overallPercentage.toFixed(2) + "%";
totalRow.appendChild(overallPercentageCell);

marksTable.appendChild(totalRow);

document.getElementById("grade").textContent = "Grade: " + grade;
document.getElementById("scholarship").textContent = "Scholarship: " + scholarshipDiscount;
document.getElementById("remarks").textContent = "Remarks: " + remarks;
