// Q6: Prototype chain using constructor functions

// Person constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Faculty constructor
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};

const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "Data Structures"
);

professor1.showName();
professor1.showDepartment();
professor1.showSubject();
