"use strict";
function CreateCourse(name, year, description) {
    let obj = {};
    obj.name = name;
    obj.year = year;
    obj.description = description;
    return obj;
}
console.log(CreateCourse("EPAM", 2023, "Front-end Development"));
console.log("--------------------------------");
let n = ["f", "fw"];
console.log(n);
