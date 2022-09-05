class Parent {
  constructor(name, place) {
    this.name = name;
    this.place = place;
  }

  getName() {
    return `${this.name} is my name`;
  }

  getPlace() {
    return `${this.place} is my place`;
  }
}

let hunt = new Parent("HuNtInG", "Salem");
console.log(hunt.getName());

// class --> eg : India(Holds overall specs)
// Object --> eg : TN, KL....etc(Defines exact specs)

class phone {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  totalCost() {
    this.totalPrice = this.price * this.qty;
    return this.totalPrice;
  }
}

let iphone = new phone("IPHONE", 50000, 1);
console.log(iphone); //phone { name: 'IPHONE', price: 50000, qty: 1 }
console.log(iphone.totalCost());

let samsung = new phone("S8", 49999, 1);
samsung.isChargerAvailable = true;
console.log(samsung); // phone { name: 'S8', price: 49999, qty: 1, isChargerAvailable: true }

class product1 extends phone {
  constructor(name, price, qty, isChargerAvailable = false) {
    super(name, price, qty);
    this.isChargerAvailable = isChargerAvailable;
  }
  // method Overriding
  totalCost() {
    this.discount = 0.2;
    this.totalPrice = this.price * this.qty;
    this.totalPrice = this.totalPrice - this.totalPrice * 0.2;
    return this.totalPrice;
  }
}

let prod = new product1("Oneplus", 20000, 1, true);
console.log(prod);
console.log(prod.totalCost());
