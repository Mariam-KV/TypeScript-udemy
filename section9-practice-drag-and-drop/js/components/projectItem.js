var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import autobind from "./autobind";
export default class ProjectItem {
    constructor(project, list) {
        this.project = project;
        this.list = list;
        this.listItem = document.createElement("li");
        this.listItem.draggable = true;
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h2.innerHTML = this.project.title;
        h3.innerHTML = this.project.description;
        p.innerHTML = this.persons(this.project.people) + " assigned";
        this.listItem.appendChild(h2);
        this.listItem.appendChild(h3);
        this.listItem.appendChild(p);
        this.listItem.id = "" + project.id;
        list === null || list === void 0 ? void 0 : list.appendChild(this.listItem);
        this.configure();
    }
    persons(num) {
        if (num === 1)
            return "1 person";
        return `${num} persons`;
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", "" + this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(_) { }
    configure() {
        this.listItem.addEventListener("dragstart", this.dragStartHandler);
        this.listItem.addEventListener("dragend", this.dragEndHandler);
    }
}
__decorate([
    autobind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    autobind
], ProjectItem.prototype, "dragEndHandler", null);
//# sourceMappingURL=projectItem.js.map