// Comparision Operator

let a = 10;
console.log(a == 10); //True

console.log(a == "10"); //True....(In JavaScript "==" checks for value not datatype)

console.log(a === "10"); //False ...(In JavaScript "===" checks for value and datatype)

console.log(a != 15); //True

console.log(a != "15"); //True

console.log(a !== "15"); // False

console.log(a > 5); //True

console.log(a < 5); //False

console.log(a >= 5); //True

console.log(a <= 5); //False

//Terinary Operator -->  Condition ? True statement :  False Statement

10 > 5 ? console.log("Greater") : console.log("Lesser"); //Greater

1 > 5 ? console.log("Greater") : console.log("Lesser"); //Lesser

// String

let firstName = "Hunting";
let lastName = "Wolf";
let danger = "Dangerous";

console.log(firstName + " " + lastName); //Hunting Wolf

console.log("'" + firstName + lastName + "'"); //'HuntingWolf'

//String Template literals

console.log(`Team "Hunting"`); // Team  "Hunting"

console.log(`${lastName}'s are ${danger}`);

//Wierd JavaScript things
// If near value is string it consider other value as the string only

console.log(5 + 5); //10

console.log(5 + "5"); //55

console.log("5" + "5"); //55

console.log(5 + 5 + "5"); //105

console.log("5" + 5 + 5); //555

// for minus operator string is also consider as value

console.log(10 - 5); //5

console.log("10" - 5); //5

console.log(10 - "5"); //5

console.log("10" - "5"); //5

console.log("ab" - "5"); //NaN --> Not A Number

console.log("ab" - 5); //NaN

console.log("ab" - "cd"); //NaN


