// splice হলো সে তার আগের array কে পরিবর্তন করে 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.splice(-1,3, 55, 62,89,617) //এভাবে দিলে যে কয়টা splice করা হয়েছে সেখানে এই মান গুলি বসে যাবে

var result = numbers.splice(1,3)

console.log(result);
console.log(numbers);
