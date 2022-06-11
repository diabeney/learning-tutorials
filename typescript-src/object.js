// Core Types {number,string,boolean,object,array,tuple,enum}
// You can explicitly set the default values like this and they can be of any type
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["DESIGNER"] = "DESIGNER";
    Role["ANALYST"] = "ANALYST";
})(Role || (Role = {}));
;
var userOne = {
    name: 'noobmaster',
    age: 22,
    hobbies: ['Cooking', 'video games'],
    role: Role.ADMIN
};
var userTwo = {
    name: 'raindrop',
    age: 19,
    hobbies: ['Coding', 'Cycling', 'Soccer'],
    role: Role.ADMIN
};
var userThree = {
    name: 'pietro',
    age: 21,
    hobbies: ['drawing', 'writing', 'painting'],
    role: Role.DESIGNER
};
console.log(userOne.hobbies, userTwo.role);
// <------------------UNION TYPES --------------->
// Union types is used when we expect the code to work well with even more than one data types
function combine(a, b) {
    var result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + " " + b.toString();
    }
    return result;
}
var combinedNumbers = combine(3, 73);
var combinedNames = combine('Diabene', 'Addo');
var combinedMixed = combine('Energy', 404);
console.log(combinedNumbers);
console.log(combinedNames);
console.log(combinedMixed);
