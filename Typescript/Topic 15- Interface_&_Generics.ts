// Interface create objects with specific properties and methods
interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (price: number) => {
  return (price * 1) / 2;
};
console.log(apply50(1000));

interface CoffeeMaker {
  start(): void;
  stop(): void;
}
const machine: CoffeeMaker = {
  start() {
    console.log("Machine started");
  },
  stop() {
    console.log("Machine stopped");
  },
};
machine.start();
machine.stop();

// Interface Merge
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = {
  name: "John",
  age: 30,
};
console.log(user);

// Extending Interfaces
interface Person extends User, CoffeeMaker {
  email: string;
}
const person: Person = {
  name: "Alice",
  age: 25,
  email: "Alive890",
  start() {
    console.log("Person started");
  },
  stop() {
    console.log("Person stopped");
  },
};
console.log(person.name, person.age, person.email);
person.start();
person.stop();

// Generics are templates that allow us to reusable and also called Generic Functions

function wrapinarray<T>(item: T): T[] {
  return [item];
}
// Usage
wrapinarray("Hello");
wrapinarray(123);
wrapinarray({ flavour: "Vanilla" });

function pair<A, B>(a: A, b: B): [A, B] {
  // return [b,a]; You need to return [a,b] instead of [b,a] to match the function signature
  return [a, b];
}
pair("Hello", "World");
pair("Hello", 123);
pair({ flavour: "Vanilla" }, { size: 250 });

// Generic Interfaces

interface Box<A> {
  content: A;
}
const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: "Hello" };
console.log(numberBox.content, stringBox.content);

// Generic Classes

class Stack<T> {
  public items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
}
const numberStack = new Stack<number>();
for (let i = 0; i < Math.floor(Math.random() * 20) + 1; i++) {
  numberStack.push(i);
}
console.log(numberStack.items);

interface ApiPromise<T> {
  status: number;
  content: T;
}
const response: ApiPromise<{ flavour: string; taste: string }> = {
  status: 200,
  content: { flavour: "Vanilla", taste: "Sweet" },
};
console.log(response.status, response.content.flavour, response.content.taste);

// Plucking a Property refers to you want to select or pull only the columns of names or only the columns of IDs from the spreadsheet. In TypeScript, we can use keyof operator to pluck a property from an object type.

interface person {
  id: number;
  name: string;
}
// keyof User is literally the list: "id" | "name"
// Person["id"]   evaluates to: number
// Person["name"] evaluates to: string

function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
} 
// T is placeholder for whatever object type is inside the array.
// K is placeholder for the property name you want to pull.
// extends keyof T means means The value of key must belong to the list of properties inside T." This is what triggers the compile error if you type a typo like "nae" instead of "name".

const users: person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const names = pluck(users, "name");
const ids = pluck(users, "id");
console.log(names, ids);