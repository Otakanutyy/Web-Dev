/*

\n	New line
\r	In Windows text files a combination of two characters \r\n represents a new break, 
while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
\', \", \`	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

*/

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList);

alert( `My\n`.length ); // 3


let str1 = `Hello`;
alert( str[-2] ); // undefined

let str = `Hello`;
// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H
// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );
//-1,-2 like python

//immutable so
let str2 = 'Hi';
str2 = 'h' + str2[1]; // replace the string
alert( str2 ); // hi

let str0 = 'Widget with id';
alert( str0.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str0.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str0.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

//some methods

//TASKS
//task1
function upperFirst(str){
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John

//task2
function checkSpam(str){
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//task3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

//task4
function extractCurrencyValue(str){
    return +str.slice(1);
}