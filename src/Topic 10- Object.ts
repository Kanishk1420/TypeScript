// Declaring Object Types
type food = {
  name: string;
  quantity: number;
  price: number;
  ingredients: (string | number)[];
};
const foodmaking: food = {
  name: "Pizza",
  price: 500,
  quantity: 2,
  ingredients: ["Cheese", "Tomato", "Basil", 7],
};
console.log(foodmaking);

// Duck Typing

type Cup = {
  size: string;
};
let smallcup: Cup = {
  size: "small",
};
let bigcup = {
  size: "big",
  material: "steel",
  number: 10,
};
smallcup = bigcup;

// Data Spliting
type Item = {
  name: string;
  price: number;
};
type Address = {
  city: string;
  state: string;
  country: string;
};
type Order = {
  id: number;
  items: Item[];
  address: Address;
};

// Partial Datatype <T> makes all properties of T optional
const updateOrder = (updates: Partial<Order>) => {
  console.log("Updating order with the following changes:", updates);
};
updateOrder({
  id: 123,
  address: { city: "New York", state: "NY", country: "USA" },
  items: [{ name: "Pizza", price: 500 }],
});
updateOrder({
  address: { city: "Los Angeles", state: "LA", country: "USA" },
});
updateOrder({}); // Makes all properties optional

// Required Datatype <T> makes all properties of T required

const createOrder = (order: Required<Order>) => {
  console.log("Creating order with the following details:", order);
};
createOrder({
  id: 456,
  address: { city: "Chicago", state: "IL", country: "USA" },
  items: [{ name: "Burger", price: 300 }],
});

// Pick DataType <T> is used to select which data type to use from the object. It is used to create a new type by picking the properties from an existing type.
const getOrderSummary = (order: Pick<Order, "id" | "address">) => {
  console.log("Order Summary:", order);
};
getOrderSummary({
  id: 789,
  address: { city: "Houston", state: "TX", country: "USA" },
});

// Omit DataType <T> is used to create a new type by omitting the properties from an existing type.
type NewOrder = {
  name: string;
  price: number;
  quantity: number;
  secreat: string;
};
type PublicOrder = Omit<NewOrder, "secreat">;
const showOrder = (order: PublicOrder) => {
  console.log("Order Details:", order);
};
showOrder({
  name: "Pasta",
  price: 400,
  quantity: 1,
});
