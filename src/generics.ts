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


function merge<T, U>(objA:T, objB: U) {
    return Object.assign(objA, objB)
}


const myobj = merge<{name: string, hobbies: string[]}, {age:number}>({name:'Precell', hobbies: ['sports', 'music', 'xaines']}, {age:26})
const myobj2 = merge({name:'Precell', hobbies: ['sports', 'music', 'xaines']}, {age:26})
console.log(myobj, myobj2);


