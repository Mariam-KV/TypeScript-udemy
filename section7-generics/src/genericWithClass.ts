class Collection<T extends number | string | boolean> {
  constructor(private items: T[]) {}
  add(item: T) {
    this.items.push(item);
  }
  remove(item: T) {
    this.items = this.items.filter((el) => el !== item);
  }
  get itemsMethod(): T[] {
    return this.items;
  }
}
let strings = new Collection<string>(["fggg", "fg"]);
let numbers = new Collection<number>([3, 3]);
// let objects = new Collection<object>({ num: "str" });
strings.add("fff");
console.log(strings);
console.log("-----------------------");
interface Car {
  model: string;
  year: number;
}
function createCar(model: string, year: number): Car {
  let car: Partial<Car> = {};
  (car.model = model), (car.year = year);
  return car as Car;
}

let car = createCar("bmw", 34);
console.log(car);
console.log("-----------------------");
