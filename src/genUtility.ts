// Partial Utility types
/**
 * Utiloty tyoes are generic because they take some other value which is of any type and do something with it.
 * they set everything to optional
 * they lock what ever type, obj, str, arr 
 */
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title:string, description:string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date

    return courseGoal as CourseGoal;
}

const names1: Readonly<string[]> = ['Max', 'Sehlasie']
// names1.push('Manu')


// Genric types and Union Types

class Data1Storage {
    private data: (string | number | boolean)[] = [];
  
    addItem(item: string | number | boolean) {
      this.data.push(item);
    }
  
    removeItem(item: string | number | boolean) {
      if (this.data.indexOf(item) === -1) {
          return;
      }
      this.data.splice(this.data.indexOf(item), 1);
    }
  
    getItems() {
      return [...this.data];
    }
  }

  const text1Storage = new DataStorage();

  textStorage.addItem("Melody");
  textStorage.addItem("Miriam");
  textStorage.addItem("Tapuwwa");
  textStorage.addItem("Miriam");
  textStorage.addItem("Senzeni");
  textStorage.removeItem("Miriam");
  console.log(textStorage.getItems());
  
  const number1Storage = new DataStorage();

  /**
   * The difference btwn generic and union types:
   * union types is great when you want a function with one of the different types everytime you call it
   * generic types are great if you want to lock in a certain type, tou use the same type through out the entire Class instance you create or function
   *  generics are great for class or interface, where you don't know what type will come in but you do know that it will be something specific, 
   *  but in generics you can define what type that parameter should be each time you use the function
   *  You want union type when you are flexible to have a different type with every method call or every function call
   */




