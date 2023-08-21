var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((prevValue, currenValue, currentIndex, arr) =>{
    return prevValue + currenValue;
},10)
console.log(sum);