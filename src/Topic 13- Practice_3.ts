// enum Level { Low = 1, Medium = 2, High = 3 } Write alert(level: Level): string with a switch:
// Low → "All good", Medium → "Watch out", High → "Danger!"
// add a default with const _x: never = level (your exhaustiveness trick).
// alert(Level.High) → "Danger!

enum Level {
  Low = 1,
  Medium = 2,
  High = 3,
}
function alert(level: Level): string {
  switch (level) {
    case Level.Low:
      return "All Good";
    case Level.Medium:
      return "Watch Out";
    case Level.High:
      return "Danger";
    default:
      const _x: never = level;
      return _x;
  }
}
console.log(alert(Level.High));

// Write makeUser(name: string, age: number): [name: string, age: number, isAdult: boolean]. isAdult is true when age ≥ 18. makeUser("Sam", 20) → ["Sam", 20, true]

function makeUser(
  name: string,
  age: number,
): [name: string, age: number, isAdult: boolean] {
  if (age >= 18) {
    return [name, age, true];
  }
  return [name, age, false];
}
console.log(makeUser("Sam", 20));

// Write orderCoffee(size: string = "medium", sugar?: number): string: orderCoffee()→ "medium coffee with no sugar"
// orderCoffee("large", 2)  → "large coffee with 2 sugar"

function OrderCoffee(size: string = "medium", sugar?: number): string {
  return `Order: ${size} coffee with ${sugar ?? `no sugar`}`;
}
console.log(OrderCoffee());
console.log(OrderCoffee("large", 2));

// type Profile = { name: string; email: string; age: number };
// Write updateProfile(current: Profile, updates: Partial<Profile>): Profile that merges the changes and returns a new profile.
// updateProfile({name:"Ana",email:"a@x.com",age:20}, { age: 21 }) → { name:"Ana", email:"a@x.com", age:21 }

type Profile = {
  name: string;
  email: string;
  age: number;
};
const updateProfile = (current: Profile, updates: Partial<Profile>) => {
  return { ...current, ...updates };
};
console.log(
  updateProfile(
    { name: "Kanishk", email: "Kanishkgupta@outlook.com", age: 20 },
    { age: 21, email: "Kanishkgupta2003@outlook.com" },
  ),
);

// type User = { id: number; name: string; email: string; password: string };
// type PublicUser = Omit<User, "password"> Write getPublic(user: User): PublicUser that returns the user without the password. type Credentials = Pick<User, "email" | "password"> — build one and log it.

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
type PublicUser = Omit<User, "password">;
function getPublic(user: User): PublicUser {
  const { password, ...publicUser } = user;
  return publicUser;
}
console.log(
  getPublic({
    id: 1,
    name: "Kanishk",
    email: "Kanishkgupta2003",
    password: "Kanishk",
  }),
);
type Credentials = Pick<User, "email" | "password">; // this is a type with only email and password the login screen needs
const login = (credentials: Credentials) => {
  console.log(
    `Logging in with email: ${credentials.email} and password: ${credentials.password}`,
  );
};
login({ email: "Kanishkgupta2003", password: "Kanishk" });

function gridTotal(grid: number[][]): number {
  let total = 0;
  for (const row of grid) {
    for (const cell of row) {
      total += cell;
    }
  }
  console.log(total);
  return total;
}
// Write gridiff(grid: number[][]): number that returns the negative of the total of all numbers in the grid. gridiff([[1,2,3],[4,5,6]]) → -21 and log it to the console. and also log the total of the grid using gridTotal([[1,2,3],[4,5,6]]) → 21

const gridiff = (grid: number[][]): number => {
  let total = 0;
  grid.forEach((row) => {
    row.forEach((cell) => {
      total -= cell;
    });
  });
  console.log(total);
  return total;
};

gridTotal([
  [1, 2, 3],
  [4, 5, 6],
]);

gridiff([
  [1, 2, 3],
  [4, 5, 6],
]);

// enum Category { Veg = "veg", NonVeg = "nonveg" }  type MenuItem = { name: string; price: number; category: Category }; Make an array of 4 MenuItems then add the.
// filterByCategory(items: MenuItem[], cat: Category): MenuItem[] → use .filter.
// summarize(item: Pick<MenuItem, "name" | "price">): string → "Pizza costs 500".
// Filter to Veg, then loop and print each summary.

enum Category {
  VEG = "veg",
  NON_VEG = "non-veg",
}
type MenuItem = {
  name: string;
  price: number;
  category: Category;
};
const menu: MenuItem[] = [
  { name: "Paneer Butter Masala", price: 250, category: Category.VEG },
  { name: "Chicken Butter Masala", price: 300, category: Category.NON_VEG },
  { name: "Veg Pulao", price: 200, category: Category.VEG },
  { name: "Chicken Briyani", price: 350, category: Category.NON_VEG },
  { name: "Dal Makhani", price: 220, category: Category.VEG },
];
function filterByCategory(items: MenuItem[], category: Category): MenuItem[] {
  return items.filter((item) => item.category === category);
}
function summarize(items: Pick<MenuItem, "name" | "price">): string {
  return `${items.name} costs ${items.price}`;
}
filterByCategory(menu, Category.VEG).map((item) =>
  console.log(summarize(item)),
);

type Product = {
  readonly sku: string;
  name: string;
  stock: number;
};

const isProduct = (obj: unknown): obj is Product => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Product).sku === "string" &&
    typeof (obj as Product).name === "string" &&
    typeof (obj as Product).stock === "number"
  );
};

// Keep the core function clean and focused on updating stock
function updateStock(product: Product,change: number): [ok: boolean, message: string] {
  if (!isProduct(product)) {
    throw new Error("Invalid product");
  }
  if (product.stock + change < 0) {
    throw new Error("Not enough stock");
  } 
  else {
    product.stock += change;
    return [true, `Stock updated to ${product.stock}`];
  }
}

// Create a runner function to handle execution and catch the errors safely
function runUpdate(product: Product, change: number): [ok: boolean, message: string] {
  try {
    return updateStock(product, change);
  } catch (error) {
    if (error instanceof Error) {
      return [false, error.message];
    }
    return [false, "An unknown error occurred"];
  }
}
console.log(runUpdate({ sku: "A1", name: "Pen", stock: 5 }, -2));
console.log(runUpdate({ sku: "A1", name: "Pen", stock: 5 }, -10)); 

