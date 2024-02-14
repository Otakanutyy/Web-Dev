// alert(1/0);
/*
So, if there’s a NaN somewhere in a mathematical expression,
 it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
*/
// A BigInt value is created by appending n to the end of an integer:
const bigInt = 1234567890123456789012345678901234567890n;


// //"" '' same; ${} “extended functionality” quotes.
// let name = "John";

// // embed a variable
// alert( `Hello,` + name  ); // Hello, John!

// // embed an expression
// alert( `the result is ${1+5}` ); // the result is

//(typeof) some var


let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` );