const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a*b;
};

const division = function (a, b) {
    if (b !== 0) {
        return a/b;
    } else {
        return "ERR!";
    }
};

const operation = function(number1, number2, operator) {
    if (operator === "add") {
        return add(number1, number2);
    } else if (operator === "subtract") {
        return subtract(number1, number2);
    } else if (operator === "multiply") {
        return multiply(number1, number2);
    } else if (operator === "division") {
        return division(number1, number2);
    } else {
        return "Invalid Operator!"
    }
}

// desired functionality
// numbers buttons from 0 to 9
// operator buttons + - x /
// equation button = which triggers operation function
// clear button
// backspace button
// decimal button (once clicked, can't click again)
// populate the display when you click the digit buttons

let number1 = "";
let number2 = "";
// let operator = "add";

// read the class id of numbers button in the HTML file, then extract the number from their class id, which is the last character
    // clicking any operator (+ - x /) would store whatever you've entered as number1, then ready to read the next number 
    // if instead you clicked another operator after already clicking an operator, the mostly recently selected operator take precedence
    // click equal button would store whatever you've entered after clicking operator button as number2, then perform the calculation


const btnNum1 = document.querySelector("#btnNum1");
const btnNum2 = document.querySelector("#btnNum2");
const btnNum3 = document.querySelector("#btnNum3");


function read1() {
    number1 = number1 + "1";
    console.log(number1);
}

function read2() {
    number1 = number1 + "2";
    console.log(number1);
}

function read3() {
    number1 = number1 + "3";
    console.log(number1);
}

btnNum1.addEventListener("click", read1);
btnNum2.addEventListener("click", read2);
btnNum3.addEventListener("click", read3);

let readNumObj = {};
for (i = 0; i < 10; i++) {
    
    
    const buttonId = `btnNum${i}`;
    
    const btnNumi = document.querySelector(buttonId);
    const myfunction = "read" + i;
    function readi() {
        number1 = number1 + i;
        console.log(number1);
    }
    btnNumi.addEventListener("click", readi);
}


  
  // Get the button element and assign it to the object
  buttons[`btn${i}`] = document.getElementById(buttonId);

// console.log(operation(number1, number2, "division"));