"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    debugger;

    try {
        const data = JSON.parse(rawData[i]);

        if (!Object.hasOwn(data, "user") || !Object.hasOwn(data, "age")) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(data.age);

        if (Number.isNaN(age)) {
            throw new Error("Age must be a valid number");
        }

        data.age = age;
        cleanData.push(data);

        if (age < 18) {
            under18Users.push(data);
        }

        console.log(`Line ${lineNumber}: Valid JSON`);
    } catch (error) {
        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

console.log("\nClean Data:");
console.log(cleanData);

console.log("\nUnder-18 Users:");
console.log(under18Users);

console.log(`\nValid Entries: ${cleanData.length}`);
console.log(`Invalid Entries: ${rawData.length - cleanData.length}`);