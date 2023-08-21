// array.property.findIndex()

// কোন একটা array এর মধ্যে কি ঐ Element টা আছে ? সেটা true / false জানার জন্যে findIndex() use করি 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, index, arr) =>{
    return currentValue % 7 ;
}, this);

console.log(result);