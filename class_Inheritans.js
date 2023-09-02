class parent{

    hello1(){
        console.log("Hello 1 function");
    }
    hello2(){
        console.log("Hello 2 function");
    }
    hello3(){
        console.log("Hello 3 function");
    }
}
class child extends parent {

   /*  hello3(){
        console.log("Hello 3 function Hello 3 function");
        // cheler khomota babar khomota theke ektu beshi karon baba jokhon bura hoye jay tokhon chele jai bole babar ta shunte jai 
    } */

    demo(){
        super.hello1();
        super.hello2()
    }

}

var obj = new child();
// var obj = new parent();
// obj.hello1()
// obj.hello2()
// obj.hello3()

obj.demo()