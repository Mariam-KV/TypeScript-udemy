let arrayOfNumber: number[];

// одна функция работает с разными типами данных
//generic type
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
console.log(reverse([4, "d", 7]));

///operators

interface Person {
  name: string;
  age: number;
}
type P = keyof Person;
let n: P = "name";
console.log(n);
