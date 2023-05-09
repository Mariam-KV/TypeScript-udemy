let b = {
    name: "dfsd",
    greet(name) {
        return "hello " + name;
    },
};
console.log(b.greet(b.name));
let f = (a, b) => {
    return a + b;
};
console.log(f(3, 5));
