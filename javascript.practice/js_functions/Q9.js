// Q9: Person and Student inheritance using ES6 classes

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Student inherits from Person
class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Create Student object
const student1 = new Student("Aditi", "CSE");

// Access methods from both classes
student1.showName();
student1.showBranch();
