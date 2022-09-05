// Spread

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let res = [...arr1, "Wolf", "Devil", "Puma", ...arr2];
console.log(res);

let wolf = {
  bike: "Fz",
  favGun: "M416",
};

let devil = {
  ...wolf,
  specialist: "Dp",
};

console.log(devil.bike);

function abc(...num) {
  console.log(num);
}

abc(1); //[1]
abc(1, 2, 3); //[1,2,3]

function add(n1, ...nums) {
  console.log(n1, nums);
}

add(2); // 2 []
add(2, 3, 4); // 2 [3,4]

// destructuring

let [num1, num2] = [1, 2];
console.log(num1, num2); // 1 2

let { name, age } = {
  name: "Wolf",
  age: 23,
};

console.log(name, age);
