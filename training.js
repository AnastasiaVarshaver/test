var customConsole = require('prompt-sync')();
console.log("Choose a function");
var operations = ['1: addition', '2: subtraction', '3: dividing', '4: multiplying'];
for (var i = 0; i < operations.length; i++) {
    console.log(operations[i]);
}
;
var operation = 0;
while (operation > 4 || operation < 1) {
    operation = customConsole("Choose the number of operation between 1 and 4 and press \"Enter\"\n    ");
}
;
var number1 = customConsole("Enter the first number and press \"Enter\"\n    ");
var number2 = customConsole("Enter the second number and press \"Enter\"\n    ");
var resultNames = ['addition', 'subtraction', 'dividing', 'multiplying'];
var resultName = resultNames[operation - 1];
function addition() {
    return +number1 + +number2;
}
;
function subtraction() {
    return number1 - number2;
}
;
function dividing() {
    return number1 / number2;
}
;
function multiplying() {
    return number1 * number2;
}
;
var result;
if (operation == 1) {
    result = addition();
}
else if (operation == 2) {
    result = subtraction();
}
else if (operation == 3) {
    result = dividing();
}
else if (operation == 4) {
    result = multiplying();
}
console.log("The result is " + result);

new changes
