"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//function and callbacks
function addAndHandle(n1, n2, cb) {
    let result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    //we can return /even if we write void
    //we can't use that return value
    return 4;
});
console.log("---------------------------------------");
//? данный параметр не обязателен
function position(a, b) {
    if (!a && !b) {
        return { a: undefined, b: undefined };
    }
    if (a && !b) {
        return { a: a, b: undefined, location: a };
    }
    return {
        a,
        b,
    };
}
console.log(position());
console.log(position("Tbilisi"));
console.log(position("Mari", 23));
