"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    debugger;

    try {
        if (transaction === null) {
            throw new Error("Null transaction entry");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        validTransactions.push(transaction);
        console.log(`Valid Transaction: ID ${transaction.id}, Amount ₹${transaction.amount}`);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            error: error.message
        });

        console.log(`Invalid Transaction: ${error.message}`);
    }
}

console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);