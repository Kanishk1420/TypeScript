// Array Types
const tastes: string[] = ["sweet", "sour", "bitter", "salty"];
const prices: number[] = [10, 20, 30, 40];
const ratings: Array<number> = [4.5, 3.8, 4.2, 4.9];
const foodNames: string[] = ["Pizza", "Burger", "Pasta", "Salad"];

interface Food {
  name: string;
  price: number;
  taste: string;
  rating: number;
}

const menu: Food[] = foodNames.map((name, index) => ({
  name: name,
  price: prices[index]!,
  taste: tastes[index]!,
  rating: ratings[index]!,
}));

console.log(menu);
const region: readonly string[] = [
  "Mondstadt",
  "Liyue",
  "Inazuma",
  "Sumeru",
  "Fontaine",
  "Natlan",
  "Nod Krai",
  "Snezhnaya",
];
// region.push("Khaenri'ah"); // Error: Cannot add to a readonly array

// Multi-dimensional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(table);

// Tuples
let user: [string, number];
user = ["Alice", 30];
// user = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.

let userinfo: [string, number, boolean?];
userinfo = ["Kanishk", 100];
userinfo = ["Kanishk", 100, true];

const location: readonly [number, number] = [28.66, 32.44];

// Name Tuples
const order: [id: number, status: string, createdAt: string] = [
  1,
  "pending",
  "2026-07-03",
];

// Enums
enum cupsize {
  small,
  medium,
  large,
}
const size = cupsize.large;
console.log(size);

enum Status {
  Pending = 100,
  Served, //101
  Cancelled, //102
  // It will increment the value of Served and Cancelled by 1 from the previous value.
}
enum FoodType {
  PIZZA = "pizza",
  BURGER = "burger",
  PASTA = "pasta",
  SALAD = "salad",
}
function getFoodType(type: FoodType) {
  console.log(`Food type is ${type}`);
}
getFoodType(FoodType.BURGER);

// It is best practice to define enums using either full numbers or full strings, rather than mixing them, and to name the enums using capital letters

let t: [string,number] = ["Hello", 42];
t.push(32); // This is allowed, but it can lead to unexpected behavior since the tuple is defined to have only two elements. The third element will be added, but it won't be part of the tuple's type definition.
console.log(t); // Output: ["Hello", 42, 32]
