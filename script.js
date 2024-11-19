const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const division = function (a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "ERR!";
    }
};

const operation = function (number1, number2, operator) {
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
let operator = "";

// clicking any operator (+ - x /) would store whatever you've entered as number1, display 1st number and the operator, then ready to read the next number 
// if instead you clicked another operator after already clicking an operator, the mostly recently selected operator take precedence
// click equal button would store whatever you've entered after clicking operator button as number2, then perform the calculation

let slctNumBtns = {};
let slctOptBtns = {};
let clckNumBtnsFnc = {};
let clckOptBtnsFnc = {};
const optArray = ["Add", "Sbtrct", "Mltp", "Dvsn"];
frmlDsply = document.querySelector("#formula");
ansDsply = document.querySelector("#answer");
btnClr = document.querySelector("#btnClr");

for (let i = 0; i < 10; i++) {

    slctNumBtns[`btnNum${i}`] = document.querySelector(`#btnNum${i}`);

    clckNumBtnsFnc[`read${i}`] = function () {
        if (operator === "") {
            number1 = number1 + `${i}`;
            console.log(number1);
            frmlDsply.textContent = number1;
        }
    }

    slctNumBtns[`btnNum${i}`].addEventListener("click", clckNumBtnsFnc[`read${i}`]);
}



for (let i = 0; i < optArray.length; i++) {
    slctOptBtns[`btn` + optArray[i]] = document.querySelector(`#btn` + optArray[i]);
    // clckOptBtnsFnc[`opt` + optArray[i]] = function () {

    // }

}

const clkAdd = function() {
    operator = "add";
    frmlDsply.textContent = frmlDsply.textContent + " + ";

    let slct2ndNumBtns = {};
    let clck2ndNumBtnsFnc = {};

    for (let i = 0; i < 10; i++) {

        slct2ndNumBtns[`btnNum${i}`] = document.querySelector(`#btnNum${i}`);
    
        clck2ndNumBtnsFnc[`read${i}`] = function () {
            if (operator !== "") {
                number2 = number2 + `${i}`;
                console.log(number2);
                console.log(clck2ndNumBtnsFnc[`read${i}`]);
                frmlDsply.textContent = number1 + " + " + number2;
            }
        }
    
        slct2ndNumBtns[`btnNum${i}`].addEventListener("click", clck2ndNumBtnsFnc[`read${i}`]);
    }

    const btnEql = document.querySelector("#btnEql");
    eqlFnc = function() {
        ansDsply.textContent = operation(Number(number1), Number(number2), operator);
    }
    btnEql.addEventListener("click", eqlFnc);

}

slctOptBtns[`btnAdd`].addEventListener("click", clkAdd);


const clrFnc = function() {
    number1 = "";
    number2 = "";
    operator = "";
    frmlDsply.textContent = "";
    ansDsply.textContent = "";
}

btnClr.addEventListener("click", clrFnc);






// console.log(operation(number1, number2, "division"));