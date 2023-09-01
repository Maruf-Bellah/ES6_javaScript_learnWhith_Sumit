// map is a collection of data 
// kye and value মিলে বলে key value pairing  (pairing মানে জোড় )

var map = new Map();

map.set('key1', 'Bangladesh'); //এটা কে বলে pairing ('key1', 'Bangladesh')
map.set('key2', 'India');
map.set('key3', 'Canada');
map.set('key4', 'America');
map.set('key5', 'Bhutan');
map.set('key6', 'Mayanmar');

// console.log(map.keys());
// console.log(map.values());

// for(let value of map.keys()){
//     console.log(value);

// map.delete('key1') //এটা দিয়ে delete করে 
// map.clear()  এটা দিয়ে সব কিছু ক্লিয়ার করে 
console.log(map.get('key5') );// এটা দিয়ে ভ্যালু আছে কিনা সেটা বের করে 
console.log(map.has('key1') );// এটা দিয়ে ভ্যালু আছে কিনা সেটা দেখে যদি থাকে তাহলে true দেখাবে আর না হলে false দেখাবে 

// map.clear()  এটা দিয়ে সব কিছু ক্লিয়ার করে 

// for(let value of map.values()){
//     console.log(value);
// }