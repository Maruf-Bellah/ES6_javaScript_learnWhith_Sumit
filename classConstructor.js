// class User{
//     constructor(){
//         this.email = 'marufBellah@gmail.com';
//         this.name = 'Maruf Bellah',
//         this.age = 20
//     }
// };

// let userOne = new User();
class User{
    constructor(email, name, age){
        this.email = email;
        this.name = name;
        this.age = age;
    }
};

let userOne = new User('maruf@gmail.com','Maruf Belah', 20);
let userTwo = new User('ayesh@gmail.com','Ayesha Belah', 18);
console.log(userOne, userTwo);