var output = document.getElementById('result');
var resultP = document.createElement('p');

function verify() {
    output.innerHTML = '';
    var numbers = document.getElementById('inputNumbers').value.split(',');
    var size = parseInt(document.getElementById('inputSize').value);
    var result = '';

    try {
        if (!numbers || !size) throw new ReferenceError();

        if (typeof numbers !== 'object') throw new TypeError();
        if (typeof size !== 'number') throw new TypeError();

        if (numbers.length !== size) { throw new RangeError(); }

        result = "It Matches!";
    } catch (e) {
        if (e instanceof ReferenceError) {
            result += 'Input is required, ';
        }
        if (e instanceof TypeError) {
            result += 'Input must be an array, size must be a number, ';
        }
        if (e instanceof RangeError) {
            result += 'Size must be equal to the array length'
        }
    } finally {
        resultP.innerHTML = result;
        output.appendChild(resultP);
    }
}

