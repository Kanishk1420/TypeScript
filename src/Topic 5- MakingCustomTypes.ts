type biodata = {
  name: string;
  age: number;
  rollno: number;
  isActive: boolean;
};
function getBioData(obj: any): obj is biodata {
  // Type Guard function to check if the object is of type biodata
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.age === "number" &&
    typeof obj.rollno === "number" &&
    typeof obj.isActive === "boolean"
  );
}
function printBioData(item: any | string) {
  if (getBioData(item)) {
    return `Name: ${item.name}, Age: ${item.age}, Roll No: ${item.rollno}, Active: ${item.isActive}`;
  }
  return `Invalid biodata object: ${item}`;
}
console.log(
  printBioData({ name: "Kanishk", age: 25, rollno: 101, isActive: true }),
  printBioData("hello"), // This will return "Invalid biodata object: hello" because the input is not of type biodata
);
