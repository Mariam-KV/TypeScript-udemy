// Code goes here!

// let templateElement = document.getElementById(
//   "project-input"
// ) as HTMLTemplateElement;
// let wherePutElement = document.getElementById("app") as HTMLDivElement;
// wherePutElement.innerHTML = templateElement.innerHTML;

// same

//Drag & Drop Interfaces
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

//Project Type

type ProjectType = {
  title: string;
  description: string;
  people: number;
  id: number;
  status: "active" | "finished";
};

//build a class which manages the state of our application
//project stete managment class
//Project State Management

class ProjectState {
  projects: ProjectType[] = [];
  listeners: any[] = [];
  addProject(
    title: string,
    description: string,
    people: number,
    status: "active" | "finished"
  ) {
    let newProject: ProjectType = {
      title,
      description,
      people,
      id: Math.random(),
      status,
    };
    this.projects.push(newProject);
    for (let listenerFn of this.listeners) {
      //copy of that array
      listenerFn(this.projects.slice());
    }
  }
  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }
}

let projectState = new ProjectState();

//Component Base Class

class ComponentBase {
  constructor(
    public templateElement: HTMLTemplateElement,
    public wherePutElement: HTMLDivElement
  ) {
    this.templateElement = templateElement;
    this.wherePutElement = wherePutElement;
  }
  attach() {
    let importNode = document.importNode(this.templateElement.content, true)
      .firstElementChild as HTMLDivElement;
    this.wherePutElement.insertAdjacentElement(
      "afterend",
      importNode
    ) as HTMLDivElement;
    return importNode;
  }
}
class ProjectInput extends ComponentBase {
  title: HTMLInputElement;
  description: HTMLInputElement;
  number: HTMLInputElement;
  constructor() {
    super(
      document.getElementById("project-input") as HTMLTemplateElement,
      document.getElementById("app") as HTMLInputElement
    );
    let importNode = this.attach();
    this.wherePutElement = importNode;
    this.title = this.wherePutElement.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.description = this.wherePutElement.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.number = this.wherePutElement.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.change();
  }

  gatherUserInputs(): [string, string, number] | void {
    let t = this.title.value;
    let d = this.description.value;
    let n = this.number.value;
    if (d.trim().length > 0 && t.trim().length > 0 && n.trim().length > 0) {
      //if form was submitted -->clear form
      projectState.addProject(t, d, +n, "active");
      alert("Form is submitted");
      return [t, d, +n];
    } else {
      //if form wasn't submitted -->adding a paragraph
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
  handleSubmit(event: Event) {
    event.preventDefault();
    let result = this.gatherUserInputs();
    if (result) {
      this.clearForm();
    }
  }
  change() {
    //adding css style

    this.wherePutElement.id = "user-input";

    this.title.style.backgroundColor = "pink";
    this.wherePutElement.addEventListener(
      "submit",
      //we need bing method to this / otherwise it points at eventlistener  ?
      this.handleSubmit.bind(this)
    );
  }
}
new ProjectInput();

class ProjectListClass extends ComponentBase implements DragTarget {
  assignedProjects: any[];
  constructor(public type: "active" | "finished", public item?: HTMLLIElement) {
    super(
      document.getElementById("project-list") as HTMLTemplateElement,
      document.getElementById("user-input") as HTMLDivElement
    );
    this.assignedProjects = [];

    this.renderContent(type);

    projectState.addListener((projects: ProjectType[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    });
  }
  renderContent(type: string) {
    let importNode = this.attach();
    if (type === "finished") {
      importNode.id = "finished-projects";
      importNode.querySelector("h2")!.innerText = "Finished Projects";
      document.querySelector("ul")!.id = type;
    } else {
      importNode.querySelector("h2")!.innerText = "Active Projects";
      document.querySelector("ul")!.id = type;
    }
  }
  dragOverHandler() {
    this.item!.classList.add("droppable");
    console.log(this.item, "draggging");
  }
  dropHandler(_: DragEvent) {
    console.log(4);
  }
  dragLeaveHandler(_: DragEvent) {
    console.log(3);
  }
  renderProjects() {
    // let createdItem: HTMLLIElement;
    if (this.type === "active") {
      let list = document.getElementById(this.type) as HTMLUListElement;
      let item = this.assignedProjects[this.assignedProjects.length - 1];
      let t = new CreateListItem(list, item);
      console.log(t);
      this.dragOverHandler();
      this.item?.addEventListener(
        "dragover",
        this.dragLeaveHandler.bind(this.item)
      );
      this.item?.addEventListener("dragleave", this.dragOverHandler.bind(this));
      this.item?.addEventListener("drop", this.dropHandler.bind(this));
    }
  }
}
class CreateListItem implements Draggable {
  listItem = document.createElement("li") as HTMLLIElement;

  constructor(public list: HTMLUListElement, public item: ProjectType) {
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
  persons(num: number) {
    if (num === 1) return "1 person";
    return `${num} persons`;
  }
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData;
    console.log("drag start", event);
  }
  dragEndHandler(event: DragEvent): void {
    console.log("drag end", event);
  }

  configure() {
    this.listItem.addEventListener(
      "dragstart",
      this.dragStartHandler.bind(this)
    );
    this.listItem.addEventListener("dragend", this.dragEndHandler.bind(this));
  }
}
new ProjectListClass("finished");
new ProjectListClass("active");
