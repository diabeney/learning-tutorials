"use strict";
// <----------- Promises ---------->
const firstArray = [2, 4, 5, 7, 8, 23, 56, 43];
const secondArray = [1, 5, 6, 7, 9, 0, 7, 5, 4, 54, 56, 79, 74];
function filterer(value) {
    const result = value.filter((element) => element % 2 === 0 && element !== 0);
    // console.log(result)
}
const evenFilter = new Promise((resolve, reject) => {
    const spreadArray = (a, b) => {
        const result = [...a, ...b];
        return result;
    };
    const finalArray = spreadArray(firstArray, secondArray);
    resolve(finalArray);
})
    .then(value => { filterer(value); });
// Fetching Data 
