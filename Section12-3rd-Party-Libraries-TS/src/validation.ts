import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { validate } from "class-validator";
export default function Validation() {
  class Product {
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;
    constructor(title: string, price: number) {
      this.title = title;
      this.price = price;
    }
    getInformation() {
      return this.title + " - $" + this.price;
    }
  }
  console.log("--------------------------------");
  let p1 = new Product("", -4);
  validate(p1).then((errors) => {
    if (errors.length > 0) {
      console.log("Validations errors", errors);
    } else {
      console.log("everything is okay");
      console.log(p1.getInformation());
    }
  });

  let p2 = new Product("p2", 2);
  validate(p2).then((errors) => {
    console.log("--------------------------------");
    if (errors.length > 0) {
      console.log("Validations errors", errors);
    } else {
      console.log("everything is okay");
      console.log(p2.getInformation());
    }
  });
}
