"use strict";
class ProjectState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    addProject(title, description, people, status) {
        let newProject = {
            title,
            description,
            people,
            id: Math.random(),
            status,
        };
        this.projects.push(newProject);
        for (let listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
let projectState = new ProjectState();
class ComponentBase {
    constructor(templateElement, wherePutElement) {
        this.templateElement = templateElement;
        this.wherePutElement = wherePutElement;
        this.templateElement = templateElement;
        this.wherePutElement = wherePutElement;
    }
    attach() {
        let importNode = document.importNode(this.templateElement.content, true)
            .firstElementChild;
        this.wherePutElement.insertAdjacentElement("afterend", importNode);
        return importNode;
    }
}
class ProjectInput extends ComponentBase {
    constructor() {
        super(document.getElementById("project-input"), document.getElementById("app"));
        let importNode = this.attach();
        this.wherePutElement = importNode;
        this.title = this.wherePutElement.querySelector("#title");
        this.description = this.wherePutElement.querySelector("#description");
        this.number = this.wherePutElement.querySelector("#people");
        this.change();
    }
    gatherUserInputs() {
        let t = this.title.value;
        let d = this.description.value;
        let n = this.number.value;
        if (d.trim().length > 0 && t.trim().length > 0 && n.trim().length > 0) {
            projectState.addProject(t, d, +n, "active");
            alert("Form is submitted");
            return [t, d, +n];
        }
        else {
            let element = document.createElement("p");
            element.innerText = "Please enter correct information!";
            this.wherePutElement.insertAdjacentElement("beforeend", element);
            return;
        }
    }
    clearForm() {
        this.title.value = "";
        this.description.value = "";
        this.number.value = "";
    }
    handleSubmit(event) {
        event.preventDefault();
        let result = this.gatherUserInputs();
        if (result) {
            this.clearForm();
        }
    }
    change() {
        this.wherePutElement.id = "user-input";
        this.title.style.backgroundColor = "pink";
        this.wherePutElement.addEventListener("submit", this.handleSubmit.bind(this));
    }
}
new ProjectInput();
class ProjectListClass extends ComponentBase {
    constructor(type, item) {
        super(document.getElementById("project-list"), document.getElementById("user-input"));
        this.type = type;
        this.item = item;
        this.assignedProjects = [];
        this.renderContent(type);
        projectState.addListener((projects) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });
    }
    renderContent(type) {
        let importNode = this.attach();
        if (type === "finished") {
            importNode.id = "finished-projects";
            importNode.querySelector("h2").innerText = "Finished Projects";
            document.querySelector("ul").id = type;
        }
        else {
            importNode.querySelector("h2").innerText = "Active Projects";
            document.querySelector("ul").id = type;
        }
    }
    dragOverHandler() {
        this.item.classList.add("droppable");
        console.log(this.item, "draggging");
    }
    dropHandler(_) {
        console.log(4);
    }
    dragLeaveHandler(_) {
        console.log(3);
    }
    renderProjects() {
        var _a, _b, _c;
        if (this.type === "active") {
            let list = document.getElementById(this.type);
            let item = this.assignedProjects[this.assignedProjects.length - 1];
            let t = new CreateListItem(list, item);
            console.log(t);
            this.dragOverHandler();
            (_a = this.item) === null || _a === void 0 ? void 0 : _a.addEventListener("dragover", this.dragLeaveHandler.bind(this.item));
            (_b = this.item) === null || _b === void 0 ? void 0 : _b.addEventListener("dragleave", this.dragOverHandler.bind(this));
            (_c = this.item) === null || _c === void 0 ? void 0 : _c.addEventListener("drop", this.dropHandler.bind(this));
        }
    }
}
class CreateListItem {
    constructor(list, item) {
        this.list = list;
        this.item = item;
        this.listItem = document.createElement("li");
        this.listItem.draggable = true;
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h2.innerHTML = this.item.title;
        h3.innerHTML = this.item.description;
        p.innerHTML = this.persons(this.item.people) + " assigned";
        this.listItem.appendChild(h2);
        this.listItem.appendChild(h3);
        this.listItem.appendChild(p);
        list.appendChild(this.listItem);
        this.configure();
    }
    persons(num) {
        if (num === 1)
            return "1 person";
        return `${num} persons`;
    }
    dragStartHandler(event) {
        event.dataTransfer.setData;
        console.log("drag start", event);
    }
    dragEndHandler(event) {
        console.log("drag end", event);
    }
    configure() {
        this.listItem.addEventListener("dragstart", this.dragStartHandler.bind(this));
        this.listItem.addEventListener("dragend", this.dragEndHandler.bind(this));
    }
}
new ProjectListClass("finished");
new ProjectListClass("active");
//# sourceMappingURL=old.js.map