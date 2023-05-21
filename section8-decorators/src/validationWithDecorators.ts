
function Validate(obj: { title: string }): boolean | undefined {
  if (obj.title.trim().length > 0) {
    return true;
  }
  return false;
}

class Course {

  title: string;

  constructor(t: string) {
    this.title = t;
    console.log(this.title);
  }
}
let courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title") as HTMLInputElement;
  let course = new Course(title.value);
  if (!Validate(course)) {
    alert("something went wrong!");
    return;
  }
});
