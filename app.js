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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Precell',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
var favoriteActivities;
favoriteActivities = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); ERROR!!!
}
console.log(person.name);
