/* eslint-disable @typescript-eslint/no-unused-vars */
// Core Types {number,string,boolean,object,array,tuple,enum}
//type aliases
type Requirements = {
    name: string;
    readonly age: number;
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
// console.log(userOne.hobbies,userTwo.role)

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




// Type assertions

let setId: any =  5;
let managerId = setId as string;

managerId = 'diabene'


// Classes

interface WorkerRequirement {
    id: number | string
    name: string
}

class Staff implements WorkerRequirement { 
    id: number
    name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    
  }

  register() {
    return console.log(`${this.name} registered successfully!`)
  }

}

class SeniorStaff extends Staff {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id,name)
        this.position = position
    }
}

const diabene = new Staff(1,'Addo Diabene');
// console.log(diabene.register())

const manager = new SeniorStaff(2,'Steve Rogers','Senior Developer')

// console.log(manager.position)
// console.log(manager.register())



// Generics

function getArray<T>(items: T[]): T[] {
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Diabene','Yaw', 'Addo'])

