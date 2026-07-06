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
  for (const row of grid){
    for (const cell of row){
        total += cell;
    }
  }
  console.log(total);
  return total;
}
gridTotal([
  [1, 2, 3],
  [4, 5, 6],
]);
