// Core Types {number,string,boolean,object,array,tuple,enum}
//type aliases
type Requirements = {
    name: string;
    age: number;
    hobbies: string[];
    role: any
}
// You can explicitly set the default values like this and they can be of any type
enum Role {ADMIN = 'ADMIN',DESIGNER = 'DESIGNER',ANALYST = 'ANALYST'};


const userOne: Requirements = {
    name : 'noobmaster',
    age: 22,
    hobbies: ['Cooking','video games'],
    role: Role.ADMIN
}

const userTwo: Requirements = {
    name : 'raindropp',
    age: 19,
    hobbies: ['Coding','Cycling','Soccer'],
    role: Role.ADMIN
}


const userThree: Requirements = {
    name : 'pietro',
    age: 21,
    hobbies: ['drawing','writing','painting'],
    role: Role.DESIGNER
}
console.log(userOne.hobbies,userTwo.role)

// <------------------UNION TYPES --------------->
// Union types is used when we expect the code to work well with even more than one data types

function combine(a: number | string, b: number | string) {
    let result;
    if(typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }else {
        result = a.toString() +" "+ b.toString()
    }
    return result;
}


const combinedNumbers = combine(3,73);
const combinedNames = combine('Diabene','Addo');
const combinedMixed = combine('Energy',404);
