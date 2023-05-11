import * as D from "../models/drag-drop-interfaces";
export default class ProjectItem implements D.Draggable {
  listItem;
  constructor(public project: any, public list: HTMLElement) {
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

    list?.appendChild(this.listItem);
    this.configure();
  }
  persons(num: number) {
    if (num === 1) return "1 person";
    return `${num} persons`;
  }
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }
  dragEndHandler(_: DragEvent) {}
  configure() {
    this.listItem.addEventListener(
      "dragstart",
      this.dragStartHandler.bind(this)
    );
    this.listItem.addEventListener("dragend", this.dragEndHandler.bind(this));
  }
}
