interface Person {
  name: string;
  age: number;
  hobbies: string[];
}
type keys = keyof Person;
type keys2 = Exclude<keyof Person, "name">;
let k: keys = "hobbies";
console.log(k);
