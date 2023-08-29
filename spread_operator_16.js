// spread মানে সরিয়ে দেওয়া 

let numbers = [1,2,3];

// var newNumbers = [numbers[0] = 12, numbers[1] = 55, numbers[2] = 825241]; এটা এভাবে না করে spread operator দিয়ে করা যায় 

var a = [...numbers]; // exaxt copy of number 
console.log(a);
numbers.push(4)

var a = numbers;

var newNumbers2 = [...numbers, 4,5,6,7,8,9]
// console.log(a);




// concate ও করা যায় spread operator দিয়ে =====================

let numbers1 = [1,2,3,4];
let numbers2 = [4,6,5,7,8,9]

let showNumber = [...numbers1, ...numbers2];
// console.log(showNumber);

let myObj ={
    x: 5,
    y: 6
};

let myObj2 ={
    a : 40,
    b : 50
};

console.log({
    ...myObj2 , ...myObj
});


const poorCountry = ['Bangladesh', 'Srilanka', 'Vutan'];

const richeCountry =[...poorCountry,'America', 'Canada'];

richeCountry.push(poorCountry)
console.log(richeCountry);

