const operator = prompt("Enter operator ( either +, -, * or / ): ");
const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));


let result;
if (operator === "+") {
    result = num1 + num2;
}
else if (operator === "-") {
    result = num1 - num2;
}
else if (operator === "*") {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

alert(result);