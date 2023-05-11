export class ProjectState {
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
export let projectState = new ProjectState();
