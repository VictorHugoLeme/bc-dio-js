var output = document.getElementById('result');
var resultP = document.createElement('p');

function transcript() {
    output.innerHTML = '';
    var numbers = document.getElementById('input').value.split(' ');
    var result = '';
    if (numbers == [] || numbers == '') {
        result = '-1';
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                result += 0 + ', ';
            } else {
                result += numbers[i] + ', ';
            }
        }
    }
    resultP.innerHTML = result;
    output.appendChild(resultP);
}

