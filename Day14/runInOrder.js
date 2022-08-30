function hotel() {
  console.log("Enter the hotel and find a seat");
  console.log("ordering the food");
  setTimeout(() => {
    console.log("preparing food");
    console.log("serving the food");
    setTimeout(() => {
      console.log("eating the food");
      console.log("pay bill and walk away");
    }, 3000);
  }, 2000);
}
hotel();

// If function is called as parameter it is called as First class citizen

// Always code should be loosely coupled

function circle(radius) {
  return 3.14 * radius * radius;
}

function calArea(fn) {
  console.log(fn);
}

calArea(circle(1)); // Loosely coupled ...if we change args in  main circle function then if we change args in calArea function that is enough
