// A generic type is a type which is kinda
/* of connected to other types an is flexible regarding which exact type that type is
*/

const names: Array<string> = []
// names[0].split(' ')

const promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is Done')
    }, 2000)
})

promise.then(data => data.split(' '))


function merge<T extends object, U extends object>(objA:T, objB: U) {
    return Object.assign(objA, objB)
}


const myobj = merge<{name: string, hobbies: string[]}, {age:number}>({name:'Precell', hobbies: ['sports', 'music', 'xaines']}, {age:26})
const myobj2 = merge({name:'Precell', hobbies: ['sports', 'music', 'xaines']}, {age:26})
console.log(myobj, myobj2);


interface lengthy {
    length: number
}

function countAndDesribe<T extends lengthy>(element: T):[T, string]{
    let descriptionText = "Got no value.";
    if (element.length === 0) {
        descriptionText = 'Got 1 element'
    }else{
        descriptionText = `Got ${element.length} elements.`
    }
    return [element, descriptionText]
}

console.log(countAndDesribe("Hi There why aren't you answering my call?"));
console.log(countAndDesribe(['warri','Do', 'pull', 'up' ]));


// key of constraint

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key: U){
    return 'Value ' + obj[key]
}

extractAndConvert({name: 'Precell'}, 'name')



















