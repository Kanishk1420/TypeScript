function getname(kind: string | number | null | undefined) {
  if (typeof kind === "string") {
    return `My name is ${kind}`;
  }
  return `My age is ${kind}`;
}

function waitingforresponse(msg?: string) {
  if (msg) {
    return `The response is ${msg}`;
  }
  return "No response yet";
} // Type Narrowing to avoid errors in the code

function orderstatus(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `The order size is ${size}`;
    }
    if (size === "medium" || size === "large") {
        return `The order size is ${size}`;
    }
    return `The order ${size}`;
}

getname("Kanishk");
waitingforresponse("Success");
orderstatus("small");
orderstatus(100);
