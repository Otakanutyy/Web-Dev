let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

user["likes birds"]; //like this

let newway = "likes birds";
user[newway]; //

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
 // let user = makeUser("John", 30);
  alert(user.name); // John

  // for an object property, there’s no such restriction
  //language-reserved words like “for”, “let”, “return” etc. can be used to name properties

  let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // will ignore value 5


//how are properties stored in object?
//integer properties are sorted, others appear in creation order.

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

//TASKS

function task1(){
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
}


function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
alert(sum);


function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}

/*
my practice

'use strict'
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag[fruit]); // 5 if fruit="apple"

function spawnGrant(name, clan){
    return{
        name,
        clan
    }
}

let ogr = {
    name:"John",
    clan:"BlackWolf",
    "Loctar ogar": true
};

let smvar = "Loctar ogar";

alert(ogr[smvar]);
alert(ogr["Loctar ogar"]);

let Storm = spawnGrant("Storm", "steppeSons");
alert(Storm.clan);

let obj = {};
obj.__pro = 5; // assign a number
alert(obj.__pro);

alert("__pro" in obj)

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

let codes = {
  "49.0": "Germany",
  "41.0": "Switzerland",
  "44.0": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
*/