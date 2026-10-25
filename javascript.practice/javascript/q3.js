let expenses = [5000, 2000, 10000, 3000, 1500];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;

let tax = total * 0.10;
total += tax;

console.log(`Total Expense: ₹${(total - tax).toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${total.toFixed(2)}`);