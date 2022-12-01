type Admin = {
  name: string;
  age: number;
};
type Employee = {
  prof: string[];
};
type ME = Admin & Employee;
let i: ME = {
  name: "Mariam",
  age: 23,
  prof: ["front", "end"],
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
//overload functions
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
console.log(add(4, 7));
//let result = <string>add("g", "f");
let result = add("g", "f");
result.split(" ");
