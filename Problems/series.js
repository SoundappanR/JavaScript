// let num = 5;
// let target = 10;

// let array = [];

// for (let i = 0; i < target / 2; i++) {
//   array.push(2 ** i);

//   array.push(3 ** i);

//   if (i === target - 1) {
//     break;
//   }
// }

// console.log(array[target - 1]);

// console.log(array);

// Optimized method

let target = 10;
let power = Math.floor(target / 2);
console.log(power);
let base = target % 2;
console.log(base);

if (base === 0) {
  console.log(3 ** (power - 1));
} else {
  console.log(2 ** power);
}
