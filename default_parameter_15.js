/* 
function myFunction(x){
    return x
};
console.log(myFunction(65)); 
*/

function myFunction( x = 10){
    return x;
};
console.log(myFunction(undefined)); // undefined দিলে ১০ return করবে
console.log(myFunction(null)); // null দিলে null যেহেতু একটা value তাই null return করবে