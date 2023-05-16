import {
  Project,
  addListener,
  ProjectStatus,
  moveProject,
} from "./projectState.js";
import baseFn from "./baseFunction.js";
import projectItem from "./projectItem.js";
export default function projectList(type: "active" | "finished") {
  let assignedProjects: Project[] = [];

  let [list, toApp] = baseFn("project-list", "app");

  list.id = `${type}-projects`;
  // let listId = document.getElementById(`${type}-projects-list`);
  assignedProjects = [];
  addListener((projects: Project[]) => {
    let relevantProject = projects.filter((prj) => {
      if (type === "active") {
        return prj.status === ProjectStatus.Active;
      }
      return prj.status === ProjectStatus.Finished;
    });

    assignedProjects = relevantProject;
    renderProjects();
  });

  attach();
  renderContent();
  list.addEventListener("dragover", dragOverHandler);
  list.addEventListener("dragleave", dragLeaveHandler);
  list.addEventListener("drop", dropHandler);
  function attach() {
    toApp?.append(list);
  }
  function renderProjects() {
    let list = document.getElementById(`${type}-projects-list`)!;
    list.innerHTML = "";
    for (const prjItem of assignedProjects) {
      let result = projectItem(prjItem);
      list.appendChild(result);
    }
  }
  function renderContent() {
    let listId = `${type}-projects-list`;
    let ul = list.querySelector("ul")!;
    ul.id = listId;
    let h2 = list.querySelector("h2")!;
    h2.textContent = `${type} projects`;
  }
  let listOver = list.querySelector("ul");
  function dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      listOver?.classList.add("droppable");
    }
  }
  function dropHandler(event: DragEvent): void {
    let projectId = event.dataTransfer?.getData("text/plain")!;
    moveProject(
      projectId,
      type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  function dragLeaveHandler(_: DragEvent): void {
    listOver?.classList.remove("droppable");
  }
}
