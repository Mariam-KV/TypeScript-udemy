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
        for (let listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
        this.projects.push(newProject);
        this.updateListeners();
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    moveProject(projectId, st) {
        let project = this.projects.find((el) => el.id == projectId);
        if (project && project.status !== st) {
            project.status = st;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (let listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
var App;
(function (App) {
    class ProjectItem {
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
            list === null || list === void 0 ? void 0 : list.appendChild(this.listItem);
            this.configure();
        }
        persons(num) {
            if (num === 1)
                return "1 person";
            return `${num} persons`;
        }
        dragStartHandler(event) {
            event.dataTransfer.setData("text/plain", this.project.id);
            event.dataTransfer.effectAllowed = "move";
        }
        dragEndHandler(_) { }
        configure() {
            this.listItem.addEventListener("dragstart", this.dragStartHandler.bind(this));
            this.listItem.addEventListener("dragend", this.dragEndHandler.bind(this));
        }
    }
    App.ProjectItem = ProjectItem;
})(App || (App = {}));
var App;
(function (App) {
    class ProjectList {
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
                new App.ProjectItem(item, listEl);
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
    App.ProjectList = ProjectList;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus["Active"] = "active";
        ProjectStatus["Finished"] = "finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
})(App || (App = {}));
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
let projectState = new ProjectState();
var App;
(function (App) {
    class ProjectInput {
        constructor() {
            this.templateElement = document.getElementById("project-input");
            this.wherePutElement = document.getElementById("app");
            let importNode = document.importNode(this.templateElement.content, true);
            this.element = importNode.firstElementChild;
            this.element.id = "user-input";
            this.titleInputELement = this.element.querySelector("#title");
            this.descriptionInputELement =
                this.element.querySelector("#description");
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
                projectState.addProject(this.titleInputELement.value, this.descriptionInputELement.value, +this.numberInputELement.value, "active");
                this.titleInputELement.value = "";
                this.descriptionInputELement.value = "";
                this.numberInputELement.value = "";
                alert("form submitted");
            }
        }
        configure() {
            this.element.addEventListener("submit", this.handleSubmit.bind(this));
        }
        attach() {
            this.wherePutElement.insertAdjacentElement("afterbegin", this.element);
        }
    }
    new ProjectInput();
    new App.ProjectList("active");
    new App.ProjectList("finished");
})(App || (App = {}));
