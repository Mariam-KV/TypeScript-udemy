function add(n1: number, n2: number): number {
  return n1 + n2;
}

//function and callbacks
function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  let result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, (result) => {
  console.log(result);
  //we can return /even if we write void
  //we can't use that return value
  return 4;
});
console.log("---------------------------------------");

//if i use any function (but void) it will throw an error
function position(): void; //MyInfo
function position(a: string): void; //MyInfoLocation
function position(a: string, b: number): void; //MyInfo

//? данный параметр не обязателен
function position(a?: string, b?: number) {
  if (!a && !b) {
    return { a: undefined, b: undefined };
  }
  if (a && !b) {
    return { a: a, b: undefined, location: a };
  }
  return {
    a,
    b,
  };
}
console.log(position());
console.log(position("Tbilisi"));
console.log(position("Mari", 23));
interface MyInfo {
  name: string | undefined;
  age: number | undefined;
}
interface MyInfoLocation extends MyInfo {
  location: string;
}

