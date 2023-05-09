interface Person {
  name: string;
  greet(p: string): string;
}
let b: Person = {
  name: "dfsd",
  greet(name) {
    return "hello " + name;
  },
};

console.log(b.greet(b.name));
interface Me extends Person {}

interface func {
  (a: number, b: number): number;
}
let f: func = (a, b) => {
  return a + b;
};
console.log(f(3, 5));
