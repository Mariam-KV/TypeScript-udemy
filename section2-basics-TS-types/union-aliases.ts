//aliases/customs type
type Combinable = number | string;
type Literal = "as-number" | "as-text";
function combine(n1: Combinable, n2: Combinable, result: Literal) {
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    result === "as-number"
  ) {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

console.log(combine(3, 4, "as-number"));
console.log(combine("3", "4", "as-number"));
console.log(combine("3", "4", "as-text"));
console.log(combine("h", "i", "as-text"));
