// String continuation

let news = "Team Hunting Won the tournament";
console.log(news.slice(2)); //am Hunting Won the tournament  //Starts from 2nd position
console.log(news.slice(2, 7)); //am Hu   //index starts with 0....it will take from 2nd index to 6th index

//In slice we can give negative index also
//From backward the value counts
//Eg --> W   O   L   F
//      -4  -3  -2  -1

let fname = "Wolf";
console.log(fname.slice(-1)); //f
console.log(fname.slice(-4, -1)); //Wol

let email = "wolf@gmail.com";
console.log(email.slice(0, -4)); //wolf@gmail

//SubString
console.log(email.substring(0, 5)); //wolf@ //Substring is same as slice but wont accept negative indexing only positive indexing
console.log(email.substring(0)); //wolf@gmail.com

//split --> convert string to array
console.log(news.split());
console.log(news.split("n")); //[ 'Team Hu', 'ti', 'g Wo', ' the tour', 'ame', 't' ]  splits using n
console.log(news.split("")); //Splits individually each character

//loops
// While
// for loop
// for of loop
//for in loop

let num = 5;
while (num > 0) {
  console.log(num);
  num -= 1;
}

//Increment and decrement
//pre and post

let val = 1;
// console.log(val++); //1
// console.log(++val); //3 //first we are post incrementing it changes to 2 then we are preincrementing
console.log(val++ + ++val); //4

let sub = 1;
// console.log(--sub); //0
console.log(val--); //1

//For loop
let i;
for (i = 1; i <= 5; i++) {
  console.log(i);
}

while (false);
{
  console.log("Wolf"); //Wolf will be printed 1 time
}

for (let i = 0; i < 5; i++);
{
  console.log("Wolf"); //Wolf will be printed 1 time
}
