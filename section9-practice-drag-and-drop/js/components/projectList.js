var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import projectState from "../state/projectState";
import ProjectItem from "./projectItem";
import { ProjectStatus } from "./project-status";
import autobind from "./autobind";
export default class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateElement = document.getElementById("project-list");
        this.wherePutElement = document.getElementById("app");
        let importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        projectState.addListener((projects) => {
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
        this.list = document.getElementById(`${this.type}-projects-list`);
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
    dragOverHandler(event) {
        var _a;
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.classList.add("droppable");
        }
    }
    dropHandler(event) {
        var _a;
        let projectId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain");
        projectState.moveProject(projectId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    dragLeaveHandler(_) {
        this.list.classList.remove("droppable");
    }
    renderContent() {
        let listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").innerText = `${this.type.toLocaleUpperCase()} PROJECTS`;
    }
}
__decorate([
    autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dragLeaveHandler", null);
//# sourceMappingURL=projectList.js.map