// Arrays --> []  --> It is a custom datatype(object datatype) it can hold any values like integer, string, boolean..etc

let nums = [1, 2, "Wolf", true, null];
console.log(nums);
console.log(nums[1]); // Index starts with 0
// Advantage of arrays -> Searching , Sorting
// Disadvantage of arrays -> Add , Delete

// Linear datastructure
// 1. Arrays
// 2. Linked List
// 3. Queues
// 4. Stack

// Advantage of arraylist -> Addition and deletion
// Disadvantage of arraylist -> Searching and sorting
// Linked list has only next value address so we cannot go backward

// Double Linked List
// It has both previous and next value address so we can go both ways.

// Stack
// Last in first out....First in last out

// Queue
// First in first out

let names = ["Wolf", "Tiger", "Devil", "Puma"];

console.log(names.length); //4

//For-Of Loop
for (let name of names) {
  console.log(name);
}

console.log(names[0], names[names.length - 1]);

//Push --> last insert
//Pop --> last delete
//Unshift --> first insert
//Shift --> first delete

// Add
let players = ["Sachin", "Virat"];
players.push("Rohit");
console.log(players);
players.pop();
console.log(players);
players.unshift("Bumrah");
console.log(players);
players.shift();
console.log(players);

//Concat 2 arrays
let a = [1, 2];
let b = [3, 4];
console.log(a + b); //Type will be string not array . If we use + it will change to String
console.log(a.concat(3)); //[1,2,3] and it will not modify a array
console.log(a); //[1,2]

//Fill
let nos = [1, 2, 3, 4];
console.log(nos.fill("0", 1), nos); // [ 1, '0', '0', '0' ] [ 1, '0', '0', '0' ]
// console.log(nos.fill("0", 1, 3), nos); // [ 1, '0', '0', 4 ] [ 1, '0', '0', 4 ]

console.log(players.includes("Sachin")); // True
console.log(players.includes("sachin")); // False

//Join
console.log(players.join("--"));

//revese
console.log(players.reverse());

//sort
console.log(players.sort()); //[ 'Sachin', 'Virat' ]

nos = [1, 4, 2, 6, 16, 20, 32, 3];
// console.log(nos.sort((a, b) => a - b)); // asc
// console.log(nos.sort((a, b) => b - a)); // desc

//slice
console.log(nos.slice(1, 3)); //[4,2]
