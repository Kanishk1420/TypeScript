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
