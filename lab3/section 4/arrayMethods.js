//splice to delete and add
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
//to insert
arr.splice(2, 0, "complex", "language");

arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5

//copy
arr = ["t", "e", "s", "t"];
//doesn't include end
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
//doesn't include typo begin
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

//some methods

//TASKS
//task1
function camelize(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

//task2
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
  
arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);  
alert( filtered );
alert( arr );

//task3
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
  
arr = [5, 3, 8, 1];  
filterRangeInPlace(arr, 1, 4);
alert( arr );

//task4
arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );

//task5
function copySorted(arr) {
    return arr.slice().sort();
}

arr = ["HTML", "JavaScript", "CSS"];  
let sorted = copySorted(arr);
  
alert( sorted );
alert( arr );

//task6
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

//task7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names );

//task8
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id )
alert( usersMapped[0].fullName )

//task9
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
  
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [ pete, john, mary ];
  
sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

//task10
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

arr = [1, 2, 3];
shuffle(arr);

//task11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };
arr = [ john, pete, mary ];
  
alert( getAverageAge(arr) );

//task12
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(strings) );

//task13
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}