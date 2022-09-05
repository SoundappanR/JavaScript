let age = new Number(10);
console.log(age); //[Number: 10]

let fname = new String("WoLf");
console.log(fname); //[String: 'WoLf']

let parent = {
  fname: "Hunting",
  age: 2,
};

let child = {
  fname: "Wolf",
};

child.__proto__ = parent; // parent object is assigned to child
console.log(child.age);

console.log(Object.hasOwn(parent, "fname")); // true -- > returns true or false

Object.freeze(parent); // Value wont be changed

function add(n1, n2) {
  console.log(arguments);
}
add(1, 2);

let val = [11, 2, 3, [4, 5], [6, 7], "Wolf"];

for (let value of val) {
  if (Array.isArray(value)) {
    console.log(value);
  }
}

for (let value of val) {
  if (typeof value === "number") {
    console.log(value);
  }
}

for (let value of val) {
  if (typeof value === "string") {
    console.log(value);
  }
}
