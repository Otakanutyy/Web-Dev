//task1
let someobj = {};

function A() { return someobj; }
function B() { return someobj; }

alert( new A() == new B() ); // true

//task2
function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
let calculator = new Calculator();
calculator.read();
  
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task3
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value +=  +prompt("Enter value: ", '');
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read(); //one more val

alert(accumulator.value);