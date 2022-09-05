const circle1 = {
  radius: 2,
  area: function () {
    console.log(this);
    let test = () => {
      // Arrow function always represents parent
      console.log("radius", this.radius);
    };
    test();
    return 3.14 * this.radius * this.radius;
  },
};

circle1.area();

//factory method
function areaCircle(radius) {
  return {
    radius: radius,
    area: function () {
      return 3.14 * this.radius * this.radius;
    },
  };
}

let circle = areaCircle(2);
console.log(circle.area());

function areaRectangle(len, bth) {
  return {
    length: len,
    breadth: bth,
    area: function () {
      return this.length * this.breadth;
    },
    perimeter: function () {
      return 2 * (this.length + this.breadth);
    },
  };
}

let rectangle = areaRectangle(2, 3);
console.log(rectangle.area());

let rectangle1 = areaRectangle(1, 3);
console.log(rectangle1.perimeter());

//COnstructor function

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return 3.14 * this.radius * this.radius;
  };
}

let c1 = new Circle(2);
console.log(c1.area());

//Class

class Square {
  constructor(value) {
    this.value = value;
  }

  area() {
    return this.value * this.value;
  }
}

let c2 = new Square(10);
console.log(c2.area());
