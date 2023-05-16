"use strict";
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter((el) => el !== item);
    }
    get itemsMethod() {
        return this.items;
    }
}
let strings = new Collection(["fggg", "fg"]);
let numbers = new Collection([3, 3]);
strings.add("fff");
console.log(strings);
console.log("-----------------------");
function createCar(model, year) {
    let car = {};
    (car.model = model), (car.year = year);
    return car;
}
let car = createCar("bmw", 34);
console.log(car);
console.log("-----------------------");
