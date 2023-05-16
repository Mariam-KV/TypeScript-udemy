import { ProjectStatus } from "../components/project-status";
export class ProjectState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    addProject(title, description, people) {
        let newProject = {
            title,
            description,
            people,
            id: Math.random(),
            status: ProjectStatus.Active,
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
        let project = this.projects.find((el) => "" + el.id === projectId);
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
let projectState = new ProjectState();
export default projectState;
//# sourceMappingURL=projectState.js.map