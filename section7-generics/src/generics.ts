/*let names: Array<string>; // string[]
let promise: Promise<string> = new Promise((res) => {
  setTimeout(() => {
    return res("resolved");
  }, 500);
});
promise.then((data) => console.log(data));*/

function merge<T extends object, U extends object>(Obj1: T, Obj2: U) {
  return Object.assign(Obj1, Obj2);
}
console.log(merge({ name: "Mariam" }, { age: 23 }));



interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  return element.length;
}
console.log(countAndDescribe(["fff", 4]));
