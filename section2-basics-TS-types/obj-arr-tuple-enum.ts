let admin = 0;
let reader = 1;
let auth = 2;

enum Role {
  admin = 7,
  reader,
  auth,
}

const person = {
  name: "Mari",
  age: 23,
  hobbies: ["k-pop", "programming", "kooking", "languages"],
  role: Role.reader,
};
//person.role.push(4);
console.log(person.role);
/** {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} */
