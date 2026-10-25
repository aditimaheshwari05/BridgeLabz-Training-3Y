

//math

let a= 4.5;
console.log(Math.round(a)); // 5
console.log(Math.floor(a)); // 4
console.log(Math.ceil(a)); // 5
console.log(Math.trunc(a)); // 4
console.log(Math.pow(2, 3)); // 8

let num= Math.random();
console.log("Random number: ${num}");

// arrays

 let arr= ["hello", "hi", 3, true, 5];
 for (let x of arr){
    console.log(x);
 }

 for (let i=0; i<arr.length; i++){
    console.log(arr[i]+ " ");
 }

 console.log(arr.slice(2,3)); // 3
arr.push("mango");
console.log(arr);

console.log(arr.indexOf("hi")); // 1

// generate password
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// generate random hex-colour value
// background colour: #000000
// foreground colour: #ffffff, #ff324f
function generateColor() {
    let arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let ans="#";

    for(let i=0; i<6; i++){
        ans+= arr[generateotp()];
    }
    console.log(ans);
}


// ranrandom password generator



let number2= 456;
let str2= number2+"";

let bool1=true;
let num3= Number(bool1);
console.log(num3,typeof num3); // 1
//create a function
//function declaration
//function expression
let add= function(x,y){
    return x+y;
}

let multi= function(x,y){
    return x*y;
}
//arrow function
let addd= (x,y)=>{ 
    return x+y;
}

function calculate(x,y,callback){  //higher-order function 
    return callback(x,y);
}

let sum= calculate(4,5,add);
console.log(sum); // 9

let sum2= calculate(4,5,(x,y)=>{
    return x+y;
});

let product= calculate(4,5,multi);
console.log(product); // 20

let arr1= [1,2,3,4,5,6];
let fun=(x)=>{
    return x*2;
};
let result= arr1.map(fun);
console.log(result); // [2,4,6,8,10,12]

let result2= arr1.map((x)=>{
    return x*2;
});
console.log(result2); // [2,4,6,8,10,12]

let res= arr1.filter((x)=>{
    return x%2==0;
});
console.log(res); // [4, 6] (Note: true is treated as 1, so it is not even) 

let arr2=["apple", "mango", "banana", "apple"];
//remove apple from the array
let res2= arr2.filter((x)=>{
    return x!="apple";
});
console.log(res2); // ["mango", "banana"]
