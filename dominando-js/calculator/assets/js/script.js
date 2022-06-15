var display = document.getElementById('display');
display.innerHTML = 0;

var numberOne = '';
var numberTwo = '';

function addNumber(n) {
    if (display.innerHTML[0] != '-' && display.innerHTML[0] != '+') {
        display.innerHTML = n;
    }
    else {
        display.innerHTML += n;
    }
}

function addOperator(o) {
    numberOne = display.innerHTML;
    operator = o;
    display.innerHTML = operator;
}

function calculate() {
    numberTwo = display.innerHTML;
    n1 = parseFloat(numberOne);
    n2 = parseFloat(numberTwo);
    var result = 0;
    result = n1 + n2;
    display.innerHTML = (result);
}

function clear() {
    display.innerHTML = 0;
    numberOne = '';
    numberTwo = '';
    operator = '';

}