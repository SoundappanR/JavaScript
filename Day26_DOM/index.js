//DOM ---> Document Object Model
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

console.log("HuNtInG");

function onClick() {
  let click = document.getElementById("dom");
  if (click.style.color === "aqua") click.style.color = "green";
  else click.style.color = "aqua";
}

function onMouseOver() {
  let over = document.getElementById("div_h1");
  over.style.color = "aqua";
}

function onMouseLeave() {
  let over = document.getElementById("div_h1");
  over.style.color = "black";
}
