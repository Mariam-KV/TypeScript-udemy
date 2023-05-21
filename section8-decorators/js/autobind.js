"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_1, _2, descriptor) {
    let originalMethod = descriptor.value;
    let adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            let boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showmessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showmessage", null);
let button = document.querySelector("button");
let p = new Printer();
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showmessage
// p.showmessage.bind(p)
//same ,only without bind
//()=>{ p.showmessage()})
);
