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
        return Math.round(add(number1, number2) * 100) / 100;
    } else if (operator === "subtract") {
        return Math.round(subtract(number1, number2) * 100) / 100;
    } else if (operator === "multiply") {
        return Math.round(multiply(number1, number2) * 100) / 100;
    } else if (operator === "division") {
        return Math.round(division(number1, number2) * 100) / 100;
    } else {
        return "Invalid Operator!"
    }
}

// desired functionality
// ✓ numbers buttons from 0 to 9
// ✓ operator buttons + - x /
// ✓ equation button = which triggers operation function
// ✓ clear button
// ✓ populate the display when you click the digit buttons
// ✓ clicking any operator (+ - x /) would store whatever you've entered as number1, display 1st number and the operator, then ready to read the next number 
// ✓ click equal button would store whatever you've entered after clicking operator button as number2, then perform the calculation

// ✓ if instead you clicked another operator after already clicking an operator, the mostly recently selected operator take precedence
// ✓ 3 + 6 + 8 (clicking the second + will trigger the operation of 3 + 6)
// backspace button
// decimal button (once clicked, can't click again)


let number1 = "";
let number2 = "";
let operator = "";
let slctNumBtns = {};
let slctOptBtns = {};
let clckNumBtnsFnc = {};
let slct2ndNumBtns = {};
let clck2ndNumBtnsFnc = {};
let firstOprClk = true;
let clrFlag = false;
const optArray = ["Add", "Sbtrct", "Mltp", "Dvsn"];
frmlDsply = document.querySelector("#formula");
ansDsply = document.querySelector("#answer");
btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");

const clrFncBrfOpr = function () {
    number1 = "";
    number2 = "";
    operator = "";
    frmlDsply.textContent = "";
    ansDsply.textContent = "";
}
btnClr.addEventListener("click", clrFncBrfOpr);

for (let i = 0; i < 10; i++) {

    slctNumBtns[`btnNum${i}`] = document.querySelector(`#btnNum${i}`);

    clckNumBtnsFnc[`read${i}`] = function () {
        if (operator === "") {
            number1 = number1 + `${i}`;
            frmlDsply.textContent = number1;
        }
    }

    slctNumBtns[`btnNum${i}`].addEventListener("click", clckNumBtnsFnc[`read${i}`]);
}

const clkOprtn = function (event) {

    if (firstOprClk && number2 === "") {
        firstOprClk = false;

        if (event.target.id === "btnAdd") {
            operator = "add";
            frmlDsply.textContent = frmlDsply.textContent + " + ";
        } else if (event.target.id === "btnSbtrct") {
            operator = "subtract";
            frmlDsply.textContent = frmlDsply.textContent + " - ";
        } else if (event.target.id === "btnMltp") {
            operator = "multiply";
            frmlDsply.textContent = frmlDsply.textContent + " x ";
        } else if (event.target.id === "btnDvsn") {
            operator = "division";
            frmlDsply.textContent = frmlDsply.textContent + " ÷ ";
        }
    
        slct2ndNumBtns = {};
        clck2ndNumBtnsFnc = {};
    
        for (let i = 0; i < 10; i++) {
    
            slct2ndNumBtns[`btnNum${i}`] = document.querySelector(`#btnNum${i}`);
    
            clck2ndNumBtnsFnc[`read${i}`] = function () {
                if (operator !== "") {
                    number2 = number2 + `${i}`;
                    if (operator === "add") {
                        frmlDsply.textContent = number1 + " + " + number2;
                    } else if (operator === "subtract") {
                        frmlDsply.textContent = number1 + " - " + number2;
                    } else if (operator === "multiply") {
                        frmlDsply.textContent = number1 + " x " + number2;
                    } else if (operator === "division") {
                        frmlDsply.textContent = number1 + " ÷ " + number2;
                    }
                }
            }
    
            slct2ndNumBtns[`btnNum${i}`].addEventListener("click", clck2ndNumBtnsFnc[`read${i}`]);
        }
    
        eqlFnc = function () {
            ansDsply.textContent = operation(Number(number1), Number(number2), operator);
        }
        btnEql.addEventListener("click", eqlFnc);
    
        clrFnc = function () {
            number1 = "";
            number2 = "";
            operator = "";
            frmlDsply.textContent = "";
            ansDsply.textContent = "";
            for (let i = 0; i < 10; i++) {
                slct2ndNumBtns[`btnNum${i}`].removeEventListener("click", clck2ndNumBtnsFnc[`read${i}`]);
            }
            firstOprClk = true;
        }
        btnClr.addEventListener("click", clrFnc);

    } else if (!firstOprClk && number2 === "") {
        if (event.target.id === "btnAdd") {
            operator = "add";
            frmlDsply.textContent = number1 + " + ";
        } else if (event.target.id === "btnSbtrct") {
            operator = "subtract";
            frmlDsply.textContent = number1 + " - ";
        } else if (event.target.id === "btnMltp") {
            operator = "multiply";
            frmlDsply.textContent = number1 + " x ";
        } else if (event.target.id === "btnDvsn") {
            operator = "division";
            frmlDsply.textContent = number1 + " ÷ ";
        }

    } else if (!firstOprClk && number2 !== "") {
        
            ansDsply.textContent = operation(Number(number1), Number(number2), operator);
            number1 = ansDsply.textContent;
            number2 = "";
            
            if (event.target.id === "btnAdd") {
                operator = "add";
                frmlDsply.textContent = number1 + " + ";
            } else if (event.target.id === "btnSbtrct") {
                operator = "subtract";
                frmlDsply.textContent = number1 + " - ";
            } else if (event.target.id === "btnMltp") {
                operator = "multiply";
                frmlDsply.textContent = number1 + " x ";
            } else if (event.target.id === "btnDvsn") {
                operator = "division";
                frmlDsply.textContent = number1 + " ÷ ";
            }
    
    }
    

}

for (let i = 0; i < optArray.length; i++) {
    slctOptBtns[`btn` + optArray[i]] = document.querySelector(`#btn` + optArray[i]);
    slctOptBtns[`btn` + optArray[i]].addEventListener("click", clkOprtn);
}

