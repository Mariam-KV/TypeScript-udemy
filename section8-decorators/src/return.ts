function ReturnDecorator(str: string) {
  return function (originalConstructor: any) {
    console.log(str + " returned");
    return class extends originalConstructor {
      constructor() {
        super();
        console.log(str + "extends");
      }
    };
  };
}

@ReturnDecorator("string")
class PersonReturn {
  constructor() {}
}
new PersonReturn();
