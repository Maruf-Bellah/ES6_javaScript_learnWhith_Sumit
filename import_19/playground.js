// import {pi, maruf} from './external.js'; // named import / কোন কিছু নিতে গেলে এভাবে লিখবে 
// import {pi as bellah, maruf as ayesha} from './external.js'; // named import / কোন কিছু নিতে গেলে এভাবে লিখবে  এভাবে লেখা যায় 

// import * as test from './external.js'; // আর সব কিছু নিতে গেলে এভাবে লিখবে এবং as test এটাকে বলে এলিয়াজ 



// default ভাবে করতে চাইলে এভাবে করবে ============
// import  external, {maruf, pi} from './external.js'

// console.log(maruf, pi);

// external()

import {pi} from './external.js'
console.log(pi);