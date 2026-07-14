// Object Oriented Programming
// Q1. Model a bank account. The balance must be readable from outside, but it must be impossible to change it by direct assignment — deposits and withdrawals may only happen through methods. Withdrawing more than the balance must raise an error. Demonstrate a successful deposit, a successful withdrawal, and a rejected over-withdrawal. In a comment, show the line that would fail if someone tried to assign the balance directly.

class Bank {
  money: number;
  constructor(money: number) {
    this.money = money;
  }
  deposit(amount: number) {
    this.money += amount;
    console.log(`Deposited ${amount}. New balance: ${this.money}`);
  }
  withdraw(amount: number) {
    if (amount > this.money) {
      console.log(`Insufficient funds. Current balance: ${this.money}`);
    } else {
      this.money -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.money}`);
    }
  }
}
const bank = new Bank(1000);
bank.deposit(500);
bank.withdraw(200);

// Q2. You are building a shapes library. Every shape must supply its own area calculation, but a plain "shape" is a meaningless concept — constructing one directly must be a compile error. Implement two concrete shapes (e.g. circle, rectangle). Then place both in a single array and print every shape's area with one loop.

abstract class Shape {
  abstract getArea(): number;
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super(); // Call the constructor of the parent class Shape
    this.radius = radius;
  }
  getArea(): number {
    return (Math.PI * this.radius * this.radius).toFixed(
      2,
    ) as unknown as number;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super(); // Call the constructor of the parent class Shape
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => {
  console.log(`Area: ${shape.getArea()}`);
});

// Q3.A Logger must track how many messages have been logged across the whole application — not per object. Its log method performs an action but returns nothing meaningful; declare that return type explicitly. Create three separate loggers, log a few messages from different ones, and show that the count is shared.

class Logger {
  static messagecount: number = 0; // This ensures the number belongs to the class itself, meaning all logger objects share this exact same counter
  log(message: string): void {
    Logger.messagecount++;
    console.log(`Message ${Logger.messagecount}: ${message}`);
  }
}
const logger1 = new Logger();
logger1.log("First message");
const logger2 = new Logger();
logger2.log("Second message");
const logger3 = new Logger();
logger3.log("Third message");
console.log(`Total messages logged: ${Logger.messagecount}`);

// Q4.Design a temperature class that stores Celsius internally. Reading a fahrenheit property must return the converted value; assigning to fahrenheit must update the stored Celsius accordingly. Any temperature below absolute zero (−273.15 °C) must be rejected. Prove both reading and writing work.

class Temperature {
  private _celsius: number;
  constructor(celsius: number) {
    if (celsius < -273.15) {
      throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
    }
    this._celsius = celsius;
    console.log(`Initial Temperature: ${this._celsius}°C`);
  }
  get celsius(): number {
    return this._celsius; // This allows reading the Celsius value from outside the class because the celsius is private and cannot be accessed directly. The getter provides controlled access to the value.
  }

  get farenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set farenheit(value: number) {
    const calculatedCelsius = ((value - 32) * 5) / 9;
    if (calculatedCelsius < -273.15) {
      throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
    }
    this._celsius = calculatedCelsius;
  }
}
const temp = new Temperature(25.0);
console.log(`Reading in Fahrenheit: ${temp.farenheit}°F`);
console.log(`Changing Fahrenheit to 32°F...`);
temp.farenheit = 32.0;
console.log(`New internal Celsius value: ${temp.celsius}°C`);
console.log(`Attempting to set Fahrenheit to -500°F...`);
try {
  temp.farenheit = -500;
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An unexpected error occurred.");
  }
}

// Q5. A Car needs an engine's capabilities (start, stop). Build this without using inheritance. Then, in a comment, justify why this design is preferable to making Car extend Engine.

class Engine {
  start(): void {
    console.log("Vroom! Engine started.");
  }
  stop(): void {
    console.log("Put put... Engine stopped.");
  }
}
class Car {
  constructor(private engine: Engine) {}
  // Delegation
  startCar() {
    this.engine.start();
  }
  stopCar() {
    this.engine.stop();
  }
}
const MyEngine = new Engine();
const myCar = new Car(MyEngine);
console.log("Starting the car...");
myCar.startCar();
console.log("Stopping the car...");
myCar.stopCar();

// Interfaces and Generics

// Q6. Declare a single reusable type that describes any function taking two numbers and returning a number. Write three different operations conforming to it (add, multiply, power), store them in an array, and execute each one.

interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;
const pow: MathOperation = (a, b) => Math.pow(a, b);
const subtract: MathOperation = (a, b) => a - b;
const operations: MathOperation[] = [add, subtract, multiply, pow];
const x: number = 5;
const y: number = 3;
operations.forEach((operation) => {
  console.log(`Result: ${operation(x, y)}`);
});

// Q7. Write one function that returns the first element of any array, regardless of element type. The result must keep its precise type — passing a string array must give back a string, not any. It must also behave safely when the array is empty.

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(`First number: ${firstNumber}`);

// Q8. Implement a reusable Queue (first-in-first-out) that works for any element type, supporting enqueue, dequeue, and size. Demonstrate it once with numbers and once with objects — without writing the class twice.

class Queue<T> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
    console.log(`Enqueued: ${item}`);
  }
  dequeue(): T | undefined {
    console.log(`Dequeued: ${this.items[0]}`);
    return this.items.shift();
  }
  get size(): number {
    return this.items.length;
  }
}
const numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(`Current Queue Size: ${numberQueue.size}`);
numberQueue.dequeue();
console.log(`Current Queue Size after dequeue: ${numberQueue.size}`);

const stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log(`Current Queue Size: ${stringQueue.size}`);
stringQueue.dequeue();
console.log(`Current Queue Size after dequeue: ${stringQueue.size}`);

// Q9. Every API call in your app returns the same envelope: a numeric status code, a success flag, and a payload whose shape differs per endpoint. Model this envelope once so it can wrap a single user object and a list of products, with no duplication.

interface ApiResponse<T> {
  status: number;
  success: boolean;
  payload: T;
}

type User = {
  id: number;
  name: string;
};
type Product = {
  product: string;
  price: number;
};
type response = User & Product;
const userApiResponse: ApiResponse<response[]> = {
  status: 200,
  success: true,
  payload: [
    { id: 1, name: "John Doe", product: "Laptop", price: 1000 },
    { id: 2, name: "Jane Smith", product: "Smartphone", price: 500 },
    { id: 3, name: "Alice Johnson", product: "Tablet", price: 300 },
  ],
};
console.log(
  userApiResponse.status,
  userApiResponse.success,
  userApiResponse.payload,
);

// Q10.Define a type requiring only a size property. Now: Store an object with size, material, and weight in a variable, then assign that variable to your type. Does it compile?

interface Sizable {
  size: number;
}
const box = {
  size: 10,
  material: "Uranium",
  weight: 100,
};
const itemA: Sizable = box;
console.log(itemA);

// Q11. Declare a tuple of exactly [string, number] and give it two values. Now call .push() on it with a third value.
// Does TypeScript complain?
// What does the array actually contain at runtime?
// What does this reveal about how much tuples really protect you?

const tuple: [string, number] = ["World", 42];
tuple.push(0.4, 0.8);
console.log(tuple);
tuple.unshift("Hello");
console.log(tuple);

// Q12.Given a readonly array of strings, determine which of these compile and which fail, and why: push, map, filter, sort, index access [0], and spreading it into a brand-new array.

const array: readonly number[] = [1, 2, 3, 2, 4, 3, 6, 2];
console.log(array.map((num) => num * 2));
console.log(array.toSorted((a, b) => a - b));
console.log(array.filter((num) => num > 1));

// Q13.Represent a coordinate that may be either 2D or 3D using a single tuple type. Write one function that accepts it and correctly reports whether it's 2D or 3D.

type Coordinate = [number, number, number?];
function reportDimensions(Coord: Coordinate) {
  if (Coord.length === 2) {
    console.log(`2D Coordinate: (${Coord[0]}, ${Coord[1]})`);
  } else {
    console.log(`3D Coordinate: (${Coord[0]}, ${Coord[1]}, ${Coord[2]})`);
  }
}
reportDimensions([10, 20]);


