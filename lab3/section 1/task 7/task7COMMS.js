//basic math
//+ for string concatenation
//if one is string another is converted to

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

//ONLY FOR + OTHER OPERATORS CONVERT TO NUMBERS

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
// But if the operand is not a number, the unary plus converts it into a number.
//ТИПО 5 ЭТО СТРИНГ А +5 НАМБЕР
//EXAMPLE OF USING:
    let apples = "2";
    let oranges = "3";

    // // both values converted to numbers before the binary plus
    alert( +apples + +oranges ); // 5

//CHANING ASS-S
let a, b, c;

a = b = c = 2 + 2;

//PREFIX AND POSTFIX

let Sounter = 1;
let G = ++counter; // (*)
alert(a); // 2


let Sounter1 = 1;
let G1 = counter++; // (*) changed ++counter to counter++
alert(a); // 1


// Here, the first expression 1 + 2 is evaluated and its result is thrown away. 
// Then, 3 + 4 is evaluated and returned as the result.
let L = (1 + 2, 3 + 4);
alert( L ); // 7 (the result of 3 + 4)
// Please note that the comma operator has very low precedence, lower than =, 
// so parentheses are important in the example above.

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    // ..;
}