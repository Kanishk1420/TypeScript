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

type Ball = {
  type: "Ball"
  color: string;
  amount: number;
}
type Bat = {
  type: "Bat"
  hardness: string;
  amount: number;
}
type Gloves = {
  type: "Gloves"
  color: string;
  amount: number;
}
type SportsEquipment = Ball | Bat | Gloves;

const getEquipment = (item: SportsEquipment) => {
  switch (item.type) {
    case "Ball":
      return `This is a ${item.color} ball with amount ${item.amount}`;
    case "Bat":
      return `This is a ${item.hardness} bat with amount ${item.amount}`;
    case "Gloves":
      return `These are ${item.color} gloves with amount ${item.amount}`;
    default:
      return "Invalid sports equipment";
  }
}
const putequipment = (item: SportsEquipment) => {
  if("color" in item){
    return `This is a ${item.color} ${item.type}`;
  }
  else{
    return `This is a ${item.hardness} ${item.type}`;
  }
}

function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every((item) => typeof item === "string");
}
