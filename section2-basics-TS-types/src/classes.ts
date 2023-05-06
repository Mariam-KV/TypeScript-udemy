class TS {
  // if we don't write type of modifecators --> we must write aside
  // version:string
  //readonly allowed only in constructor
  constructor(readonly version?: string) {
    this.version = version;
  }
  info(name: string) {
    return "Hi! My name " + name + ".";
  }
}
let me = new TS();
let me2 = new TS("m");

console.log(me);
console.log(me2);
console.log(me2.info("Mariam"));

console.log("--------------------------------");
//модификаторы полей - protected ,public,private

class Animal {
  constructor(protected voice: string, private name?: string) {
    this.voice = voice;
    this.name = name;
  }
}
let dog = new Animal("wgdv", "f");

console.log(dog);

console.log("--------------------------------");
//Абстрактные классы

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}
// let f = new Component();
//cannot create an instance
class AppComponent extends Component {
  render(): void {
    console.log("render");
  }
  info(): string {
    return "this is info";
  }
}

let d = new AppComponent();
console.log(d);
console.log(d.info());
console.log(d.render());
