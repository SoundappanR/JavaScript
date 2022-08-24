//Settimeout always executes after javascript code

console.log("First");

setTimeout(() => {
  console.log("Two");
}, 0);

setTimeout(() => {
  console.log("Fourth");
}, 0);

function abc() {
  console.log("fifth");
  setTimeout(() => {
    console.log("sixth");
  }, 0);
}

abc();

console.log("Third");
