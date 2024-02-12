//string conv
// output
alert(obj);
// using object as a property key
anotherObj[obj] = 123;

//num
// explicit conversion
let num = Number(obj);
// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;
// less/greater comparison
let greater = user1 > user2;

//default
// binary plus uses the "default" hint
let total = obj1 + obj2;
// obj == number uses the "default" hint
if (user == 1) { /*...*/ };

