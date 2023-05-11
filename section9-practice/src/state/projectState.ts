//build a class which manages the state of our application
//project stete managment class
//Project State Management

export class ProjectState {
  projects: any[] = [];
  listeners: any[] = [];

  addProject(
    title: string,
    description: string,
    people: number,
    status: "active" | "finished"
  ) {
    let newProject: any = {
      title,
      description,
      people,
      id: Math.random(),
      status,
    };

    for (let listenerFn of this.listeners) {
      //copy of that array
      listenerFn(this.projects.slice());
    }
    this.projects.push(newProject);
    this.updateListeners();
  }
  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }
  moveProject(projectId: string, st: string) {
    let project = this.projects.find((el) => el.id == projectId);
    if (project && project.status !== st) {
      project.status = st;
      this.updateListeners();
    }
  }
  updateListeners() {
    for (let listenerFn of this.listeners) {
      //copy of that array
      listenerFn(this.projects.slice());
    }
  }
}
let projectState = new ProjectState();
export default projectState;
