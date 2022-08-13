function primeNum(num) {
  let i;
  let a;
  while (num > 0) {
    a = 0;
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        a = 1;
      }
    }
    if (a == 0 && num > 1) {
      console.log(num);
    }
    num -= 1;
  }
}

primeNum(10);
