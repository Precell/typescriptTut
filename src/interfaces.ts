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

// * INTERFACES CAN ALSO BE USED TO DEFINE STRUCTURE OF A FUNCTION as a replacement of the function type

// type addfun = (a: number, b:number) => number;
interface addfun {
  (a: number, b: number): number;
}

let aadd: addfun;

aadd = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    }else{
      console.log('Hi');
      
    }
  }
}

let user1: Person;
// user1 = new Person("Precell");
user1 = new Person();

let user2 = new Person("Tungamirai");
console.log(user1);

user1.greet("Hey there greetings I am - ");
user2.greet("Hey there greetings I am - ");
