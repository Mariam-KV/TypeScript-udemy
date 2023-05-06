function strip(x: string | number) {
  if (typeof x === "number") {
    return x + 5;
  }
  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "response result";
}
class MyError {
  header = "error header";
  message = "error message";
}

function handle(res: MyResponse | MyError): string {
  if (res instanceof MyResponse) {
    return res.header;
  } else {
    return res.message;
  }
}
let response = new MyResponse();
let error = new MyError();
console.log(handle(response));
console.log(handle(error));
