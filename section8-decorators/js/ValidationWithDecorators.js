"use strict";
function Validate(obj) {
    if (obj.title.trim().length > 0) {
        return true;
    }
    return false;
}
class Course {
    constructor(t) {
        this.title = t;
        console.log(this.title);
    }
}
let courseForm = document.querySelector("form");
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title");
    let course = new Course(title.value);
    if (!Validate(course)) {
        alert("something went wrong!");
        return;
    }
});
