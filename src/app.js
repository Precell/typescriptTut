"use strict";
let userInput;
let userName;
userInput = 4;
userInput = 'Selahsie';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateErro(message, code) {
    throw { message: message, errorCode: code };
}
generateErro("Error occured", 200);
function addNums(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
