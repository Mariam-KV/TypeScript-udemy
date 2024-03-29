function Log(target: any, propertyName: string) {
  console.log(target, propertyName);
}
function Log2(target: any, propertyName: string) {
  console.log(target, propertyName);
}
function Log3(target: any, propertyName: string, position: number) {
  console.log(3, target, propertyName, position);
}

class Product {
  //decorator to a property
  @Log
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  //decorator to a method
  @Log2
  change(
    //decorator to a parameter
    @Log3 str: string
  ) {
    this.title = str;
  }
}
