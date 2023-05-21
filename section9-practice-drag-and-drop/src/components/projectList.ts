import projectState from "../state/projectState";
import * as D from "../models/drag-drop-interfaces";
import ProjectItem from "./projectItem";
import { ProjectStatus } from "./project-status";
import autobind from "./autobind";
export default class ProjectList implements D.DragTarget {
  templateElement;
  wherePutElement;
  element: HTMLElement;
  assignedProjects: any[];
  list: HTMLElement;
  constructor(public type: "active" | "finished") {
    this.assignedProjects = [];

    this.templateElement = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.wherePutElement = document.getElementById("app") as HTMLDivElement;

    let importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild! as HTMLFormElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: any[]) => {
      this.assignedProjects = projects;
      let relevantProjects = projects.filter((el) => {
        if (this.type === "active") {
          return el.status === ProjectStatus.Active;
        }
        return el.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.renderContent();
    this.attach();
    this.list = document.getElementById(`${this.type}-projects-list`)!;
    this.list.addEventListener("dragleave", this.dragLeaveHandler);
    this.list.addEventListener("dragover", this.dragOverHandler);
    this.list.addEventListener("drop", this.dropHandler);
  }
  renderProjects() {
    this.list.innerHTML = "";
    for (let item of this.assignedProjects) {
      new ProjectItem(item, this.list);
    }
  }
  attach() {
    this.wherePutElement.insertAdjacentElement("beforeend", this.element);
  }
  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      this.list?.classList.add("droppable");
    }
  }
  @autobind
  dropHandler(event: DragEvent) {
    let projectId = event.dataTransfer?.getData("text/plain")!;

    projectState.moveProject(
      projectId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
  @autobind
  dragLeaveHandler(_: DragEvent) {
    this.list.classList.remove("droppable");
  }
  renderContent() {
    let listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.innerText = `${this.type.toLocaleUpperCase()} PROJECTS`;
  }
}
