// Recursion --> calling myself untill condition satisfies

function getfactorial(num) {
  if (num < 0 || num === undefined) return "invalid";
  if (num == 1 || num == 0) return 1;
  return num * getfactorial(num - 1);
}

console.log(getfactorial(5)); //120
console.log(getfactorial(0)); //1
console.log(getfactorial(-1)); // invalid
console.log(getfactorial());
