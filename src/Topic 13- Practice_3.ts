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
  return `Order: ${size} coffee with ${sugar ?? `no `} sugar`;
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

// type Product = { readonly sku: string; name: string; stock: number }; Write a guard isProduct(obj: unknown): obj is Product.
// Write updateStock(product: Product, change: number): [ok: boolean, message: string] (a named tuple return!):
// new stock = stock + change
// if new stock would go below 0, throw new Error("Not enough stock") — catch it and return [false, "Not enough stock"]
// otherwise return [true, "Stock updated to X"]
// Test with a valid update and one that goes negative.
// updateStock({sku:"A1",name:"Pen",stock:5},  -2) → [true,  "Stock updated to 3"]
// updateStock({sku:"A1",name:"Pen",stock:5}, -10) → [false, "Not enough stock"]

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
function updateStock(
  product: Product,
  change: number,
): [ok: boolean, message: string] {
  try {
    if (!isProduct(product)) {
      throw new Error("Invalid product");
    }
  } catch (error) {
    if (error instanceof Error) {
      return [false, error.message];
    }
    return [false, "An unknown error occurred"];
  }
  if (product.stock + change < 0) {
    throw new Error("Not enough stock");
  } else {
    product.stock += change;
    return [true, `Stock updated to ${product.stock}`];
  }
}

// Create a runner function to handle execution and catch the errors safely
function runUpdate(
  product: Product,
  change: number,
): [ok: boolean, message: string] {
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
console.log(runUpdate({ sku: "A1", name: "Pen" } as unknown as Product, -2));
console.log(runUpdate("I am not a product" as unknown as Product, -2));

// enum Day { Mon = 1, Tue, Wed, Thu, Fri, Sat, Sun }
// Write isWeekend(day: Day): boolean → true only for Sat/Sun.
// isWeekend(Day.Sat) → true
// isWeekend(Day.Mon) → false

enum Day {
  MON = 1,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}
function isWeekend(day: Day): boolean {
  if (day === Day.SAT || day === Day.SUN) {
    return true;
  }
  return false;
}
console.log(isWeekend(Day.SAT));
console.log(isWeekend(Day.MON));

// type Point = readonly [x: number, y: number];
// Write distance(p: Point): number = distance from origin = √(x² + y²), rounded to 2 decimals.
// distance([3, 4]) → 5

type Point = readonly [x: number, y: number];
const distance = (p: Point): number => {
  return Number(Math.sqrt(p[0] * p[0] + p[1] * p[1]).toFixed(2));
};
console.log(distance([4, 3]));

// Write buildUrl(protocol: string = "https", domain: string, path: string, port?: number): string → "https://google.com:8080/path/to/resource" (omit the port if not provided). Log it to the console.

enum Protocol {
  HTTP = "http",
  HTTPS = "https",
  FTP = "ftp",
  SMTP = "smtp",
}

function buildUrl(
  protocol: string,
  domain: string,
  path: string,
  port?: number,
): string {
  const url = `${protocol}://${domain}${port ? `:${port}` : ""}/${path}`;
  return url;
}
console.log(buildUrl(Protocol.FTP, "google.com", "path/to/resource", 8080));

type Movie = {
  title: string;
  year: number;
  rating: number;
  director: string;
  budget: number;
};

// Write a function MovieDetails(movie: Pick<Movie, "title" | "year" | "rating" | "budget"| "director">): string that returns a string like "Openhiemer (2024) - Rating: 9.1". Then change it to use Omit<Movie, "director" | "budget"> instead of Pick. Log the result to the console.

let MovieDetails = (
  movie: Pick<Movie, "title" | "year" | "rating" | "budget" | "director">,
): string => {
  return `${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
};
MovieDetails = (movie: Omit<Movie, "director" | "budget">): string => {
  return `${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
};
console.log(
  MovieDetails({
    title: "Openhiemer",
    year: 2024,
    rating: 9.1,
    director: "Christopher Nolan",
    budget: 160000000,
  }),
);

// type Settings = { theme: string; fontSize: number; autosave: boolean };
// const DEFAULTS: Settings = { theme: "light", fontSize: 14, autosave: true };
// Write applyDefaults(user: Partial<Settings>): Required<Settings> that fills missing fields from DEFAULTS.
// applyDefaults({ theme: "dark" }) → { theme: "dark", fontSize: 14, autosave: true }

type Settings = {
  theme: "light" | "dark";
  fontSize: number;
  autosave: boolean;
};
const DEFAULTS: Settings = {
  theme: "dark",
  fontSize: 14,
  autosave: true,
};
function applyDefaults(user: Partial<Settings>): Required<Settings> {
  return { ...DEFAULTS, ...user };
}
console.log(applyDefaults({ theme: "light" }));

// const cart = [{ item: "Pen", price: 10 }, { item: "Book", price: 50 }, { item: "Bag", price: 200 }];
// Names of items priced ≥ 50 (.filter then .map).
// Total of all prices (.reduce).
// expensive → ["Book", "Bag"]
// total     → 260
// .reduce is new — it "folds" a list into one value: cart.reduce((sum, x) => sum + x.price, 0). The 0 is the starting sum.

const cart = [
  {
    item: "Pen",
    price: 10,
  },
  {
    item: "Book",
    price: 50,
  },
  {
    item: "Bag",
    price: 200,
  },
];
cart
  .filter((item) => item.price >= 50)
  .map((item) => console.log(`Item: ${item.item}, Price: ${item.price}`));
console.log(`Total Price: ${cart.reduce((sum, x) => sum + x.price, 0)}`);

// enum Role { Admin = "admin", Editor = "editor", Viewer = "viewer" }
// interface Member { name: string; role: Role }
// canEdit(member: Member): boolean → true for Admin or Editor.
// Filter a Member[] to only those who can edit, and print their names.

enum Role {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}
interface Member {
  name: string;
  role: Role;
}

function canEdit(member: Member): boolean {
  if (member.role === Role.Admin || member.role === Role.Editor) return true;
  return false;
}
const Members: Member[] = [
  { name: "Alice", role: Role.Admin },
  { name: "Bob", role: Role.Editor },
  { name: "Charlie", role: Role.Viewer },
];

Members.filter((member) => canEdit(member)).map((member) =>
  console.log(`${member.name} can edit because they are ${member.role}`),
);

// enum Genre { Fiction = "fiction", Science = "science", History = "history" }
// type Book = { readonly isbn: string; title: string; genre: Genre; copies: number };
// Guard isBook(obj: unknown): obj is Book.
// borrow(book: Book): [ok: boolean, message: string]:
// if copies === 0 → [false, "Out of stock"]
// else decrement copies and return [true, "Borrowed: TITLE"]
// Make a Book[] (include one with copies: 0), loop, and try borrowing each.
// [ true,  "Borrowed: Dune" ]
// [ false, "Out of stock" ]

enum Genre {
  Fiction = "fiction",
  Science = "science",
  History = "history",
}
type Book = {
  readonly isbn: string;
  title: string;
  genre: Genre;
  copies: number;
};
function isBook(obj: unknown): obj is Book {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Book).isbn === "string" &&
    typeof (obj as Book).title === "string" &&
    Object.values(Genre).includes((obj as Book).genre) &&
    typeof (obj as Book).copies === "number"
  );
}
function borrow(book: unknown): [ok: boolean, message: string] {
  if (!isBook(book)) {
    return [false, "Invalid book"];
  }
  if (book.copies <= 0) {
    return [false, "Out of Stock"];
  } else {
    book.copies -= 1;
    return [
      true,
      `Borrowed ${book.title} and its remaining copies are ${book.copies}`,
    ];
  }
}
const Book: Book[] = [
  {
    isbn: "978-3-16-148410-0",
    title: "The Great Gatsby",
    genre: Genre.Fiction,
    copies: 5,
  },
  {
    isbn: "978-0-14-044913-6",
    title: "A Brief History of Time",
    genre: Genre.Science,
    copies: 2,
  },
  {
    isbn: "978-0-307-26293-5",
    title: "Sapiens: A Brief History of Humankind",
    genre: Genre.History,
    copies: 0,
  },
];
Book.map((book) => {
  const [ok, message] = borrow(book);
  console.log(ok, message);
});

console.log(borrow("I am not a book"));
console.log(borrow({ title: "No ISBN here" })); 
