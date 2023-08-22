// কোন কিছুর আগে যে মিস্টার বা অন্য কিছু বসার জন্য যেটা করা হয় তাকে tagged-template literal বলে 

function modifier(strings, ...values){

    const m = strings.reduce((prev, current) =>{
        return prev + current +(values.length ? "Mr. " + values.shift() : "")
    }, ' ')
    return m;
    // console.log(strings);
    // console.log(values);
}

// myFunc()

var player1 = 'Maruf';
var player2 = 'Bellah';

console.log(modifier`I have ${player1} and ${player2}`);

// console.log(modifier);