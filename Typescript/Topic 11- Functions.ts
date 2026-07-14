// Function Declaration with Void
function log(): void {
  console.log("Hello, World!");
}
log();

// Optional Parameters
function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}.`);
  }
}
greet("Alice", 30);

// Default parameter
function Anemo(name: string = "Prune"): void {
  console.log(`Hello, ${name}.`);
}
Anemo();

function createUser(order: {
    type: string;
    quantity: number;
    price: number| BigInt;
    discount?: number;
}): void {
return console.log(`Order created: ${order.type}, Quantity: ${order.quantity}, Price: ${order.price}, Discount: ${order.discount ?? 0}`);
}
createUser({ type: "Pizza", quantity: 2, price: 5000, discount: 10 });