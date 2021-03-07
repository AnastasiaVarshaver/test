const customConsole = require('prompt-sync')();

console.log("Choose a function")
let operations = ['1: addition','2: subtraction','3: dividing','4: multiplying'];

for (let i = 0; i < operations.length; i++) {
    console.log(operations[i]);
};

let operation: number = 0;

while ( operation > 4 || operation < 1) {
    operation = customConsole(`Choose the number of operation between 1 and 4 and press "Enter"
    `)};
let number1: number = customConsole(`Enter the first number and press "Enter"
    `);
let number2: number = customConsole(`Enter the second number and press "Enter"
    `);
let resultNames: string[] = ['addition','subtraction','dividing','multiplying'];
let resultName: string = resultNames[operation-1];

function addition() {
    return +number1 + +number2
    };
function subtraction() {
    return number1 - number2
    };
function dividing() {
    return number1 / number2
    };
function multiplying() {
    return number1 * number2
    };
let result: number

if(operation == 1){
    result = addition();
}else if(operation == 2){
    result = subtraction();
}else if(operation == 3){
    result = dividing();
}else if(operation == 4){
    result = multiplying();
}

console.log(`The result is ${result}`);