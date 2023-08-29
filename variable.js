// rabbil hasan ===================================





// variable ===============================

/* 
var names = "maruf bellah";
names = "maruf" // reassing করা বলে 
var names = "ayesha bellha"; // redecliare করা বলে 
// console.log(name);

let maruf = 'amar sonar bangla';
maruf = 'ami tomay valobahsi'; // reassing করা যায় , redecriaring করা যায় না 
// let maruf = 'eta kora jay na '
// console.log(maruf);

const ayesha = 'ayesha bellah';
// ayesh = 'hobe na ';
// const ayesha = 'hobe na '


*/


// variable scope =====================

// var maruf = 'amar sonar bangla'; //global scope 
function names(){
    var maruf = 'amar sonar bangla ami tomary valobashi'; // block scope or local scope
    // console.log(maruf); 
    return maruf;
}
names()
// console.log(maruf);