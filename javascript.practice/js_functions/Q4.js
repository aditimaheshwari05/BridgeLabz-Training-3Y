// Q4: Constructor function with prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method shared by all Car objects
Car.prototype.getDetails = function () {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
};

// Create two car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

// Call the shared prototype method
car1.getDetails();
car2.getDetails();
