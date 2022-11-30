//type = interface (often but not always)
interface Person {
  name: string;
  age: number;
  greet(greet: string): void;
}
let i: Person;
i = {
  name: "Mari",
  age: 23,
  greet(greet) {
    console.log(greet + " " + this.name);
  },
};
i.greet("hello");
