// decorator factories
function Logger(str: string) {
  console.log("Logging");
  return function (constructor: Function) {
    console.log("Logging2 a " + str);
  };
}
function WithTemplate(ind: string) {
  console.log("template");
  return function (constructor: any) {
    let p = new constructor();
    let id = document.getElementById("casting") as HTMLInputElement;
    if (ind) id.innerHTML = `<p>${p.name}</p>`;
    console.log("Template2");
    // return class extends constructor {};
  };
}
@Logger("string")
@WithTemplate("fd")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object");
  }
}
// new Person();
