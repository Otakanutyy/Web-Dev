const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
alert(user.name); // Pete

//only reference is const


//cloning
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
//first obj is dest and other are sources

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true



let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  
alert(clone.name); // John
alert(clone.age); // 30


//smt we have object as an property
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone1 = structuredClone(user);
  
  alert( user.sizes === clone1.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
alert(clone1.sizes.width); // 50, not related

//deepclone if function as property