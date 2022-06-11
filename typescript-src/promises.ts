// <----------- Promises ---------->

const firstArray = [2,4,5,7,8,23,56,43];
const secondArray = [1,5,6,7,9,0,7,5,4,54,56,79,74];

function filterer(value: any) {
    const result = value.filter((element: number) => element % 2 === 0 && element !== 0);
    // console.log(result)
}

const evenFilter = new Promise((resolve: any,reject: any) => {
    const spreadArray = (a: number[],b: number[]) => {
        const result = [...a,...b]
        return result;
    }

    const finalArray = spreadArray(firstArray,secondArray);
    
        resolve(finalArray)
})
.then(value => {filterer(value)})


// Fetching Data 



