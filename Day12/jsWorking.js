// Javascript works in 2phase
// 1st memory creation phase
// 2nd code execution phase

console.log(fname); //undefined

var fname = "wolf";

console.log(fname); //wolf

add(); //adding

function add() {
  console.log("adding");
}

sub(); //typeerror

var sub = function () {
  console.log("sub");
};

console.log(age); //age is not defined
