class MyStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.filter((el) => el !== item);
  }
}
let first = new MyStorage<string>();
first.addItem("f");
console.log(first);
