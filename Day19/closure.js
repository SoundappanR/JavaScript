// Closure --> Function that binds with parent element

function parentfn() {
  let age = 10;
  return function () {
    console.log("Age  :", age);
  };
}

let child = parentfn();
child(); //Age  : 10

// This function will give output only when it is called 3rd time
function parentfn1() {
  let count = 1;
  return function () {
    if (count % 3 == 0) {
      console.log("Wolf");
    }
    count += 1;
  };
}

let child1 = parentfn1();
child1();
child1();
child1(); //Wolf

// IIFE ---> Immediately invoke Function Exxpression
(function () {
  console.log("Sum");
})();

// Here output will be undefined because 5 is in the next line of return statement
function abc() {
  return;
  5;
}

console.log(abc());
