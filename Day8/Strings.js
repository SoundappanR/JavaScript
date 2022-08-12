// String

let myName = "Wolf";
console.log(myName[0], myName[5]); //W unefined

myName[0] = "w";
console.log(myName); //Wolf   //Strings are immutable...cant change single letter

myName = "Tiger";
console.log(myName); //Tiger   //We can change whole word

console.log(myName.length); //5   //myName changes to Tiger so length is 5

//Methods

let news = "Team Hunting won the tournament";
console.log(news.charAt(0)); //T  //Space also included in count
console.log(news.charAt(50)); //   //If range goes beyond the given string length it will give output as space

console.log(news.charCodeAt(0)); //84    //Gives ascii value

let a = "Team";
let b = "Hunting";
console.log(a.concat(" ", b)); //Team Hunting

console.log(a.endsWith("m")); //True  //checks the end value it can be character or words
console.log(a.startsWith("T")); //true  //checks start value
console.log(a.includes("m")); //True  //Checks whether given value is present or not and this is case sensitive

console.log(news.includes("Team", 2)); //False  //Second Parms represents position for search start

console.log(a.indexOf("T")); //0  //gives index position
console.log(a.indexOf("T", 2)); //-1  //If value not present it gives -1 as output

console.log(news.match("Team")); //Gives details like index,input,groups

console.log(news.match(/team/i)); //Team  //case insensitive...we can use regex
console.log(b.repeat(2)); //HuntingHunting   //repeats the string

console.log(b.replace("Hunting", "HuNtInG")); //HuNtInG
