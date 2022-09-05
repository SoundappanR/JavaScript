let wolf = {
  name: "Wolf",
  age: 23,

  getData: function () {
    console.log(this.name, this.age);
  },
};

wolf.getData(); //Wolf 23

// Function borrowing

let getData = function () {
  console.log(`${this.name} is ${this.age} yrs old`);
};

let getData1 = function (place) {
  console.log(`${this.name} is ${this.age} yrs old from ${place}`);
};

// here we are calling wolf using call from getdata function
getData.call(wolf); // Wolf is 23 yrs old
getData1.call(wolf, "Salem"); //Wolf is 23 yrs old from Salem

//Bind
let getWolfData = getData1.bind(wolf, "Salem");
getWolfData(); // Wolf is 23 yrs old from Salem
