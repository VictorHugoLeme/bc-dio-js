// var x = 1;

/*
var y = 2;
var z = 3;
*/

var preco = 2;
const DESCONTO = 0.2;

function aplicarDesconto(a, b) {
    return a - b;
}

console.log('O valor com desconto é: ', aplicarDesconto(preco, DESCONTO));

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`O número ${array[i]} é impar.`);
        }
    }
    return evenNums;
}

console.log('Os números pares são: ', returnEvenValues(values));