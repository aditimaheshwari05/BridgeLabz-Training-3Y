"use strict";

class Employee {
    // Initialize employee properties
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus percentage to monthly salary
    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Aditi", "IT", 50000),
    new Employee(2, "Rahul", "HR", 45000),
    new Employee(3, "Priya", "Finance", 55000),
    new Employee(4, "Aman", "Marketing", 40000),
    new Employee(5, "Neha", "IT", 60000)
];

// Apply bonus to employees
employees[0].applyBonus(10);
employees[1].applyBonus(5);
employees[2].applyBonus(8);
employees[3].applyBonus(5);
employees[4].applyBonus(10);

// Display annual salary of each employee
console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        `ID: ${employee.id} | Name: ${employee.name} | Department: ${employee.department} | Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`
    );
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\nTotal Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);