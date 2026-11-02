// Q8: Create a custom myMap() method for arrays

Array.prototype.myMap = function (callback) {
    const result = [];

    // Apply callback to every element
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Test myMap()
const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (num) {
    return num * 2;
});

console.log(doubledNumbers);
