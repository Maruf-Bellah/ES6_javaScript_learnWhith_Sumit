var numbers = [1,2,3,4,5,6,7,8,9,74];

var result = numbers.find(function (currentValue , currentIndex, arr) {
    return currentValue , currentIndex, arr;
});

var result = numbers.find(function (currentValue ) {
    return currentValue > 5;
});

// console.log(result);
// console.log(numbers);



// class Student{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     test(){
//         console.log('Hello');
//     }
//     exampleFunction(){
//         let array = [1,2,3];
//         array.find(function(){
//             this.test()
//         }, this)
//     }
// }
// let student = new Student('Maruf', 20);
// student.exampleFunction()


// uporer class ta arrow function diye lekhle ar this lage na ======================


class Student{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    test(){
        console.log('Hello');
    }
    exampleFunction(){
        let array = [1,2,3];
        array.find(() => {
            this.test()
        })
    }
}
let student = new Student('Maruf', 20);
student.exampleFunction()