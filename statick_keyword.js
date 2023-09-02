// without statick keyword property cunect (class object) not (direct class)

// class MyClass {
//   hello() {
//     console.log("hello world");
//   }
// }

// var obj = new MyClass()
// obj.hello()

// with statick keyword cunected (direct class )not (class object)

class MyClass {
  static hello() {
    console.log("hello world");
  }
}

MyClass.hello()