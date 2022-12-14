// Variables - boxes that has contents
// Intialization
let age = 29;             
const name = "Jose";

age = 26;
// Display functions
console.log(age);
// alert("Hello World!");
// prompt("Enter a number:");

// Data Types 
const firstName = "John";  // String Data type, ("", "") String literal
const message = `This
is my
message`;  // String, (``) backtick, Template literal
const greeting = `Hello ${firstName}`;   // ${expression}
const favoriteNumber = 7;  // Number data type
const average = 99.99;   // Number data type
const isHappy = true;     // Boolean Data type
const isHungry = false;   // Boolean Data type
const value = null;       // null
const unDef = undefined;  // undefined

// Operators
// Assignment operator =
const num1 = 15;
const num2 = 5;

// String - (String or Number) = String
// concatenation, concatenate
console.log("Number 1; " + num1);
//    \n = new line
console.log("This \n is \n another \n line");

// Math operators
// console.log("Addition: " + (num1 + num2) );
console.log(`Addition: ${num1 + num2}`);  // Addition operator +
console.log(`Subtraction: ${num1 - num2}`); // Subtraction operator -
console.log(`Multiplication: ${num1 * num2}`); // Multiplication operator *
console.log(`Division: ${num1 / num2}`); // Division operator /
console.log(`Modulo: ${num1 % num2}`); // Remainder operator, Modulo %

let count = 10;
// Usually used in loops
// Increment ++
console.log(count++); // Postfix increment
console.log(++count); // Prefix increment
// Decrement --
console.log(count--); // Postfix decrement
console.log(--count); // Prefix decrement

// count -= 1;
// console.log(count);


// More Assignment Operators
let sum = 0;
sum += 9; // Addition assignment +=
//sum = sum + 9;
let diff = 10;
diff -= 3; // Subtraction assignment -=
// diff = diff - 3;
let product = 1;
product *= 5; //Multiplication assignment

let quotient = 24;
quotient /= 6; //Divisiion assignment

let remainder = 10;
remainder %= 3; //Modulo assignment

// Conditionals / Conditional statements
let number = 20;
let description;
// if statement
if (number >= 20) {
    description = "Number greater than or equal to 20";
} 
else if (number === 19) {
    description = "Number is 19";
}
else {
    description = "Number less than 20";
}
console.log(description);

// console.log(10 > 20);
// equality
console.log("10" == 10); //true
// strict equality
console.log("10" === 10); //false

// Truthy and Falsy values
// truthy values evaluate as true
// falsy values evaluate as false
// any non-zero number = truthy value
// zero = falsy value
if (number) {
    console.log(number);
}
const sample = ""; // falsy value
//const sample = "sample"; // truthy value
if (sample) {
    console.log(sample);
}
let nullValue = null;
if (nullValue) {
    console.log("null");
}
let example;
if (example) {
    console.log("undefined");
}

// Loops
let num = 0;
// while loop
// while (num < 5) //condition
// { 
//     // code block
//     console.log(num++);
// }
num = 5;
// while loop
// while (num > 0) //condition
// { 
//     // code block
//     console.log(num--);
// }

// do... while loop
// num = 0;
// do {
//     console.log(num++);
// } while (num < 5);

// for loop
// for (initialization; condition; post-loop operation)
// check condition
// if true execute code
// post-loop operation
for (let i = 0; i < 5; i++) {
    if(i === 3) {
        console.log("The number 3");
    }
}

// Prompt user input
// const input = Number( prompt("Enter a number: ") );

// const numSample = Number("50");
// console.log(input + 25);

/************************************** 
 * Functions
*/ 

// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}

// () = invoker
const sum1 = add(10, 5); // 15
console.log(sum1);
// const sum2 = add(50, 99);

// Function Expression
const subtract = function(num1, num2) {
    return num1 - num2;
}
const diff1 = subtract(80, 50);
console.log(diff1);
// const diff2 = subtract;
// console.log(diff2);

// Arrow Function
// const multiply = (num1, num2) => {
//     // other code here
//     return num1 * num2;
// }
const multiply = (num1, num2) => num1 * num2;
const product1 = multiply(5,8);
console.log(product1);

// Parameterless function
const greetMe = () => alert("Hello Someone!");
greetMe();
