// COnditional Statements

//Switch Case ---> It is not recommended to Use

// We can use default at any place

// If break is not there it will print all the cases.

let number = 0;

switch (number) {
  case 0:
    console.log("Wolf");
    break;
  case 1:
    console.log("Tiger");
    break;
  case 2:
    console.log("Devil");
    break;
  case 3:
    console.log("Puma");
    break;
  default:
    console.log("No");
    break;
}

//Bitwise Operator
// Bitwise AND --> &

console.log(5 & 3); //1
console.log(15 & 7); //7

// Bitwise OR --> |

console.log(5 | 3); //7
console.log(15 | 7); //15

// Bitwise NOT --> ~
//if positive number given -(num+1)
// if negative number given +(num-1)

console.log(~5); //-6
console.log(~15); //-16
console.log(~1); //-2
console.log(~-5);

// Bitwise XOR --> ^
// 0 0   0
// 0 1   1
// 1 0   1
// 1 1   0

console.log(5 ^ 3); //6

// Left shift <<

console.log(5 << 1); //10
console.log(5 << 2); //20

// Right shift <<

console.log(5 >> 1); //2
console.log(5 >> 2); //1
console.log(7 >> 12); //0
