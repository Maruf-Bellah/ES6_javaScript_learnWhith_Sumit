// copywihtin হলো array মাঝখানের কোন একটা Element কে কপি করে অন্য Element এর জায়গায় বসানো 

/* 
1= target is required
2= start defaults to 0
3= end defaults to Array.length
4= never changes Array.length
5= overwrites original array 
6= return modifier array
 */

let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(6, 1,2);
// a.copyWithin(5, 1,2);
// a.copyWithin(4);
a.copyWithin(-3,-1,-3);
console.log(a);