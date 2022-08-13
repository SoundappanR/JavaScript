let num = 22;
let sum = 0;
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    sum = sum + i;
    console.log(i);
  }
}
console.log(sum);

if (num == sum) {
  console.log("Perfect num");
} else {
  console.log("Not perfect num");
}
