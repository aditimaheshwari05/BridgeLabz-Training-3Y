const numbers = [];

for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

const results = [];

for (const number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        results.push(`${number}: Even`);
    } else {
        results.push(`${number}: Odd`);
    }
}

console.log(results);