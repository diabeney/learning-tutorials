"use strict";
// You can explicitly set the default values like this and they can be of any type
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["DESIGNER"] = "DESIGNER";
    Role["ANALYST"] = "ANALYST";
})(Role || (Role = {}));
;
const userOne = {
    name: 'noobmaster',
    age: 22,
    hobbies: ['Cooking', 'video games'],
    role: Role.ADMIN
};
const userTwo = {
    name: 'raindropp',
    age: 19,
    hobbies: ['Coding', 'Cycling', 'Soccer'],
    role: Role.ADMIN
};
const userThree = {
    name: 'pietro',
    age: 21,
    hobbies: ['drawing', 'writing', 'painting'],
    role: Role.DESIGNER
};
// console.log(userOne.hobbies,userTwo.role)
// <------------------UNION TYPES --------------->
// Union types is used when we expect the code to work well with even more than one data types
function combine(a, b) {
    let result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + " " + b.toString();
    }
    return result;
}
// Type assertions
let setId = 5;
let managerId = setId;
managerId = 'diabene';
class Staff {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return console.log(`${this.name} registered successfully!`);
    }
}
class SeniorStaff extends Staff {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const diabene = new Staff(1, 'Addo Diabene');
// console.log(diabene.register())
const manager = new SeniorStaff(2, 'Steve Rogers', 'Senior Developer');
// console.log(manager.position)
// console.log(manager.register())
// Generics
function getArray(items) {
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Diabene', 'Yaw', 'Addo']);
numArray.push('hello');
