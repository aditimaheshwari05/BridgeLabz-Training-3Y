let marks = [88, 92, 76, 85, 90];

let totalMarks = 0;
let hasFailed = false;

for (let mark of marks) {
    totalMarks += mark;

    if (mark < 35) {
        hasFailed = true;
    }
}

let average = totalMarks / marks.length;
let percentage = (totalMarks / 500) * 100;

let result;

if (hasFailed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);