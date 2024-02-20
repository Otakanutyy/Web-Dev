


//TASK 8

//A strict equality operator === checks the equality without type conversion.
//alert( null === undefined ); // false
//alert( null == undefined ); // true
/*
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

*/

/*

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, 
they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

*/


5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false




//TASK 9
//The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
let accessAllowed = (age > 18) ? val1/* if true*/ : val2 /*if false */;
//can be done without parentheses

/*
if-else like

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

*/


if ("0") {
    alert( 'Hello' );
}    //true

(prompt('What is the "official" name of JavaScript', '')=="ECMAScript") ? alert("Right!") : alert('You do not know? "ECMAScript"');

let number = prompt('Type a number', 0);

if (number > 0) {
  alert( 1 );
} else if (number < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


//TASK 10
  alert( null || 2 || undefined );  //2

  alert( alert(1) || 2 || alert(3) ); // 1, 2

  alert(1 && null && 2); //null

  alert( alert(1) && alert(2) ); //1, undefined

  alert( null || 2 && 3 || 4 ); //3

  if (age >= 14 && age <= 90);

  if (!(age >= 14 && age <= 90));

  if (-1 || 0) alert( 'first' );//-1 -> true
if (-1 && 0) alert( 'second' );//0 -> false
if (null || -1 && 1) alert( 'third' );//1 -> true

let username = prompt("Who's there?", '');


if(username === '' || username === null){
  alert("Canceled")
}
else if (username == "Admin"){
  let password1 = prompt("Password?", '')

  if(password1 === '' || password1 === null){
    alert("Canceled");
  }
  else if(password1=="TheMaster"){
    alert("Welcome!")
  }
  else{
    alert("Wrong password")
  }
}
else{
  alert("I don't know you")
}


// let user;
// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

/*
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder like using OR
*/

// let x = 1 && 2 ?? 3; // Syntax error as precedence is not clear


// can be done like this
/*
do {
  // loop body
} while (condition);
*/

//just like c++
//for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//alert(i);
//}

//we can skip some of condition's parts

//(i > 5) ? alert(i) : continue; // continue isn't allowed here

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');


//TASK 11


function smtask(){
let i = 3;

while (i) {
  alert( i-- );
}  //1
}


let i3 = 0;
while (++i3 < 5) alert( i3 ); 
//1 TO 4

let i2 = 0;
while (i2++ < 5) alert( i2 );//1 TO 5

for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
//both 0 to 4


for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}


let i1 = 0;
while (i1 < 3) {
  alert( `number ${i1}!` );
  i1++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);



function isPrime(number1) {
  if (number1 < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number1); i++) {
    if (number1 % i === 0) {
      return false;
    }
  }

  return true;
}

// Usage
const number1 = 17;
console.log(`${number1} is prime:`, isPrime(number1));


//switch strict types
switch(x){
  case 'val1': 
    x = 5;
    break
  case 'val2':
    x=6;
    break;

  case 'val3': //grouped cases
  case 'val4':
    alert('dsfd');
    break;
  default:
    alert(smth);
}


//TASK 12

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox'
 || browser == 'Safari' || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//FUNCTIONS

function smmname(){
  alert('this is smname');
}


//default value for text
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

//text = text || 'empty';

//no lines between return and value as java thinks there is a semicolon
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

//TASK 13
//no both are executed only if false

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
  return (a < b) ? a : b;
}



function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("number?", '');
let n = prompt("power?", '');

if (n < 1) {
  alert(`Use a positive integer`);
} else {
  alert( pow(x, n) );
}

//functions expressions

//arrow functions


//TASK 14
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

//we can send function

//arrow version
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

