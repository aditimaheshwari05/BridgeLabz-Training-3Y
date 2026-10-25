"use strict";

class Book {
    
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        }
    }

    
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        }
    }

    
    displayDetails() {
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.isbn}`;
    }
}


const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Atomic Habits", "James Clear", "ISBN002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN003", true),
    new Book("The Hobbit", "J.R.R. Tolkien", "ISBN004")
];


console.log("Available Books:");

const availableBooks = books.filter(book => !book.isIssued);

availableBooks.forEach(book => {
    console.log(book.displayDetails());
});


const searchISBN = "ISBN002";

const bookToIssue = books.find(book => book.isbn === searchISBN);

if (bookToIssue) {
    bookToIssue.issueBook();
} else {
    console.log("Book with the given ISBN was not found.");
}


console.log("\nAvailable Books After Issuing:");

books
    .filter(book => !book.isIssued)
    .forEach(book => {
        console.log(book.displayDetails());
    });