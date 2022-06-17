console.log("==================== Functions ====================")
console.group()

// standard function
function name(params) {
    return "Name: " + params;
}
console.log("Param passing: " + name("Victor"));

//anonymous function
const sum = function (a, b) {
    return a + b;
}
console.log("Sum: " + sum(2, 3));

// IIFE function
(function () {
    let = name = "Victor";
    console.log("IIFE function: " + name);
})();

(function (a, b) {
    console.log("IIFE with params: " + a + b)
})(1, 2); // with params

const sum2 = (
    function (a, b) {
        return a + b;
    }
)(1, 2); // const function with params
console.log("Const function with params: " + sum2);

// callback
const calc = function (operation, num1, num2) {
    return operation(num1, num2);
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const resultMult = calc(multiply, 2, 3);

console.log("Callback function: " + resultMult);

console.groupEnd()
console.log("====================== PARAMS =====================")
console.group()

// default params
function exponencial(array, num = 1) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    return result;
}
console.log("Default params: " + exponencial([1, 2]));
console.log("Default params: " + exponencial([1, 2], 2));

// arguments object
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log("`arguments` object: " + findMax(1, 2));

function showArgs() {
    return arguments;
}
console.log(showArgs(1, [2, 3], "Victor"));

// arrays as params
// spread operator
function sumAll(x, y) {
    return x + y;
}
const numbers = [1, 2];
console.log("Array as params, spread operator: " + sumAll(...numbers));

// rest operator
function checkSize(...args) {
    return args.length;
}
console.log("Array as params, rest operator: " + checkSize(1, 2));

// object destructuring

const user = {
    id: 13,
    displayName: "Victor Leme",
    fullName: {
        firstName: "Victor",
        lastName: "Leme"
    }
};

function userId({ id }) {
    return id;
}
console.log("Object destructuring: " + userId(user));

function getFullName({ fullName: { firstName, lastName } }) {
    return `${firstName} ${lastName}`;
}
console.log("Object destructuring: " + getFullName(user));

console.groupEnd()
console.log("================= IF/ELSE & SWITCH =================")
console.group()

// if/else
function positiveNumber(num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}
console.log("If/else check for 1 and -1: " + positiveNumber(1) + ", " + positiveNumber(-1));

// ternary operator
function positiveNumber2(num) {
    return num > 0 ? "Positive" : "Negative";
}
console.log("Ternary operator: " + positiveNumber2(1) + ", " + positiveNumber2(-1));

// else if
function positiveNumber3(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log("Else if: " + positiveNumber3(1) + ", " + positiveNumber3(-1) + ", " + positiveNumber3(0));

// switch/case

function getAnimal(id) {
    switch (id) {
        case 1:
            return "Dog";
        case 2:
            return "Cat";
        case 3:
            return "Bird";
        default:
            return "Unknown";
    }
}
console.log("Switch/case: 1="
    + getAnimal(1) + ", 2="
    + getAnimal(2) + ", 3="
    + getAnimal(3) + ", 4="
    + getAnimal(4), "`A`="
+ getAnimal("A"));

console.groupEnd()
console.log("====================== LOOPS ======================")
console.group()

// for loop
function multiplyByTwo(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}
console.log("For incremental, multiply by two: " + multiplyByTwo([1, 2, 3]));

// for in
function showProperties(obj) {
    let result = [];
    for (i in obj) {
        result.push(i);
    }
    return result;
}

function showValues(obj) {
    let result = [];
    for (i in obj) {
        result.push(obj[i]);
    }
    return result;
}

const person = {
    name: "Victor",
    age: 25,
    useGlasses: true
}

console.log("For prop in obj, show props: " + showProperties(person));
console.log("For prop in obj, show values: " + showValues(person));

// for of string
function logChars(word) {
    console.log("For char of word, add char to array: ");
    let result = [];
    for (char of word) {
        result.push(char);
    }
    console.log(result);
}
logChars("Victor");

// for of array
function logNums(array) {
    console.log("For num of array, add num to new array: ");
    let result = [];
    for (num of array) {
        result.push(num);
    }
    console.log(result);
}
logNums([1, 2, 3]);

// while
function lessThen(num) {
    let result = [];
    let i = 0;
    while (i < num) {
        result.push(i);
        i++;
    }
    return result;
}
console.log("While less then 5: " + lessThen(5));

// do while
function lessThen2(num) {
    let result = [];
    let i = 0;
    do {
        result.push(i);
        i++;
    } while (i < num);
    return result;
}
console.log("Do while less then 5: " + lessThen2(5));

console.groupEnd()
console.log("======================= THIS ======================")
console.group()

// this
const user2 = {
    name: "Victor",
    age: 25,
    useGlasses: true,
    showInfo: function () {
        console.log("The attributes of THIS user are:")
        console.group();
        console.log(`Name: ${this.name}, Age: ${this.age}, Use glasses: ${this.useGlasses}`);
        console.groupEnd();
    }
}
user2.showInfo();

// outside a function
console.log("`This` outside a function: ");
console.log(this);

//in a function
console.log("`This` inside a function: ");
console.log("The result is massive LOL.")