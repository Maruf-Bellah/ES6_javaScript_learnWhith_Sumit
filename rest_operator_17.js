function myFunc(...params){
    return params;
};
// console.log(myFunc(4,5,6,7,89));

function myFunc1(a, ...params){ // a এর জন্য ৪ কে পেরামিটার হিসেবে ধরবে 
    console.log(a); 
    return params;
};

/* function myFunc1(...params, a){ // a কে যদি rest peramiter/ operator এর পরে দেয় তাহলে error দিবে 
    console.log(a); 
    return params;
}; */
// console.log(myFunc1(4,5,6,7,8,98,));


function calculator(a, b, ...number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + i;
    }
    console.log(sum);
    return a* b;
};

let show = calculator(2,2,3,4,5,6,7,8,9);
console.log(show);
