let names: Array<string> = []; // string[]
names[0] = "g";

console.log(names);

// let promise: Promise<string> = new Promise((res) => {
//   setTimeout(() => {
//     return res("resolved");
//   }, 500);
// });
// promise.then((data) => console.log(data));
console.log("-------------------------");
// generic function
function merge<T extends object, U extends object>(Obj1: T, Obj2: U) {
  return Object.assign(Obj1, Obj2);
}
let obj = merge({ name: "Mariam" }, { age: 23 });
console.log(obj);
console.log("-------------------------");
//Constrain generic type
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Whatever";
  if (element.length > 0) {
    descriptionText = "" + element.length;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe(["fff", 3]));
console.log("-------------------------");
//keyOf constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: "gdsg", na: "dfds" }, "na"));
