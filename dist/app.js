"use strict";
// let userInput: unknown;
// let userName: string;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// userInput = 4;
// userInput = 'Selahsie';
// if (typeof userInput === 'string') {
//     userName = userInput 
// }
// function generateErro(message:string, code:number) {
//     throw {message:message, errorCode: code};
// }
// generateErro("Error occured", 200)
// function addNums(n1:number, n2:number) {
//     if (n1 + n2 > 0) {
//         return n1 + n2
//     }
//     return;
// }
// function add(a:number, b:number){
//     let result;
//     result = a + b
//     return result;
// }
// const add = (a:number, b:number)=>{
//     return a+b
// }
// const adda = (a:number, b:number = 1) => a + b;
// const printOutput:(a: number | string) => void = output => console.log(output);
// console.log(adda(2));
var button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('click', function (event) { return console.log(event); });
}
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
// const activeHobbies = ['Hiking', ...hobbies];
// ARRAY DESTRUCTURING
// const hobbie1 = hobbies[0]
// const hobbie2 = hobbies[1]
var remainingHobbies = hobbies.slice(0);
// console.log(remainingHobbies, 'remaining hobbies');
// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push.apply(activeHobbies, hobbies);
var person1 = {
    name: "Precell",
    age: 26
};
var copiedPerson = __assign({}, person1);
// OBJECT DESTRUCTURING
var newPerson = {
    fname: "Suzan",
    age: 47,
    address: "2343 Harare drive"
};
var userName = newPerson.fname, age = newPerson.age, address = newPerson.address;
// console.log(userName, age, address);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // const add = (...numbers: [number, number, number]) => { ****__When working with Tuples__****
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(1, 2, 4, 23);
// const addedNumbers = add(1,2,4)                          ****__When working with Tuples__****
// console.log(addedNumbers);
