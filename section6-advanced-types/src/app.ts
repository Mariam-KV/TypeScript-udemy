//let paragraph = <HTMLInputElement>document.getElementById("input")!;
let paragraph = document.getElementById("input")! as HTMLInputElement;
console.log(paragraph.value);
type indexProperty = {
  [props: string]: string;
};
let m: indexProperty = {
  name: "ss",
  age: "33",
};
