"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(50, 60, 'as-number');
console.log(combineAges);
const combineStringAges = combine("34", "63", 'as-number');
console.log(combineStringAges);
const combineNames = combine("Max", "Anna", 'as-text');
console.log(combineNames);
