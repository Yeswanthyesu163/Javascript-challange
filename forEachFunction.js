const names = ["Yeswanth", "Tharun", "Vignesh", "Gunal"];


// My Custom forEach function

const myForEach = (arr, callBack) => {
    for (let index = 0; index < arr.length; index++) {
        callBack(arr[index]);
    }
}

const printAwesome = (value) => console.log("My name is "+ value);

myForEach(names, printAwesome);