function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
console.log(greet(42)); // This will cause a type error because 42 is not a string.