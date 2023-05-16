export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
export let projects = [];
export let listeners = [];
export function addProject(title, description, people) {
    let newProject = {
        title,
        description,
        people,
        id: Math.random(),
        status: ProjectStatus.Active,
    };
    for (let listenerFn of listeners) {
        listenerFn(projects.slice());
    }
    projects.push(newProject);
    updateListeners();
}
export function addListener(listenerFn) {
    listeners.push(listenerFn);
}
export function moveProject(projectId, st) {
    let project = projects.find((el) => "" + el.id === projectId);
    if (project && project.status !== st) {
        project.status = st;
        updateListeners();
    }
}
function updateListeners() {
    for (let listenerFn of listeners) {
        listenerFn(projects.slice());
    }
}
