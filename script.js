const result = document.querySelector('.content__result');
const cleanAll = document.querySelector('.CE');
const cleanOne = document.querySelector('.C')
const equal = document.querySelector('.equal');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation');


numbers.forEach(function (number) {
    number.addEventListener('click', (e) => {
        numberPress(e.target.textContent);
    });
});

function numberPress(number) {
    if (MemoryNewNumber) {
        result.value = number;
        MemoryNewNumber = false;
    } else {
        if (result.value === "") {
            result.value = number;
        } else {
            result.value += number;
        };
    };
};

operators.forEach(function (operation) {
    operation.addEventListener('click', (e) => {
        operationPress(e.target.textContent)
    });
});

let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryOperation = "";


function operationPress(operation) {
    let currentValue = parseInt(result.value);


    if (MemoryNewNumber && MemoryOperation !== "=") {
        result.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;

        if (MemoryOperation === "+") {
            MemoryCurrentNumber += currentValue;
        } 
        else if (MemoryOperation === "–") {
            MemoryCurrentNumber -= currentValue;
        } 
        else if (MemoryOperation === "×") {
            MemoryCurrentNumber *= currentValue;
        } 
        else if (MemoryOperation === "÷") {
            MemoryCurrentNumber /= currentValue;
        } 
        else {
            MemoryCurrentNumber = currentValue;
        }

        result.value = MemoryCurrentNumber;
        MemoryOperation = operation;
    }
}


cleanAll.addEventListener('click', () => {
    result.value = '';
    MemoryCurrentNumber = 0;
    MemoryNewNumber = false;
    MemoryOperation = "";
});

cleanOne.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});






