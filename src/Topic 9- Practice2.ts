// Write safeLength(input: unknown): number. If input is a string, return its length; otherwise return -1.
// safeLength("hello") → 5
// safeLength(42)      → -1

function safelength(input: unknown): number {
  if (typeof input === "string") return input.length;
  else return -1;
}
console.log(safelength("Hello"));
console.log(safelength(42));

// Make an interface Animal { name: string; sound: string; }. Create class Dog implements Animal with name = "Rex" and sound = "Woof". Add a method speak() that logs "Rex says Woof". Create one and call speak()

interface Animal {
  name: string;
  sound: string;
}
class Dog implements Animal {
  name = "Rex";
  sound = "Woof";
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}
new Dog().speak();

// Make type Person = { name: string } and type Employee = { salary: number }. Combine them into type Staff = Person & Employee. Create one Staff object and log "NAME earns SALARY".

type Person = {
  name: string;
};
type Employee = {
  salary: number | string;
};
type Staff = Person & Employee;
const Staff: Staff = {
  name: "John",
  salary: "Salary",
};
console.log(`${Staff.name} earns ${Staff.salary}`);

// Write divide(a: number, b: number): number that throws new Error("Cannot divide by zero") when b === 0. Call it inside a try/catch, and in catch log the message only if error instanceof Error.
// divide(10, 2) → 5
// divide(10, 0) → catch logs: "Error: Cannot divide by zero"

try {
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// type Direction = "up" | "down" | "left" | "right".
// Write move(dir: Direction): string using a switch. Handle all four, and in default assign dir to a const _exhaustive: never = dir;.
// Then try adding "diagonal" to the union and watch TS force you to handle it.

type Direction = "up" | "down" | "left" | "right";
function move(dir: Direction): string {
  switch (dir) {
    case "up":
      return "Moving up";
    case "down":
      return "Moving down";
    case "left":
      return "Moving left";
    case "right":
      return "Moving right";
    default:
      const _exhaustive: never = dir;
      return _exhaustive;
  }
}

// type Account = { readonly id: number; owner: string; nickname?: string; }.

// Write a guard isAccount(obj: unknown): obj is Account.
// Write describeAccount(input: unknown): string → "#1 owned by Sam (aka Sammy)", or "no nickname" when missing, or "Invalid account" when the guard fails.
// Prove acc.id = 99 is rejected by TS.

type Account = {
  readonly id: number;
  owner: string;
  nickename?: string;
};
const acc: Account = {
  id: 1,
  owner: "Sam",
  nickename: "Sammy",
};
function isAccount(obj: unknown): obj is Account {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Account).id === "number" &&
    typeof (obj as Account).owner === "string" &&
    (typeof (obj as Account).nickename === "undefined" ||
      typeof (obj as Account).nickename === "string")
  );
}

function describeAccount(input: unknown): string {
  if (isAccount(input)) {
    return `# ${input.id}, Owned by ${input.owner} aka (${input.nickename ?? "no nickname"})`;
  }
  return "Invalid account";
}
console.log(describeAccount(acc));
// acc.id = 2; Error: Cannot assign to 'id' because it is a read-only property.

// Given const raw: unknown = "1990", assert it to a string and convert to a number, then return the age 2026 - year =  36

const currentDate = new Date();
const currentYear: number = currentDate.getFullYear();
const raw: unknown = "1990";
const year: number = raw as string as unknown as number;
console.log(currentYear - year);

interface Order {
  id: number;
  status: "pending" | "shipped" | "delivered";
  readonly createdAt: string;
  note?: string;
}
const isOrder = (obj: unknown): obj is Order => {
  return (
    (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Order).id === "number" &&
    (
        (obj as Order).status === "pending" ||
        (obj as Order).status === "shipped" ||
        (obj as Order).status === "delivered"
    ) 
    &&
    typeof (obj as Order).createdAt === "string" &&
    (
        typeof (obj as Order).note === "undefined" ||
        typeof (obj as Order).note === "string"
    )
)
  );
};
const processOrder = (input: unknown): string => {
  if (isOrder(input)) {
    switch (input.status) {
      case "pending":
        return `Order #${input.id} still pending. Created at: ${input.createdAt}`;
      case "shipped":
        return `Order #${input.id} on the way. Created at: ${input.createdAt}`;
      case "delivered":
        return `Order #${input.id} has been delivered. Created at: ${input.createdAt}`;
      default:
        const _exhaustive: never = input.status;
        return _exhaustive;
    }
  }
  return "Rejected: Invalid order";
};
const orders: unknown[] = [
  { id: 1, status: "pending", createdAt: "2023-10-01" },
  { id: 2, status: "shipped", createdAt: "2023-10-02" },
  { id: 3, status: "delivered", createdAt: "2023-10-03" },
  { id: 4, status: "cancelled", createdAt: "2023-10-04" },
  { id: 5, status: "pending", createdAt: "2023-10-05", note: "Urgent" },
  { id: 6, status: "shipped", createdAt: "2023-10-06", note: 123 },
];
let index = 0;
setInterval(() => {
  if (index < orders.length) {
    console.log(processOrder(orders[index]));
    index++;
  }
}, 1000);
