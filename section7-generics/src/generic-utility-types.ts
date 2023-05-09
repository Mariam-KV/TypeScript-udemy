//PARTIAL
interface Course {
  name: string;
  year: number;
  description: string;
}
function CreateCourse(name: string, year: number, description: string): Course {
  //obj will be have Course type
  let obj: Partial<Course> = {};
  obj.name = name;
  obj.year = year;
  obj.description = description;
  return obj as Course;
}
console.log(CreateCourse("EPAM", 2023, "Front-end Development"));

console.log("--------------------------------");
//READONLY

let n: Readonly<string[]> = ["f", "fw"];

// n.push("ff"); //can't
console.log(n);
