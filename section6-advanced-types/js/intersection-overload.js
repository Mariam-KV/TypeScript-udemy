"use strict";
let i = {
    name: "Mariam",
    age: 23,
    prof: ["front", "end"],
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(4, "g"));
let d = undefined !== null && undefined !== void 0 ? undefined : "g";
console.log(d);
