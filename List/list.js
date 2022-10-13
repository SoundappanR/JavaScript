let add1 = document.getElementById("abc");

function add() {
  console.log(add1.value);

  let div = document.createElement("div");
  div.classList = "div-add";
  document.body.appendChild(div);
  let input = document.createElement("input");
  input.setAttribute("readonly", "readonly");
  input.value = add1.value;

  div.appendChild(input);
  let input1 = document.createElement("input");

  input1.setAttribute("type", "button");
  input1.setAttribute("value", "DELETE");
  // input1.setAttribute("onclick", "removee()");
  input1.setAttribute("readonly", "readonly");
  input1.setAttribute("class", "delete");
  div.appendChild(input1);
  add1.value = "";
  let del = document.getElementsByClassName("delete");

  for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
      // div.style.display = "none";
    };
  }
}

// function removee() {
//   let del = document.getElementsByClassName("delete");

//   for (let i = 0; i < del.length; i++) {
//     del[i].onclick = function () {
//       let div = this.parentElement;
//       div.remove();
//       // div.style.display = "none";
//     };
//   }
// }
