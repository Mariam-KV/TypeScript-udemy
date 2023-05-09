"use strict";
class MyStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.filter((el) => el !== item);
    }
}
let first = new MyStorage();
first.addItem("f");
console.log(first);
