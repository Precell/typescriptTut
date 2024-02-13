class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
        return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Melody");
textStorage.addItem("Miriam");
textStorage.addItem("Tapuwwa");
textStorage.addItem("Miriam");
textStorage.addItem("Senzeni");
textStorage.removeItem("Miriam");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(12)
numberStorage.addItem(3)
numberStorage.addItem(2)
numberStorage.addItem(23)
numberStorage.removeItem(84)
console.log(numberStorage.getItems());


// const objStorage = new DataStorage<object>();
// const objseh = {name: 'Sehlasie'}
// objStorage.addItem({name:'Sehlasie'})
// objStorage.addItem({name:'Khago'})
// objStorage.addItem({name:'Khelo'})
// // ....

// objStorage.removeItem(objseh)
// console.log(objStorage.getItems());



















