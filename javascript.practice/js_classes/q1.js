"use strict";

class Product {
    // Constructor initializes product properties
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Applies the given discount percentage to the product price
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Returns product details in a formatted string
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Backpack", 900, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics")
];

// Apply a 10% discount to the laptop
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter and display products with price greater than ₹1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with Price Greater Than ₹1000:");
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});