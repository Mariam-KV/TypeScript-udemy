//Tuple  →A tuple is a typed array with a predefined length and types for each index.
let tuple = [12, "admsf", true];
console.log((tuple[0] = 3));
//methods work in tuples
tuple.shift();
console.log(tuple);
//enum
var Count;
(function (Count) {
    Count[Count["first"] = 0] = "first";
    Count[Count["second"] = 1] = "second";
    Count[Count["third"] = 333] = "third";
    Count[Count["fourth"] = 334] = "fourth";
})(Count || (Count = {}));
console.log(Count.first);
console.log(Count.second);
console.log(Count.third);
console.log(Count.fourth);
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    else
        return a.toString() + b.toString();
}
console.log(combine(3, 5));
console.log(combine("2", 4));
//# sourceMappingURL=tuple_enum_union-aliases.js.map