// export default function projectState() {
export enum ProjectStatus {
  Active,
  Finished,
}
export interface Project {
  description: string;
  id: number;
  people: number;
  status: ProjectStatus;
  title: string;
}
type Listener = (items: Project[]) => void;
export let projects: Project[] = [];
export let listeners: Listener[] = [];
export function addProject(title: string, description: string, people: number) {
  let newProject: Project = {
    title,
    description,
    people,
    id: Math.random(),
    status: ProjectStatus.Active,
  };

  for (let listenerFn of listeners) {
    //copy of that array
    listenerFn(projects.slice());
  }
  projects.push(newProject);
  updateListeners();
}
export function addListener(listenerFn: Listener) {
  listeners.push(listenerFn);
}
export function moveProject(projectId: string, st: ProjectStatus) {
  let project = projects.find((el) => "" + el.id === projectId);
  if (project && project.status !== st) {
    project.status = st;
    updateListeners();
  }
}
function updateListeners() {
  for (let listenerFn of listeners) {
    //copy of that array
    listenerFn(projects.slice());
  }
}
