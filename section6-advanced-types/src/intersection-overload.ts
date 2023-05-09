//intersection

type Admin = {
  name: string;
  age: number;
};
type Employee = {
  prof: string[];
};
type Intersection = Admin & Employee;
let i: Intersection = {
  name: "Mariam",
  age: 23,
  prof: ["front", "end"],
};

type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//overload functions
type Combinable = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add(4, "g"));

let d = undefined ?? "g";
console.log(d);
