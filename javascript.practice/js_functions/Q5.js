// Q5: Inheritance using constructor functions and prototypes

// Person constructor
function Person(name) {
    this.name = name;
}

// Method added to Person prototype
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Student constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Student inherits from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Method added to Student prototype
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Create a Student object
const student1 = new Student("Aditi", "CSE");

// Access methods from both prototypes
student1.showName();
student1.showBranch();
