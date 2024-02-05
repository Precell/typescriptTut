// let userInput: unknown;
// let userName: string;

// userInput = 4;
// userInput = 'Selahsie';

// if (typeof userInput === 'string') {
//     userName = userInput 
// }

// function generateErro(message:string, code:number) {
//     throw {message:message, errorCode: code};
// }


// generateErro("Error occured", 200)
    

// function addNums(n1:number, n2:number) {
//     if (n1 + n2 > 0) {
//         return n1 + n2
//     }
//     return;
// }


// function add(a:number, b:number){
//     let result;
//     result = a + b
//     return result;
// }


// const add = (a:number, b:number)=>{
//     return a+b
// }

// const adda = (a:number, b:number = 1) => a + b;

// const printOutput:(a: number | string) => void = output => console.log(output);

// console.log(adda(2));


const button1 = document.querySelector('button');

if(button1){
    button1.addEventListener('click', event => console.log(event))
}


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// const activeHobbies = ['Hiking', ...hobbies];


// ARRAY DESTRUCTURING

// const hobbie1 = hobbies[0]
// const hobbie2 = hobbies[1]

const [ ...remainingHobbies] = hobbies

console.log(remainingHobbies, 'remaining hobbies');




// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push(...hobbies)

const person1 = {
    name: "Precell",
    age: 26
}

const copiedPerson = { ...person1 }

// OBJECT DESTRUCTURING

const newPerson = {
    fname:"Suzan",
    age:47,
    address:"2343 Harare drive"
}

const {fname:userName, age, address} = newPerson

console.log(userName, age, address);


const add = (...numbers: number[]) => {
// const add = (...numbers: [number, number, number]) => { ****__When working with Tuples__****
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addedNumbers = add(1,2,4,23)
// const addedNumbers = add(1,2,4)                          ****__When working with Tuples__****

console.log(addedNumbers);














