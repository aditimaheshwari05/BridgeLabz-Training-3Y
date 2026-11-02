const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const totalCartValue = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

let discountedTotal = 0;

for (const product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    const discountedPrice = product.price - (product.price * discount / 100);
    discountedTotal += discountedPrice;
}

if (totalCartValue > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
}

console.log("Total Cart Value:", totalCartValue);
console.log("Final Total:", discountedTotal);