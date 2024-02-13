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
