// old forloop is

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// variable বাহিরে দিয়ে ও করা যায়

// let i = 1;
// for(; i <=5; i++){
//     // console.log(i);
// }

// condition ভিতরে দিয়ে ও করা যায়

// let j = 1;
// for(; ; j++){
//     if(j <= 5){
//         // console.log(j);
//     }
// }
// console.log(i);

// for in শুধু মাত্র Object এর জন্য ===============
/* const myObj ={
    name: 'JavaScript',
    mobile: '01985511507',
    funder: 'Brendan Eich',
};

for(property in myObj){
    console.log(property + ' : ' +' ' + myObj[property]);
}; */

// for of এটা array এর জন্য =============

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 98]; // in দিলে index number দেখাবে আর of দিলে v number দেখাবে

var myArry = 'Amar sonar';
for(let show of myArry){
    console.log(show);
}