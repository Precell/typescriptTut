"use strict";
/*
 * Intersection types allow us to combine other types
 */
var _a;
var e1 = {
    name: "Precell",
    privileges: ["create-vm"],
    startDate: new Date(),
};
console.log(e1);
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date " + emp.startDate);
    }
}
printEmployeeInfo(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving.....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
console.log(v1);
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(23);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving with speed " + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 321 });
moveAnimal({ type: 'bird', flyingSpeed: 123 });
// Type Casting
/*
 * Helps to tell TS that some value is of a specific type where TS is unable to detect the type on its own.
*/
// const userInputElement = document.getElementById('user-input')!;
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi There';
}
var errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a character'
};
// OPTIONAL CHAINING ?
var fetchedData = {
    id: 'u1',
    name: 'Pontias',
    job: { title: 'CEO', description: 'My own company' }
};
// console.log( fetchedData.job && fetchedData.job.title);
console.log((_a = fetchedData === null || fetchedData === void 0 ? void 0 : fetchedData.job) === null || _a === void 0 ? void 0 : _a.title);
// NULLISH COALESCING
var userData = undefined;
var storedData = userData !== null && userData !== void 0 ? userData : "DEFAULT";
console.log(storedData);
