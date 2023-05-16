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
        this.listItem.addEventListener("dragstart", this.dragStartHandler.bind(this));
        this.listItem.addEventListener("dragend", this.dragEndHandler.bind(this));
    }
}
//# sourceMappingURL=projectItem.js.map