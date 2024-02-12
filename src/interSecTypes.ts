/*
 * Intersection types allow us to combine other types
 */

// interface Admin {
//     name:string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee{}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Precell",
  privileges: ["create-vm"],
  startDate: new Date(),
};

console.log(e1);

// type ElevatedEmployee = Admin & Employee;

type Combineable = number | string;
type Numeric = number | boolean;
type Universal = Combineable & Numeric;

function add2(a: Combineable, b: Combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log("Driving.....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

console.log(v1);

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(23);
  }
}

useVehicle(v1);
useVehicle(v2);
// Discriminated Types
/**
 * it's a pattern you can use with union types that makes implementing type guards easier
 * it available when working with type objects
 */

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }

  console.log("Moving with speed " + speed);
}

moveAnimal({type: 'horse', runningSpeed: 321})

moveAnimal({type: 'bird', flyingSpeed:123})

// Type Casting
/*
 * Helps to tell TS that some value is of a specific type where TS is unable to detect the type on its own. 
*/

// const userInputElement = document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi There'
}

// userInputElement.value = 'Hi There MeloShack';

// console.log(userInputElement);

// INDEX TYPES

/*
 * A feature that allows us to create objects which are more flexible regarding the properties they have
*/

interface ErrorContainer { // {email: 'Not a valid email', username:'Must start with a character'}
  [prop:string] : string 
}


const errorBag:ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a character'
}


// OPTIONAL CHAINING ?


const fetchedData = {
  id: 'u1',
  name: 'Pontias',
  job:{title: 'CEO', description:'My own company'}
}


// console.log( fetchedData.job && fetchedData.job.title);
console.log(fetchedData?.job?.title);

// NULLISH COALESCING

const userData = undefined

const storedData = userData ?? "DEFAULT"

console.log(storedData);















