"use strict";
/**
 * AN INTERFACE DESCRIBES THE STRUCTURE OF AN OBJECT
 * WE CAN USE TO DESCRIBE HOW AN OBJECT SHOULD LOOK LIKE
 * WE CANNOT USE THEM AS A BLUEPRINT LIKE CLASSES BUT AS CUSTOM TYPE
 * YOU CAN IMPLEMENT INTERFACES IN A CLASS
 * IT CAN BE USED AS A CONTRACT A CLASS CAN IMPLEMENT, AND BE WHAT A CLASS HAS TO ADHERE TO
 * we can use the interface to share it among multiple classes
 * INTERFACES ARE MOSTLEY USED TO SHARE FUNCTIONALITY AMONGST DIFFERENT CLASSES NOT REGARDINGTHEIR CONCRETE IMPLEMENTATION
 * YOU CANNOT HAVE IMPLENTATION or VALUE INSIDE OF INTERFACES REGARDING THE STRUCTURE, THE FEATURES A CLASS SHOULD HAVE
 * THEY ARE LIKE abstract Classes the diffence is that an interface has no implementation destails at all
 * Whereas abstract Classes can be a mixture of overriding certain methods and have a concrete implementation of certain methods
 *
 */
var aadd;
aadd = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi');
        }
    };
    return Person;
}());
var user1;
// user1 = new Person("Precell");
user1 = new Person();
var user2 = new Person("Tungamirai");
console.log(user1);
user1.greet("Hey there greetings I am - ");
user2.greet("Hey there greetings I am - ");
