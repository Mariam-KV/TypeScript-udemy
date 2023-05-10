/// <reference path="projectState.ts"/>
/// <reference path="projectItem.ts"/>

namespace App {
  export class ProjectList implements DragTarget {
    templateElement;
    wherePutElement;
    element: HTMLElement;
    assignedProjects: any[];
    constructor(public type: "active" | "finished") {
      this.assignedProjects = [];

      this.templateElement = document.getElementById(
        "project-list"
      ) as HTMLTemplateElement;
      this.wherePutElement = document.getElementById("app") as HTMLDivElement;

      let importNode = document.importNode(this.templateElement.content, true);
      this.element = importNode.firstElementChild! as HTMLFormElement;
      this.element.id = `${this.type}-projects`;
      this.element.addEventListener(
        "dragstart",
        this.dragLeaveHandler.bind(this)
      );
      this.element.addEventListener("dragend", this.dragOverHandler.bind(this));
      this.element.addEventListener("dragend", this.dropHandler.bind(this));
      projectState.addListener((projects: any[]) => {
        this.assignedProjects = projects;
        let relevantProjects = projects.filter((el) => {
          if (this.type === "active") {
            return el.status === "active";
          }
          return el.status === "finished";
        });
        this.assignedProjects = relevantProjects;
        this.renderProjects();
      });
      this.renderContent();
      this.attach();
    }
    renderProjects() {
      let listEl = document.getElementById(this.type)!;
      listEl.innerHTML = "";
      for (let item of this.assignedProjects) {
        new ProjectItem(item, listEl);
      }
    }
    attach() {
      this.wherePutElement.insertAdjacentElement("beforeend", this.element);
    }
    dragOverHandler(event: DragEvent) {
      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        let listEl = this.element.querySelector("ul");
        listEl?.classList.add("droppable");
      }
    }
    dropHandler(event: DragEvent) {
      let projectId = event.dataTransfer?.getData("text/plain")!;
      let listEl = this.element.querySelector("ul");
      listEl?.classList.remove("droppable");
      projectState.moveProject(
        projectId,
        this.type === "active" ? "finished" : "active"
      );
    }
    dragLeaveHandler(_: DragEvent) {
      let listEl = this.element.querySelector("ul");
      listEl?.classList.remove("droppable");
    }
    renderContent() {
      let listId = `${this.type}`;
      this.element.querySelector("ul")!.id = listId;
      this.element.querySelector(
        "h2"
      )!.innerText = `${this.type.toLocaleUpperCase()} PROJECTS`;
    }
  }
}
