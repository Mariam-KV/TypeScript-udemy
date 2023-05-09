"use strict";
let names = [];
names[0] = "g";
console.log(names);
console.log("-------------------------");
function merge(Obj1, Obj2) {
    return Object.assign(Obj1, Obj2);
}
let obj = merge({ name: "Mariam" }, { age: 23 });
console.log(obj);
console.log("-------------------------");
function countAndDescribe(element) {
    let descriptionText = "Whatever";
    if (element.length > 0) {
        descriptionText = "" + element.length;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["fff", 3]));
console.log("-------------------------");
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "gdsg", na: "dfds" }, "na"));
