// Q1: Demonstrate Callback Function

// Function that prints a greeting and then executes the callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function
    callback();
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Calling greetUser and passing showEndMessage as a callback
greetUser("Aditi", showEndMessage);


