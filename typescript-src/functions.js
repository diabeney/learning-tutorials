// <----- Void Type ------------> 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(input1, input2) {
    return input1 + input2;
}
function printResult(num) {
    console.log('Result is: ' + num);
}
// the printResult function does not have a return value but a default type called void
var combineValues;
combineValues = add;
console.log(combineValues(23, 6));
// <----- Callbacks ----------> 
var firstArray = [2, 4, 5, 7, 8, 23, 56, 43];
var secondArray = [1, 5, 6, 7, 9, 0, 7, 5, 4, 54, 56, 79, 74];
function evenNumbersFilter(a, b, callback) {
    var joinedArray = __spreadArray(__spreadArray([], a, true), b, true);
    callback(joinedArray);
}
evenNumbersFilter(firstArray, secondArray, function (arr) {
    var filteredArray = arr.filter(function (element) { return element % 2 == 0 && element !== 0; });
    console.log(filteredArray);
    return filteredArray;
});
