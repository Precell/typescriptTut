// const person: {
//     name: string;
//     age:number;
// } = {
//     name: 'Precell',
//     age:26
// }

// const person: object = {
//     name: 'Precell',
//     age:26
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role:[number, string]
// } = {
//     name: 'Precell',
//     age:26,
//     hobbies:['sports', 'cooking'],
//     role: [2, 'author']
// }

// person.role.push('admin', 'cooker')
// person.role[1] = 10 ERROR!!!
// person.role = [0, 'admin'. 'user'] ERROR !!!


// Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;


// enum Role {ADMIN, READ_ONLY, AUTHOR}
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR}
enum Role {ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 300}


const person = {
    name: 'Precell',
    age:26,
    hobbies:['sports', 'cooking'],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN){
    console.log('is admin');
    
}

let favoriteActivities: string[]
favoriteActivities = ['sports']

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); ERROR!!!
    
}

console.log(person.name);
