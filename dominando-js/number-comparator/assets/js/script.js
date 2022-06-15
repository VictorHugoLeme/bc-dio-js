
var result = document.getElementById('result');

function operate() {
    result.innerHTML = '';
    var n1 = parseInt(document.getElementById('numberOne').value);
    var n2 = parseInt(document.getElementById('numberTwo').value);


    var textEquals;
    var resultEquals;
    var sum = n1 + n2;

    var textCompare;
    var resultCompare;

    if (n1 == n2) {
        resultEquals = document.createElement('p');
        resultEquals.appendChild(document.createTextNode("The numbers are equal"));

    } else {
        resultEquals = document.createElement('p');
        resultEquals.appendChild(document.createTextNode("The numbers are different"));
    }
    resultEquals.className = 'result';
    result.appendChild(resultEquals);

    var textSum = `Their sum is ${sum}, thats \n`;

    if (sum < 10) {
        textSum += " minor then 10, \n"
    } else {
        textSum += " greater then 10, \n"
    }

    if (sum < 20) {
        textSum += " and minor then 20."
    } else {
        textSum += " and greater then 20."
    }

    textCompare = document.createTextNode(textSum);
    resultCompare = document.createElement('p');
    resultCompare.appendChild(textCompare);

    result.appendChild(resultCompare);
}