// Prompt for user to enter their mark
var mark = prompt("Enter your mark (0 - 100):");

// Convert input (string) to an integer using parseInt
mark = parseInt(mark);

// Declare a variable to hold the grade
var grade;

// Check for invalid or non-numeric input
if (isNaN(mark) || mark < 0 || mark > 100) {
    grade = "Invalid mark entered";
} else {
    // Determine the grade based on the mark using if/else
    if (mark >= 70 && mark <= 100) {
        grade = "A";
    } else if (mark >= 61 && mark <= 69) {
        grade = "B";
    } else if (mark >= 50 && mark <= 60) {
        grade = "C";
    } else if (mark >= 41 && mark <= 49) {
        grade = "D";
    } else if (mark >= 0 && mark <= 40) {
        grade = "F";
    }
}

// Display the grade using an alert
alert("Your grade is: " + grade);

// Write the grade to the document
document.write("<h1>Your grade is: " + grade + "</h1>");