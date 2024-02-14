let billion = 1000000000;
let billion1 = 1_000_000_000;
let billion2 = 1e9;
//multiply by 1andSome 0s

let mсs1 = 0.000_001;
let mcs2 = 1e-6;
//divide by 1andSome 0s



//
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
//
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert( a == b ); // true, the same number 255 at both sides


//
let num = 255;
//we can write base
alert( num.toString() ); //decimal 
alert( num.toString(16) );  // ff 
alert( num.toString(2) );   // 11111111

//toshorten
alert( 123456..toString(36) ); // 2n9c
//not one but two dots or like this
(123456).toString(36)

/*
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/

let numm = 12.34;
alert( numm.toFixed(1) ); // "12.3"

//infinit fraction problem
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3 as toFixed returns string

//NaN presents error
//isNaN(value) converts its argument to a number and then tests it for being NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
//its unique
alert( NaN === NaN ); // false

//isFinite(value) converts its argument to a number and returns true 
//if it’s a regular number, not NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

//Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. 
//They do not autoconvert their argument into a number, but check if it belongs to the number type instead.
alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true
// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

//isfinite same

//Object.is(a, b) a===b 
//Object.is(NaN, NaN) === true
//Object.is(0, -0) === false

//parseInt and parseFloat “read” a number from a string until they can’t.
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( parseInt('a123') ); // NaN, the first symbol stops the process

//optional second parameter
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456

Math.random()
//Returns a random number from 0 to 1 (not including 1).
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

//TASKS
//task1
let VAL1 = +prompt("first number: ", "");
let VAL2 = +prompt("second number: ", "");

alert( VAL1 + VAL2 );

//task2
//beacause of precision
//to fix alert( Math.round(6.35 * 10) / 10 ); 

//task3
function readNumber(){
    let k;
    while(!isFinite(k)){
        k = +prompt("Enter some number: ", '');
    }
    
    if (k === null || k === '') return null;
    
    return +k;
}

alert(`Your number is: ${readNumber()}`);

//task4
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
alert( random(1, 9) );
alert( random(1, 9) );
alert( random(1, 9) );

//task5
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

alert( randomInteger(1, 3) );

