import { projectState } from "./projectState.js";
import { ProjectItem } from "./projectItem.js";
export class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateElement = document.getElementById("project-list");
        this.wherePutElement = document.getElementById("app");
        let importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.element.addEventListener("dragstart", this.dragLeaveHandler.bind(this));
        this.element.addEventListener("dragend", this.dragOverHandler.bind(this));
        this.element.addEventListener("dragend", this.dropHandler.bind(this));
        projectState.addListener((projects) => {
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
        let listEl = document.getElementById(this.type);
        listEl.innerHTML = "";
        for (let item of this.assignedProjects) {
            new ProjectItem(item, listEl);
        }
    }
    attach() {
        this.wherePutElement.insertAdjacentElement("beforeend", this.element);
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            let listEl = this.element.querySelector("ul");
            listEl === null || listEl === void 0 ? void 0 : listEl.classList.add("droppable");
        }
    }
    dropHandler(event) {
        var _a;
        let projectId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain");
        let listEl = this.element.querySelector("ul");
        listEl === null || listEl === void 0 ? void 0 : listEl.classList.remove("droppable");
        projectState.moveProject(projectId, this.type === "active" ? "finished" : "active");
    }
    dragLeaveHandler(_) {
        let listEl = this.element.querySelector("ul");
        listEl === null || listEl === void 0 ? void 0 : listEl.classList.remove("droppable");
    }
    renderContent() {
        let listId = `${this.type}`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").innerText = `${this.type.toLocaleUpperCase()} PROJECTS`;
    }
}
