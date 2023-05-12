import "reflect-metadata";
import { plainToClass } from "class-transformer";
import Product from "./product-class";
export default function Transformer() {
  let data = [
    { title: "df44d", price: 42 },
    { title: "df1d", price: 12 },
    ,
    { title: "d14tcfd", price: 3 },
  ];
  let tr = plainToClass(Product, data);
  for (let item of tr) {
    console.log(item.getInformation());
  }
}
