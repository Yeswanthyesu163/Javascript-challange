const numbers = [1,2,3,4,5,6];

// My Custom reduce Function

const myReduce = (arr, callBack) => {
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        result = callBack(arr[index], result);
    }
    return result;
}

const addUp = (num1, num2) => num1+num2;

const sumOfNumbers = myReduce(numbers, addUp);
console.log(sumOfNumbers);