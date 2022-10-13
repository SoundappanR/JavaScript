// If we need this code to repeat multiple times we can use loop in JS....in html we need to repeat the code

for (let i = 1; i <= 4; i++) {
  let divElement = document.createElement("div");
  let h1Element = document.createElement("h1");
  h1Element.innerText = "Hello Hunting";
  let paraElement = document.createElement("p");
  paraElement.innerText = "Dom";
  // We can add id or class to the specific tag also
  h1Element.id = "head";
  h1Element.classList = "cHead";
  document.body.appendChild(divElement);
  divElement.appendChild(h1Element);
  divElement.appendChild(paraElement);

  if (i % 2 === 0) {
    h1Element.style.color = "aqua";
  }
}

let anchor = document.createElement("a");
anchor.href = "https://www.google.co.in/?gws_rd=ssl";
anchor.innerText = "Google";
document.body.prepend(anchor);

function remove() {
  let div = document.getElementById("head");
  div.classList.remove("cHead");
}

let inputelem = document.createElement("input");

inputelem.setAttribute("name", "email");
inputelem.setAttribute("placeholder", "wolf@gmail.com");
document.body.appendChild(inputelem);
