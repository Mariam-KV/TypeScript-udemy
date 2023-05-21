var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import projectState from "../state/projectState";
import autobind from "./autobind";
export default class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.wherePutElement = document.getElementById("app");
        let importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputELement = this.element.querySelector("#title");
        this.descriptionInputELement = this.element.querySelector("#description");
        this.numberInputELement = this.element.querySelector("#people");
        this.attach();
        this.configure();
    }
    gatherUserInput() {
        let title = this.titleInputELement.value;
        let description = this.descriptionInputELement.value;
        let number = this.numberInputELement.value;
        if (title.trim().length > 0 &&
            description.trim().length > 0 &&
            number.trim().length > 0) {
            return [title, description, +number];
        }
        return;
    }
    handleSubmit(event) {
        event.preventDefault();
        let inputResult = this.gatherUserInput();
        if (inputResult) {
            projectState.addProject(this.titleInputELement.value, this.descriptionInputELement.value, +this.numberInputELement.value);
            this.titleInputELement.value = "";
            this.descriptionInputELement.value = "";
            this.numberInputELement.value = "";
        }
        else
            alert("Data is not correct!");
    }
    configure() {
        this.element.addEventListener("submit", this.handleSubmit);
    }
    attach() {
        this.wherePutElement.insertAdjacentElement("afterbegin", this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "handleSubmit", null);
//# sourceMappingURL=projectInput.js.map