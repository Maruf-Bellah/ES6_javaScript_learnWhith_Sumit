/* function number(){
    return 10;
}

 */

// fat arrow function ==========================================

/* let number= () =>{
    return 10
} */

// let number = () => return 10; evabe lekhle error dibe ,return lekha lage na 



// eta k aro choto kora jay jodi return na lage ============



// let number2 = () => 10;
// console.log(number2());



//  evabe o lekha jay =====================

/* let number2 = () => console.log(10); 
number2()
 */


// kono peramiter k jodi return korte chaw ES6 e ebave hobe =============

/* function number(n) {
    return n;
}
// console.log(number(10));

var sum = number(100);
console.log(sum); */

/* 
let number = (n) => 10;
console.log(number()); */




// peramiter ekta thakle first bracket kete dite paro =======================

/* let number = n => 100;
console.log(number()); */



// jodi 2 ta peramiter thake tahole obossoi first bracket dite hobe =======

/* let number = (a , b ) => a + b ;
console.log(number(5 , 6));
let number2 = number(5, 8)
console.log(number2); */





// multiple line o lekhte parbo ==========================

/* let number = (a, b) =>{
    // ei jay onno kaj kora jabe 
    return a + b;
}
console.log(number(9, 8)); */


//  evabe koara jay tobe evabe kora jabe na =================


/* 
var javascript ={
    name: "javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function(){
        var self = this;
        this.libraries.forEach(function(a){
            console.log(`${self.name} loves ${a}`);
        })
    }
};

javascript.printLibraries() */


// evabe tumi korte paro karon arrow function this k hat day na . mane this lage na arrow function er moddhe 


/* var javascript ={
    name : "javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function(){
        this.libraries.forEach((a) => {console.log(`${this.name} loves ${a}`)})
    },

    };

    javascript.printLibraries() */

    // new keyword in fat arrow function 

/*     function Person(name){
        this.name = name
    };

    var sakib = new Person("Sakib")
    console.log(sakib); */


    // eta jodi tumi arrow function e convert koro tahole error dibe 

    // var Person = (name) => {
    //    return this.name ="Maruf" ;
    // };
    // // var sakib = new Person("Sakib");
    // console.log(Person());

    





    // =====================================================================
    // Rabbil hasan ===========
    // =====================================================================

    // Dynamic Function বলতে বুঝায় যে function কে আমরা একটা variable এর মধ্যে রাখি ======
    // যে function লেখার সময় function constractor use করে লেখবো এবং সেই function এর কোন নাম থাকবে না তাকে dynamic function বলে 

    var dynamicFunction = function(name){
        return name;
    }
    console.log('Rabbil Hasan');