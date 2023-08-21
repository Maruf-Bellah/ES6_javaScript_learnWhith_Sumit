const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// Normal function that works perfectly 

function show(){
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function (){
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 100);
}

// this eta shuro normal function er jnno arrow function this buje na 




// eta evabe hobe na eta korte hole normal function diye korte hobe 
/* searchInput.addEventListener("keyup",() =>{
    // console.log(this);
    display.innerHTML = this.value;

}); */