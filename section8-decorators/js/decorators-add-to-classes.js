"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator factories
function Logger(str) {
    console.log("Logging");
    return function (constructor) {
        console.log("Logging2 a " + str);
    };
}
function WithTemplate(ind) {
    console.log("template");
    return function (constructor) {
        let p = new constructor();
        let id = document.getElementById("casting");
        if (ind)
            id.innerHTML = `<p>${p.name}</p>`;
        console.log("Template2");
        // return class extends constructor {};
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object");
    }
};
Person = __decorate([
    Logger("string"),
    WithTemplate("fd")
], Person);
// new Person();
