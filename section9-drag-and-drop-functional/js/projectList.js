import { addListener, ProjectStatus, moveProject, } from "./projectState.js";
import baseFn from "./baseFunction.js";
import projectItem from "./projectItem.js";
export default function projectList(type) {
    let assignedProjects = [];
    let [list, toApp] = baseFn("project-list", "app");
    list.id = `${type}-projects`;
    assignedProjects = [];
    addListener((projects) => {
        let relevantProject = projects.filter((prj) => {
            if (type === "active") {
                return prj.status === ProjectStatus.Active;
            }
            return prj.status === ProjectStatus.Finished;
        });
        assignedProjects = relevantProject;
        renderProjects();
    });
    attach();
    renderContent();
    list.addEventListener("dragover", dragOverHandler);
    list.addEventListener("dragleave", dragLeaveHandler);
    list.addEventListener("drop", dropHandler);
    function attach() {
        toApp === null || toApp === void 0 ? void 0 : toApp.append(list);
    }
    function renderProjects() {
        let list = document.getElementById(`${type}-projects-list`);
        list.innerHTML = "";
        for (const prjItem of assignedProjects) {
            let result = projectItem(prjItem);
            list.appendChild(result);
        }
    }
    function renderContent() {
        let listId = `${type}-projects-list`;
        let ul = list.querySelector("ul");
        ul.id = listId;
        let h2 = list.querySelector("h2");
        h2.textContent = `${type} projects`;
    }
    let listOver = list.querySelector("ul");
    function dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            listOver === null || listOver === void 0 ? void 0 : listOver.classList.add("droppable");
        }
    }
    function dropHandler(event) {
        var _a;
        let projectId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain");
        moveProject(projectId, type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    function dragLeaveHandler(_) {
        listOver === null || listOver === void 0 ? void 0 : listOver.classList.remove("droppable");
    }
}
