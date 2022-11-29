function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}
function add2(n1: string, n2: string) {
  return n1 + n2;
}
let combineValues: (a: string, b: string) => string;
combineValues = add2;
add(3, 4);
console.log(combineValues("h", "i"));
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2;
  cb(result);
}
addAndHandle(56, 2, (result) => {
  console.log(result);
});
