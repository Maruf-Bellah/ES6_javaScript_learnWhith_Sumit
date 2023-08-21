// map method টা পুরা array টা কে change করে অন্য একটা array return করে , তবে পুর্বের array ঠিক থাকে 

var numbers = [1,2,3,4,5,6,7,8,9];

var result= numbers.map((value , index, arr)=>{
    return value * 2;
    // console.log(value);
    // console.log(index);
    // console.log(arr);
});
console.log(result);
console.log(numbers);