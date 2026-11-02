const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

const passedStudents = scores.filter(score => score >= 50);

const formattedScores = scores.map((score, index) => {
    return `Student ${index + 1}: ${score}`;
});

console.log("Student Scores:");
console.log(formattedScores.join("\n"));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedStudents.length);