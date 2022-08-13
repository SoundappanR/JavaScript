function sumOfDigit(num) {
  let a = 0;
  let b = 0;

  while (num > 0) {
    a = num % 10;

    b = b + a;
    num = Math.floor(num / 10);
  }
  console.log(b);
}

sumOfDigit(12345);
