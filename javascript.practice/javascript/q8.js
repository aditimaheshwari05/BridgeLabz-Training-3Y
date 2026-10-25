let currentSalary = 50000;
let annualIncrementRate = 10;

let projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (annualIncrementRate / 100);
    currentSalary = Math.round(currentSalary);

    projection.push({
        Year: year,
        Salary: `₹${currentSalary}`
    });
}

console.table(projection);