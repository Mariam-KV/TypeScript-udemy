let casting = document.getElementById("casting")! as HTMLInputElement;
console.log(casting.value);

//index properties

interface ErrorContainer {
  //{email:"sfg"}
  [key: string]: string;
}

let data: ErrorContainer = {
  key: "gmail",
  key2: "mail",
};
