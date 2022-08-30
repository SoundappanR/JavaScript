// CallBAck MEthods

// Filter --> used to filter existance value , return value should be boolean

let nums = [1, 2, 3, 4, 5];

console.log(
  nums.filter(function (num) {
    return num > 2; //[ 3, 4, 5 ]
  })
);

let names = ["Wolf", "Devil", "Tiger"];

console.log(
  names.filter(function (name) {
    return name.length > 4; //[ 'Devil', 'Tiger' ]
  })
);

// Map

console.log(
  nums.map(function (num) {
    //function(num , array , originalarray)--> 3 params are passed
    return num * num; //[ 1, 4, 9, 16, 25 ]
  })
);

// Reduce

console.log(
  nums.reduce(function (accumulator, current) {
    return accumulator + current; //15        // Here accumulator value is 0 initially
  })
);

console.log(
  nums.reduce(function (accumulator, current) {
    return accumulator + current; //25  // Here accumulator value is 10 initially
  }, 10)
);

//Every

console.log(
  nums.every(function (num) {
    return num < 10; // True... if all value < 10 it returns True
  })
);

//Some

console.log(
  nums.some(function (num) {
    return num > 3; // True... if any one value > 3 it returns True
  })
);

// Find

console.log(
  nums.find(function (num) {
    return num; // Find returns the value which passes the condition first here 1 passes the condition first
  })
);

// Flat

nums = [1, 2, 3, 4, [5, 6, 7, 8]];
console.log(nums.flat()); // [1,2,3,4,5,6,7,8] --> removes inner array by default if removes 1st level

nums = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]; // Here there are 3 levels of inner array
console.log(nums.flat(3)); //[1,2,3,4,5,6,7,8,9]

// Foreach

//--> does same operation as map but do not returns value

//slice

nums = [1, 2, 3, 4, 5];
//console.log(nums.slice(2, 3)); //3 ---> from index 2 and before index 3

//Splice

nums.splice(2, 0, 6); // --> 1st params reprs index, 2nd params reps count of delete value , 3rd reprs inserting value
console.log(nums);

console.log((12345).toLocaleString());
