"use strict";
class ProjectInput {
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
        2;
        event.preventDefault();
        let inputResult = this.gatherUserInput();
        if (inputResult) {
            this.titleInputELement.value = "";
            this.descriptionInputELement.value = "";
            this.numberInputELement.value = "";
            alert("form submitted");
        }
        console.log(inputResult);
    }
    configure() {
        this.element.addEventListener("submit", this.handleSubmit.bind(this));
    }
    attach() {
        this.wherePutElement.insertAdjacentElement("afterbegin", this.element);
    }
}
new ProjectInput();
//# sourceMappingURL=app.js.map