// কিছু sort ভাবে লেখলে এভাবে লেখা যায় 

var x = 5;
var y = 5;
var z = x * y;

var myObj = {
  name: "JavaScript",
  founder: "Brendan Eich",
  estd: "1995",
  ranking: 1,
  y,
  x,
  z
};

var key = Object.keys(myObj); // একটা array return করে
var vlaue = Object.values(myObj); // একটা array return করে
var entrie = Object.entries(myObj); // একটা array দেয় এবং প্রতিটি element কে একটা array এর সাথে return করে

// console.log(key);
// console.log(vlaue);
// console.log(entrie);


console.log(myObj);