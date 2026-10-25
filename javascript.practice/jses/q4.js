"use strict";

function showMessage() {
    let greeting = "Welcome";
    let watchVariable = greeting;

    debugger;

    console.log(greeting);
    console.log(`Watch Variable: ${watchVariable}`);
}

showMessage();