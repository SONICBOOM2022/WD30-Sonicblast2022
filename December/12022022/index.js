// Display Functions
// alert("Gumising Ka Jam!");
// console.log("Hello Console!");
// Variation
let isApproved = true;    // Boolean Literal
var person = "John";     // string data type / String Literal
console.log(person);


let age = 12;       //  number data type / Number Literal
age = 15;
console.log(age);

const birthplace = "Quezon City";
console.log(birthplace);

//  Data Types
const firstName = "Jose";   // String Data type, String literal
const lastName = 'Rizal';
// Backtick
const message = `Jose Rizal
                                this is another line
one more line`;  // String Data type, String literal

console.log(message);



let num1 = 1;
let printValue;
num1 = 21;

if (num1 > 10 && num1 < 20) {
    printValue = "The value of num1 is greater than 10 and less than 20";
}
else if (num1 == 10 || num1 == 21) {
    printValue = "The value of num1 is equal to 10 or equal to 21";
}
else if (num1 > 5) {
    printValue = "The value of num1 is greater than 5";
}
else {
    printValue = "The value of num1 is less than 10";
}
console.log(printValue);



//let printStatus;
//const age = 16;

// if(age >= 18) {
//    printStatus = "Approved";
//}
//else {
//    printStatus = "Disapproved";    
// }


// Ternary Operator ? :
// (condition) ? (value if true) : (value if false);
printStatus = (age >= 18) ? "Approved" : "Disapproved";
console.log(printStatus);




const hourOfDay = prompt("Endter hour of day");
let greeting;

if (hourOfDay >= 4 && hourOfDay < 12) {
    greeting = "Good Morning";
}
else if (hourOfDay >= 12 && hourOfDay <= 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Eveming";
}


console.log(greeting);


const day = "Friday";

switch(day) {

    case "Monday":
        console.log("Today is Monday");
        break;

    case "Friday":
        console.log("Happy weekend!");
        break;

    default:
        console.log("Today is unknown");
}
