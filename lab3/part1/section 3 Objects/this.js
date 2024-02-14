let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
user.sayHi(); // John



function sm(){
    let user = { name: "John" };
    let admin = { name: "Admin" };

    function sayHi() {
    alert( this.name );
    }

    // use the same function in two objects
    user.f = sayHi;
    admin.f = sayHi;

    // these calls have different this
    // "this" inside the function is the object "before the dot"
    user.f(); // John  (this == user)
    admin.f(); // Admin  (this == admin)

    admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
}


//task1
//undefined
function task1(){
    function makeUser() {
        return {
          name: "John",
          ref() {
            return this;
          }
        };
      }
      
      let user = makeUser();
      
    alert( user.ref().name ); // John
}

//task2
let calculator = {
    read(){
        this.val1 = +prompt("val1: ", '');
        this.val2 = +prompt("val2: ", '');
    },
    sum(){
        return this.val1 + this.val2;
    },

    mul(){
        return this.val1*this.val2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//task3
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };
  
ladder.up().up().down().showStep().down().showStep();