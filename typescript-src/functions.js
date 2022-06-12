"use strict";
// <----- Void Type ------------> 
function add(input1, input2) {
    return input1 + input2;
}
function printResult(num) {
    console.log('Result is: ' + num);
}
// the printResult function does not have a return value but a default type called void
let combineValues;
combineValues = add;
console.log(combineValues(23, 6));
// <----- Callbacks ----------> 
const firstArray = [2, 4, 5, 7, 8, 23, 56, 43];
const secondArray = [1, 5, 6, 7, 9, 0, 7, 5, 4, 54, 56, 79, 74];
function evenNumbersFilter(a, b, callback) {
    const joinedArray = [...a, ...b];
    callback(joinedArray);
}
evenNumbersFilter(firstArray, secondArray, (arr) => {
    const filteredArray = arr.filter((element) => element % 2 == 0 && element !== 0);
    console.log(filteredArray);
    return filteredArray;
});
