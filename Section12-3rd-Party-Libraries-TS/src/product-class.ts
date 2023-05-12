export default class Product {
  constructor(public title: string, public price: number) {
    this.title = title;
    this.price = price;
  }
  getInformation() {
    return this.title + " - $" + this.price;
  }
}
