// 1
console.log("-----------------------");
function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return Object.assign({}, a, b);
}
let me = mergeObjects({ name: "Mari" }, { age: 23 });
console.log(me);
console.log(me.name);
console.log(me.age);

//2
console.log("-----------------------");
interface L {
  length: number;
}
function withCount<T extends L>(value: T): { value: T; count: string } {
  return {
    value,
    count: "" + value.length,
  };
}
let c = withCount(["f", "ds", "sgd"]);
console.log(c);

//3
console.log("-----------------------");
function getObjectValue<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let obj1 = getObjectValue({ name: "ff" }, "name");
console.log(obj1);
