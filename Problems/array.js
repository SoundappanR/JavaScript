let a = [5, 2, 3, 4];

let b = [];
let total = 1;
for (let i = 0; i < a.length; i++) {
  let c = [];
  c.push(...a);
  //console.log(c);
  c[i] = 1;

  for (let j = 0; j < a.length; j++) {
    total = total * c[j];
  }
  b.push(total);
  total = 1;
}

//console.log(total);
console.log(b);
//console.log(a);
