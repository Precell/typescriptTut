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
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Melody");
textStorage.addItem("Miriam");
textStorage.addItem("Tapuwwa");
textStorage.addItem("Miriam");
textStorage.addItem("Senzeni");
textStorage.removeItem("Miriam");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(12);
numberStorage.addItem(3);
numberStorage.addItem(2);
numberStorage.addItem(23);
numberStorage.removeItem(84);
console.log(numberStorage.getItems());
// const objStorage = new DataStorage<object>();
// const objseh = {name: 'Sehlasie'}
// objStorage.addItem({name:'Sehlasie'})
// objStorage.addItem({name:'Khago'})
// objStorage.addItem({name:'Khelo'})
// // ....
// objStorage.removeItem(objseh)
// console.log(objStorage.getItems());
