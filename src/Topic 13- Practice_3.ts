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
