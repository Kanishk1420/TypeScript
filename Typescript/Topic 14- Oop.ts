// OOP - Object Oriented Programming
class Food {
  name: string;
  price: number;
  taste: string;
  constructor(name: string, price: number, taste: string) {
    this.name = name;
    this.price = price;
    this.taste = taste;
    console.log(this);
  }
}
const Eat = new Food("Pizza", 500, "Delicious");
console.log(Eat.name);

// Access Modifiers
class food {
  public flavour: string = "Masala";
  private secretIngredient: string = "Cardamom";
  reveal() {
    return `The secret ingredient is ${this.secretIngredient}`;
  }
}
const c = new food();
console.log(c.reveal());

class Shop {
  #balance: number = 1000;
  getBalance() {
    return this.#balance;
  }
  protected shopName = "Foodies";
}
class Shopy extends Shop {
  getShopName() {
    return `The shop name is ${this.shopName}`;
  }
}
new Shopy().getShopName();

// Readonly Properties

class Cup {
  readonly size: number = 250; //2
  constructor(size: number) {
    // 3
    this.size = size; //4
  }
}
const mycup = new Cup(300); //1
console.log(mycup.size); //5

// Getters and Setters

class Sugar {
  private _quantity: number = 3;
  get quantity() {
    return this._quantity;
  }
  set quantity(value: number) {
    if (value < 0) {
      throw new Error("Quantity cannot be negative");
    }
    this._quantity = value;
  }
}
const sugar = new Sugar();
sugar.quantity = 5;
console.log(sugar.quantity);

// Static Members

class Cal {
  static shopName: string = "Foodies";
  constructor(public flavour: string) {}
}
console.log(Cal.shopName);

// Abstract Classes

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
const dog = new Dog();
dog.makeSound();

// Class Composition

class Summer {
  icecream() {
    console.log("Enjoying ice cream in summer!");
  }
  colddrink() {
    console.log("Refreshing with a cold drink!");
  }
}
class Use {
  constructor(private summer: Summer) {}
  enjoy() {
    this.summer.icecream();
    this.summer.colddrink();
  }
}

const summer = new Summer();
const use = new Use(summer);
use.enjoy();

class Winter {
  hotchocolate() {
    console.log("Enjoying hot chocolate in winter!");
  }
  hotdrink() {
    console.log("Warming up with a hot drink!");
  }
}
class UseWinter {
  constructor(private winter: Winter) {
    this.winter.hotdrink();
    this.winter.hotchocolate();
  }
}
const winter = new Winter();
const useWinter = new UseWinter(winter);
console.log(useWinter);
