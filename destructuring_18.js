// destructuring মানে

// Object destructuring ===============================

const user = {
  id: 644,
  name: "Maruf",
  age: 20,
  education: {
    degree: "masters",
  },
};

// const show = user['name']; //  old verson
const { name: title } = user; // এখানে যে title আছে সেটাকে ইলিয়াস বলে / মানে (ঃ) এর পর যেটা থাকে তাকে ইলিয়াস বলে

const {
  education: { degree },
} = user;
// const {education: {degree} = {} } = user; যদি education না থাকে তাহলে undefined দিবে , তুমি error থেকে বাচতে পারলে

// console.log(degree);

// array  destructuring ===============================

var numbers = [1, 2, 3, [45, 58, 47], 4, 5, 6];
// var [a, b] = numbers;
var [, a, , , b] = numbers; // যেটা দরকার পরবে না সেটাকে , দিয়ে skip করবে
var [, , , [a, , b]] = numbers; // যেটা দরকার পরবে না সেটাকে , দিয়ে skip করবে এবং [] দিয়ে ভিতরে ধুকবে

// console.log(a, b);


// sowap করা যায় destruturing এর মাধ্যমে 
var a = 5;
var b = 8;

[b,a] = [a,b];
console.log(a, b);
