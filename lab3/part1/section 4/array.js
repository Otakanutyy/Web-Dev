//let arr = new Array();
let arr0 = [];

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3
alert( fruits );


// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello

alert( fruits[fruits.length-1] );
alert( fruits.at(-1) ); //same

alert( fruits.pop() );
fruits.push("Pear");

fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
fruits.unshift('Apple');//add element

//same as object by copied reference


fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}


arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

//TASKS
//task1
fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4

//task2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
//
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//task3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // loop

//task4
function sumInput() {
    let numbers = [];

    while (true) {
      let value = prompt("Number: ", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
  
alert( sumInput() );

//task5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
}
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0