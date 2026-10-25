let purchaseAmount = 7500;
let discountPercentage;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let discountAmount = (purchaseAmount * discountPercentage) / 100;
let finalPrice = purchaseAmount - discountAmount;

console.log(`Original Total: ₹${Math.round(purchaseAmount)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final Price: ₹${Math.round(finalPrice)}`);