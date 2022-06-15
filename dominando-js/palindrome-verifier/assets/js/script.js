var display = document.getElementById('input');
var green = document.getElementById('green');
var red = document.getElementById('red');

var check = false;
green.style.display = 'none';
red.style.display = 'block';

function verify() {
    if (verifyComprehension() && verifyReverse()) {
        green.style.display = 'block';
        red.style.display = 'none';
    } else {
        green.style.display = 'none';
        red.style.display = 'block';
    }
}

function verifyReverse() {
    let input = document.getElementById('input').value;
    if (!input) return false;
    return input.split('').reverse().join('') === input
}

function verifyComprehension() {
    let input = document.getElementById('input').value;
    if (!input) return false;
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

