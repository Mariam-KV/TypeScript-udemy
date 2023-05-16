"use strict";
console.log("-----------------------");
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
let me = mergeObjects({ name: "Mari" }, { age: 23 });
console.log(me);
console.log(me.name);
console.log(me.age);
console.log("-----------------------");
function withCount(value) {
    return {
        value,
        count: "" + value.length,
    };
}
let c = withCount(["f", "ds", "sgd"]);
console.log(c);
console.log("-----------------------");
function getObjectValue(obj, key) {
    return obj[key];
}
let obj1 = getObjectValue({ name: "ff" }, "name");
console.log(obj1);
