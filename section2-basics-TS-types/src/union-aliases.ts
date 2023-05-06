//Tuple  →A tuple is a typed array with a predefined length and types for each index.
let tuple: [number, string, boolean] = [12, "admsf", true];
console.log((tuple[0] = 3));

//methods work in tuples
tuple.shift();
console.log(tuple);

//enum

enum Count {
  first, //0
  second, //1
  third = 333, //333
  fourth, //334
}
console.log(Count.first);
console.log(Count.second);
console.log(Count.third);
console.log(Count.fourth);

//aliases/customs type

type combinable = number | string;
function combine(a: combinable, b: combinable) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else return a.toString() + b.toString();
}
console.log(combine(3, 5));
console.log(combine("2", 4));
