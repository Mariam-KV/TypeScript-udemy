"use strict";
function strip(x) {
    if (typeof x === "number") {
        return x + 5;
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = "response header";
        this.result = "response result";
    }
}
class MyError {
    constructor() {
        this.header = "error header";
        this.message = "error message";
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return res.header;
    }
    else {
        return res.message;
    }
}
let response = new MyResponse();
let error = new MyError();
console.log(handle(response));
console.log(handle(error));
