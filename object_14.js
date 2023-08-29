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


// console.log(myObj.name);

var billGates = {sirt:true, shirtColor: 'offWhite', smile: true, swatter: true, swatterColor: 'gay'};


var billGatesPro ={
  sirt: {
    color: 'offWhite',
    quality:'Good',
    price: '200 USD'
  },
  swatter:{
    color: 'Gray',
    quality: 'Good',
    price: '200USD',
    warm: 'best',
    another: {
      name: 'Maruf',
      age: 20,
      distric: 'Dhaka'
    }
  },
  face:{
    smiling: 'yes',
    chosma: 'yes',
    teeth: "White, big"
  }
};

// console.log(billGates['shirtColor']);
// console.log(billGates.swatter);

console.log(billGatesPro['swatter']['another']['name']);// এভাবে একটার মধ্যে আরেকটা object এর value নেওয়া যায় 