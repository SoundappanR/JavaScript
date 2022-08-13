let num = 1000;
let a = 0;
let b = 0;
let c = 0;

while (num > 0) {
  a = num % 10;

  b = b + a;
  num = Math.floor(num / 10);
  c = c + 1;
}
console.log(c);
