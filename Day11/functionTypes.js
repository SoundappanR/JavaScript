// Function Types

//Function declaration
function Logger() {
  console.log("logging");
}
Logger();

//Function expression --> Anonymous Function
let log = function () {
  console.log("Logging");
};
log();

// We can able to pass function as the Parameter.
// We can able to return function as a return type.

function Operation(num1, num2, callbackfn) {
  callbackfn(num1, num2);
}

Operation(10, 15, function (num1, num2) {
  console.log(num1 + num2);
});

function add(num1, num2) {
  console.log(num1 + num2);
}

Operation(10, 15, add);

// console.log(fname); //Undefined
// var fname = "Wolf";

// console.log(age); // Error -> Cannot access age before initialization
// let age = 23;

// console.log(dob); // Error -> Cannot access age before initialization
// const dob = "05/07/1999";

// Clock Methods --> Callback functions

setTimeout(function () {
  console.log("Helloo");
}, 2000); // Gives Output Helloo after 2 secs

// setInterval(function () {
//   console.log("Helloo");
// }, 2000); // Gives Output Helloo after every 2 secs...runs continuously

console.log(Date()); //Mon Aug 22 2022 06:46:51 GMT+0530 (India Standard Time)
