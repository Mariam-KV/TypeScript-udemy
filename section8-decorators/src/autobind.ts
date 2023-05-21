function AutoBind(_1: any, _2: string, descriptor: any) {
  let originalMethod = descriptor.value;
  let adjDescriptor: PropertyDescriptor = {
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
  message = "This works!";
  @AutoBind
  showmessage() {
    console.log(this.message);
  }
}
let button = document.querySelector("button");
let p = new Printer();

button?.addEventListener(
  "click",
  p.showmessage
  // p.showmessage.bind(p)
  //same ,only without bind
  //()=>{ p.showmessage()})
);
