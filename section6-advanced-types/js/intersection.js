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
console.log(add(4, 7));
let result = add("g", "f");
result.split(" ");
//# sourceMappingURL=intersection.js.map