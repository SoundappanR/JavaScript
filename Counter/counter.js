let count = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
  count.innerText = parseInt(count.innerText) + 1;
});

decrementBtn.addEventListener("click", () => {
  count.innerText = parseInt(count.innerText) - 1;
});
