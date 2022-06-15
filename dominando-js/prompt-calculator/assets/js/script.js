function calculator() {
    var operator = prompt('Enter an operator: \n'
        + ' 1. Addition (+) \n'
        + ' 2. Subtraction (-) \n'
        + ' 3.Multiplication (*) \n'
        + ' 4. Division (/) \n'
        + ' 5. Exponentiation (**) \n'
        + ' 6. Modulus (%)');

    if (!operator || operator >= 7 || operator <= 0) {
        alert('You must enter an valid operator');
        calculator();
    } else {
        let n1 = prompt('Enter first number: ');
        let n2 = prompt('Enter second number: ');
        let result = 0;

        if (!n1 || !n2) {
            alert('You must enter two valid numbers');
            calculator();
        } else {
            switch (operator) {
                case '1':
                    result = parseInt(n1) + parseInt(n2);
                    alert(`${n1} + ${n2} = ${result}`);
                    break;
                case '2':
                    result = parseInt(n1) - parseInt(n2);
                    alert(`${n1} - ${n2} = ${result}`);
                    break;
                case '3':
                    result = parseInt(n1) * parseInt(n2);
                    alert(`${n1} * ${n2} = ${result}`);
                    break;
                case '4':
                    result = parseInt(n1) / parseInt(n2);
                    alert(`${n1} / ${n2} = ${result}`);
                    break;
                case '5':
                    result = parseInt(n1) ** parseInt(n2);
                    alert(`${n1} to the power ${n2} = ${result}`);
                    break;
                case '6':
                    result = parseInt(n1) % parseInt(n2);
                    alert(`The rest of the division of ${n1} by ${n2} = ${result}`);
                    break;
            }
        }
    }
}

calculator();