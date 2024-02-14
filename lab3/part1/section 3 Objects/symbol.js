/*
By specification, only two primitive types may serve as object property keys:
string type, or symbol type.

Otherwise, if one uses another type, such as number, it’s autoconverted to string. 
So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

//they don't autoconvert to string
let id3 = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id4 = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

let id5 = Symbol("id");
alert(id.description); // id description only



// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
// the same symbol
alert( id === idAgain ); // true


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


