const numbers = [1,2,3,4,5,6,7,8,9,10,11];

// My Custom filter Function

const myFilter = (arr, callBack) => {
    let updatedArr = [];
    let temp = 0;
    for (let index = 0; index < arr.length; index++) {
        if(callBack(arr[index])) {
            updatedArr[temp++] = arr[index];
        }
    }
    return updatedArr;
}

const findEven = (number) => number % 2 === 0;

const evenNumbers = myFilter(numbers, findEven);
console.log(evenNumbers);