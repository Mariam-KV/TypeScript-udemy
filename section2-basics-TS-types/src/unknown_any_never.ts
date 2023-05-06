//unknown
let num: unknown;
num = 3;
num = "dfgf";
let str = "fds";
//cant str = num only if check
if (typeof num === "string") str = num;
//any

let num2: any;
//any
//can str = num2
str = num2;

//never
function generateError(message: string):never {
  throw message;
}
console.log(generateError("occur an error"));
