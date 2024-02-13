"use strict";
// A generic type is a type which is kinda
/* of connected to other types an is flexible regarding which exact type that type is
*/
var names = [];
// names[0].split(' ')
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is Done');
    }, 2000);
});
promise.then(function (data) { return data.split(' '); });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var myobj = merge({ name: 'Precell', hobbies: ['sports', 'music', 'xaines'] }, { age: 26 });
var myobj2 = merge({ name: 'Precell', hobbies: ['sports', 'music', 'xaines'] }, { age: 26 });
console.log(myobj, myobj2);
function countAndDesribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 0) {
        descriptionText = 'Got 1 element';
    }
    else {
        descriptionText = "Got ".concat(element.length, " elements.");
    }
    return [element, descriptionText];
}
console.log(countAndDesribe("Hi There why aren't you answering my call?"));
console.log(countAndDesribe(['warri', 'Do', 'pull', 'up']));
// key of constraint
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
extractAndConvert({ name: 'Precell' }, 'name');
