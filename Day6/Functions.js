//Functions

//Types of Function

//1. With args with return type
//2. With args without return type
//3. Without args with return type
//4. Without args without type

num1 = 10;
num2 = 15;

let quo = Math.floor(num1 / num2); //0
console.log(quo);

//1. With args with return type
function arithmetic(num1, num2) {
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mul = num1 * num2;
  let div = num1 / num2;
  console.log(sum, sub, mul, div);
  return `Sum is ${sum}`;
}

console.log(arithmetic(10, 2));
arithmetic(20, 2);

//2. With args without return type
function swap(num1, num2) {
  console.log(num1, num2);
  //method1
  //   let temp = num1;
  //   num1 = num2;
  //   num2 = temp;

  //method2
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  console.log(num1, num2);
}

swap(10, 2);

//3. Without args with return type
function welcome() {
  return 10;
}

console.log(welcome());

//3. Without args without return type
function hello() {
  console.log("Hellloooo");
}

hello();
