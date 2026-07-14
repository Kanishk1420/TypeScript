// Declare 3 variables: your city (string), pincode (number), isOpen (boolean). Reassign each once, then log all three.
let city: string = "ViceCity";
city = "LibertyCity";
const pincode: number = 33101;
const isOpen: boolean = true;
console.log(city, pincode, isOpen);

// Write add(a: number, b: number): number that returns the sum
const add = (a: number, b: number): number => {
  return a + b;
};
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(add(7, 8), addNumbers(10, 15));

// Make a variable trafficLight that can only be 'red' | 'yellow' | 'green'. Set it to 'green', then log it.
const trafficlight: "red" | "yellow" | "green" = "green";
console.log(trafficlight);

// Write a function describe(value: string | number): string that returns a description of the value. If it's a string, return "Text of Length X" where X is the length of the string. If it's a number, return "Double: Y" where Y is the number multiplied by 2.

function describe(value: string | number): string {
  if (typeof value === "string") {
    return `Text of Length ${value.length}`;
  }
  return `Double: ${value * 2}`;
}
console.log(describe("Hello"), describe(10));

// Write greetUser(name: string, title?: string): string: with title: "Hello, Dr. Kanishk" without title: "Hello, Kanishk"

function greetUser(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}
console.log("With title",greetUser("Kanishk", "Dr."),"\n","Without Title",greetUser("Kanishk"));


// Write a function getmarks(scores: number[]): void that takes an array of scores and logs "Pass" if the score is 50 or above, and "Fail" otherwise. Use a union type for the return value.
function getmarks(scores: number[]) {
let result: "Pass" | "Fail"| undefined;
for (let score of scores) {
if(score >= 50)
result = "Pass";
else
result = "Fail";
console.log(result);
} 
}
getmarks([45, 80, 30, 95, 60]);

// Make a type Product = { name: string; price: number; inStock: boolean }.
// Write a type guard isProduct(obj: any): obj is Product.
// Write showProduct(item: any): string that returns "Laptop costs 50000 (Available)" if valid, else "Not a valid product". Test it with one valid product and one invalid value (like "hello").

type Product ={
    name: string,
    price: number,
    inStock: boolean
}
function isProduct(object: any): object is Product {
    return (
        typeof object === "object" &&
        object !== null &&
        typeof object.name === "string" &&
        typeof object.price === "number" &&
        typeof object.inStock === "boolean"
    );
}
function showProduct(item: any): string {
if(isProduct(item)){
    return `Product Name: ${item.name}, Price: ${item.price}, In Stock: ${item.inStock}`;
}
return `Invalid product object: ${item}`;
}

console.log(showProduct({ name: "Laptop", price: 1000, inStock: true }));
console.log(showProduct("hello"));


// Model an order system:
// type Order = { id: number; status: 'pending' | 'shipped' | 'delivered'; tip?: number }
// Write summarize(order: Order): string that returns something like "Order #101 is shipped, tip: 50" — but if tip is missing, say "no tip" instead.
// Use a type guard isOrder to validate unknown input before summarizing.

type Order = {
    id: number;
    status: "pending" | "shipped" | "delivered";
    tip?: number;
}
function isOrder(obj: any): obj is Order {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.id === "number" &&
        (obj.status === "pending" || obj.status === "shipped" || obj.status === "delivered") &&
        (obj.tip === undefined || typeof obj.tip === "number")
    );
}
function summarize(order: unknown): string {
    if (isOrder(order)) {
        return `Order ${order.id} is ${order.status}, tip is ${order.tip ?? "no tip"}`;
    }
    return `Invalid order object; ${order}`;
}
console.log(summarize({ id: 123, status: "shipped", tip: 5 }));
console.log(summarize({ id: 456, status: "delivered"}));
console.log(summarize({id: 789}));
