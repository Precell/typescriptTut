"use strict";
// FUNCTION TYPES AND VOID
function adds(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log("Result: " + num);
}
printResults(adds(5, 12));
// FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// FUNCTION AS TYPES
let combineValue;
combineValue = adds;
// combineValue = printResult() ERROR!!!
console.log(combineValue(8, 8));
addAndHandle(23, 23, (result) => {
    console.log(result);
});
