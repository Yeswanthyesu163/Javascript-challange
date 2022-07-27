const numbers = [1,2,3,4];

// My Custom map Function
const myMap = (arr, callBack) => {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        result[index] = callBack(arr[index]);
    }
    return result;
}

const double = (number) => number * 2;

const doubleOfNumbers = myMap(numbers, double);
console.log(doubleOfNumbers);