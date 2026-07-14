type format = {
  type: string;
  quantity: number;
  amount: number;
};
function makefood(item: format) {
  console.log(item);
}
function servefood(item: format) {
  console.log(item);
}
makefood({ type: "Pizza", quantity: 2, amount: 500 });
servefood({ type: "Burger", quantity: 3, amount: 300 });

// Interface
interface foodrecipe  {
  water: number;
  flour: number;
  salt: number;
  sugar: number;
};
class Recipe implements foodrecipe {
  water = 100;
  flour = 200;
  salt = 10;
  sugar = 20;
}
console.log(new Recipe());
interface size {
  size: "small" | "medium" | "large";
}
class Pizza implements size {
    size: "small" | "medium" | "large" = "large";
}
console.log(new Pizza());

// type Response = {ok: true} | {ok: false}
// class myresponse implements Response {
//   ok: boolean = true;
// } it will give error because ok is not assignable to type true | false. it should be either true or false. but in interface we can use boolean type. so we can use interface instead of type for this case.

// Literal Types
type Food = "Pizza" | "Burger" | "Pasta";
function orderfood(i: Food){
  console.log(i);
}
orderfood("Pizza");


// Intersection Types
type Base = {num: number};
type Extended ={str: string};
type Intersection = Base & Extended;
const obj: Intersection = {
  num: 42, 
  str: "Hello"
};
console.log(obj);

type User = {
  username: string;
  bio?:string; // optional property
}
const u1: User = {
  username: "JohnDoe"
};
const u2 : User = {
  username: "JaneDoe",
  bio: "Software Developer"
};
console.log(u1);
console.log(u2);

// Readonly Properties
type Config = {
  readonly apiKey: string;
  readonly endpoint: string;
  version?: string; // optional property
}
const config: Config = {
  apiKey: "123456",
  endpoint: "https://api.example.com",
  version: "1.0"
};
// config.apiKey = "newApiKey"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
config.version = "1.1"; // This is allowed because version is not readonly