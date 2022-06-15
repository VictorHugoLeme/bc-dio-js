var heading1 = document.getElementsByTagName('h1')[0];
var number = 0

function increment() {
    heading1.innerHTML = ++number;
    changeColor()
}

function decrement() {
    heading1.innerHTML = --number;
    changeColor()
}

function changeColor() {
    if (number >= 0) {
        heading1.style.color = 'lightgray';
    } else {
        heading1.style.color = 'orange';
    }
}