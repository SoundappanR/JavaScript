//Objects
// We can store boolean value in Object
// functions can also be stored in Objects

let iphone = {
  name: "iphone pro",
  price: 80000,
  color: "Red",
  rom: "512gb",
  getDiscount: function () {
    console.log(this); //this represent current object
    return this.price;
  },
};

let Pixel = {
  name: "Pixel 6a",
  price: 40000,
  color: "White",
  rom: "512gb",
};

console.log(iphone.name, iphone.getDiscount());
// -----------------------------------------------------------------------------------------------------------
let teamHunting = {
  name: "TeamHunting",
  started: 2019,

  devil: {
    name: "Devil",
    age: 27,
  },
  wolf: {
    name: "Wolf",
    age: 23,
  },
};

console.log(teamHunting.devil, teamHunting.wolf.name);

console.log(teamHunting["name"]); //we can call the property by square bracket also
//---------------------------------------------------------------------------------------------------------------
function Phone(name, price, color, discount) {
  return {
    name: name,
    price: price,
    color: color,
    getDiscountPrice: function () {
      return this.price - this.price * discount;
    },
  };
}

let iphone1 = Phone("iphone", 80000, "red", 0.3);
console.log(iphone1, iphone1.getDiscountPrice());
//--------------------------------------------------------------------------------------------------------------
// if the args passed and the properties inside the function is same then dont need of mentioning both

function Person(name, age) {
  return {
    name,
    age,
  };
}

let sri = Person("Sri", 23);
console.log(sri);
//--------------------------------------------------------------------------------------------------------------
