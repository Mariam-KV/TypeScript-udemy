import { validate } from "./validation.js";
import projectList from "./projectList.js";
import { addProject } from "./projectState.js";
import baseFn from "./baseFunction.js";
export default function ProjectInput() {
  let [form, _] = baseFn("project-input", "app");
  form.id = "user-input";

  configure();

  let titleInputELement: HTMLInputElement = form.querySelector("#title")!;
  let descriptionInputELement: HTMLInputElement =
    form.querySelector("#description")!;
  let numberInputELement: HTMLInputElement = form.querySelector("#people")!;

  function configure() {
    form.addEventListener("submit", (e) => handleSubmitting(e));
  }
  function handleSubmitting(e: Event) {
    e.preventDefault();
    if (
      validate({
        value: titleInputELement.value,
        required: true,
      }) &&
      validate({
        value: descriptionInputELement.value,
        required: true,
      }) &&
      validate({
        value: +numberInputELement.value,
        required: true,
        min: 1,
      })
    ) {
      gatherUserInputs(
        titleInputELement.value,
        descriptionInputELement.value,
        +numberInputELement.value
      );
      titleInputELement.value = "";
      descriptionInputELement.value = "";
      numberInputELement.value = "";
      return;
    }
    return alert("Data is not correct!");
  }

  projectList("active");

  projectList("finished");
  function gatherUserInputs(
    str1: string,
    str2: string,
    num: number
  ): [string, string, number] | void {
    return addProject(str1, str2, num);
  }
}
