// Ecma script error
// Code error
// Composed by message, name, line and callstack

// DOMException
// script/dom error

console.log("================ TRY/CATCH/FINALLY ================")
console.group()

// catching an uncaught error in a try block
function palindromeCheck(input) {
    if (!input) throw "Input is required";
    return input === input.split('').reverse().join('');
}

function tryCatchExemple(string) {
    try {
        palindromeCheck(string);
    }
    catch (e) {
        console.log("Error: " + e);
    }
    finally {
        console.log("Finally: Not throwed error 'cause reasons.");
    }
}
tryCatchExemple("");

console.groupEnd()
console.log("================== ERROR OBJECT ===================")
console.group()

// Error object
// accepts a message, fileName and lineNumber

const error = new Error("Custom error message");
error.name = "MyError";
error.fileName = "MyError.js";
error.lineNumber = "10";
console.log("Logging error's Name: " + error.name + ".");
console.log("Logging error's message: " + error.message + ".");
console.log("Logging error's fileName: " + error.fileName + ".");
console.log("Logging error's lineNumber: " + error.lineNumber + ".");
console.log("Logging error's stack: " + error.stack + ".");
console.log("Logging error's toString: " + error.toString() + ".");
console.log("hi")