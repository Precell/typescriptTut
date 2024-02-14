"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names1 = ['Max', 'Sehlasie'];
// names1.push('Manu')
// Genric types and Union Types
var Data1Storage = /** @class */ (function () {
    function Data1Storage() {
        this.data = [];
    }
    Data1Storage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    Data1Storage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    Data1Storage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return Data1Storage;
}());
var text1Storage = new DataStorage();
textStorage.addItem("Melody");
textStorage.addItem("Miriam");
textStorage.addItem("Tapuwwa");
textStorage.addItem("Miriam");
textStorage.addItem("Senzeni");
textStorage.removeItem("Miriam");
console.log(textStorage.getItems());
var number1Storage = new DataStorage();
/**
 * The difference btwn generic and union types:
 * union types is great when you want a function with one of the different types everytime you call it
 * generic types are great if you want to lock in a certain type, tou use the same type through out the entire Class instance you create or function
 *  generics are great for class or interface, where you don't know what type will come in but you do know that it will be something specific,
 *  but in generics you can define what type that parameter should be each time you use the function
 *  You want union type when you are flexible to have a different type with every method call or every function call
 */
