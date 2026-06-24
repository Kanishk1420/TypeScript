// Forceful Type Assertion
const response: any = "42";
const result: number = (response as string).length; // Forceful Type Assertion to convert response to string.
console.log(result);

const inputElement = document.getElementById("input") as HTMLInputElement; // Forceful Type Assertion to convert inputElement to HTMLInputElement. to get the value of inputElement.value

// any vs unknown
let value: any;
value = 42;
value = "Hello";
value = 2.5;
value = true;
// value.toUpperCase();

let newvalue: unknown;
newvalue = 42;
newvalue = "Hello";
newvalue = true;
// newvalue.toUppercase(); // Here you will get and error because unknown type is not assignable to string type. You need to use type assertion or type guard to access the properties of unknown type. but in any you will get error warning for this
if (typeof newvalue === "string") {
  console.log(newvalue.toUpperCase());
}

// Try Catch Block
try {
  const num1: number = 10;
  const num2: number = 0;
  const result1: number = num1 / num2;
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
}
// Never Type
type Role = "admin" | "user" | "guest";
function rbac(role: Role): void {
    switch(role){
        case "admin":
            console.log("Admin has full access");
            break;
        case "user":
            console.log("User has limited access");
            break;
        case "guest":
            console.log("Guest has no access");
            break;
    }
    role; // This will cause a compile-time error because all possible cases have been handled, and role can never be anything else. Hence, the type of role is never.
}
function neverReturn(): never {
    while (true) {
        // Infinite loop, never returns
    }
}