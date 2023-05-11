(()=>{"use strict";const e=new class{constructor(){this.projects=[],this.listeners=[]}addProject(e,t,s,i){let n={title:e,description:t,people:s,id:Math.random(),status:i};for(let e of this.listeners)e(this.projects.slice());this.projects.push(n),this.updateListeners()}addListener(e){this.listeners.push(e)}moveProject(e,t){let s=this.projects.find((t=>t.id==e));s&&s.status!==t&&(s.status=t,this.updateListeners())}updateListeners(){for(let e of this.listeners)e(this.projects.slice())}};class t{constructor(e,t){this.project=e,this.list=t,this.listItem=document.createElement("li"),this.listItem.draggable=!0;let s=document.createElement("h2"),i=document.createElement("h3"),n=document.createElement("p");s.innerHTML=this.project.title,i.innerHTML=this.project.description,n.innerHTML=this.persons(this.project.people)+" assigned",this.listItem.appendChild(s),this.listItem.appendChild(i),this.listItem.appendChild(n),null==t||t.appendChild(this.listItem),this.configure()}persons(e){return 1===e?"1 person":`${e} persons`}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){}configure(){this.listItem.addEventListener("dragstart",this.dragStartHandler.bind(this)),this.listItem.addEventListener("dragend",this.dragEndHandler.bind(this))}}class s{constructor(t){this.type=t,this.assignedProjects=[],this.templateElement=document.getElementById("project-list"),this.wherePutElement=document.getElementById("app");let s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,this.element.id=`${this.type}-projects`,this.element.addEventListener("dragstart",this.dragLeaveHandler.bind(this)),this.element.addEventListener("dragend",this.dragOverHandler.bind(this)),this.element.addEventListener("dragend",this.dropHandler.bind(this)),e.addListener((e=>{this.assignedProjects=e;let t=e.filter((e=>"active"===this.type?"active"===e.status:"finished"===e.status));this.assignedProjects=t,this.renderProjects()})),this.renderContent(),this.attach()}renderProjects(){let e=document.getElementById(this.type);e.innerHTML="";for(let s of this.assignedProjects)new t(s,e)}attach(){this.wherePutElement.insertAdjacentElement("beforeend",this.element)}dragOverHandler(e){if(e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]){e.preventDefault();let t=this.element.querySelector("ul");null==t||t.classList.add("droppable")}}dropHandler(t){var s;let i=null===(s=t.dataTransfer)||void 0===s?void 0:s.getData("text/plain"),n=this.element.querySelector("ul");null==n||n.classList.remove("droppable"),e.moveProject(i,"active"===this.type?"finished":"active")}dragLeaveHandler(e){let t=this.element.querySelector("ul");null==t||t.classList.remove("droppable")}renderContent(){let e=`${this.type}`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").innerText=`${this.type.toLocaleUpperCase()} PROJECTS`}}new class{constructor(){this.templateElement=document.getElementById("project-input"),this.wherePutElement=document.getElementById("app");let e=document.importNode(this.templateElement.content,!0);this.element=e.firstElementChild,this.element.id="user-input",this.titleInputELement=this.element.querySelector("#title"),this.descriptionInputELement=this.element.querySelector("#description"),this.numberInputELement=this.element.querySelector("#people"),this.attach(),this.configure()}gatherUserInput(){let e=this.titleInputELement.value,t=this.descriptionInputELement.value,s=this.numberInputELement.value;if(e.trim().length>0&&t.trim().length>0&&s.trim().length>0)return[e,t,+s]}handleSubmit(t){t.preventDefault(),this.gatherUserInput()&&(e.addProject(this.titleInputELement.value,this.descriptionInputELement.value,+this.numberInputELement.value,"active"),this.titleInputELement.value="",this.descriptionInputELement.value="",this.numberInputELement.value="",alert("form submitted"))}configure(){this.element.addEventListener("submit",this.handleSubmit.bind(this))}attach(){this.wherePutElement.insertAdjacentElement("afterbegin",this.element)}},new s("active"),new s("finished")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlBLEVBQVksVyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9zdGF0ZS9wcm9qZWN0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdExpc3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0SW5wdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9idWlsZCBhIGNsYXNzIHdoaWNoIG1hbmFnZXMgdGhlIHN0YXRlIG9mIG91ciBhcHBsaWNhdGlvblxyXG4vL3Byb2plY3Qgc3RldGUgbWFuYWdtZW50IGNsYXNzXHJcbi8vUHJvamVjdCBTdGF0ZSBNYW5hZ2VtZW50XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIHtcclxuICBwcm9qZWN0czogYW55W10gPSBbXTtcclxuICBsaXN0ZW5lcnM6IGFueVtdID0gW107XHJcblxyXG4gIGFkZFByb2plY3QoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHBlb3BsZTogbnVtYmVyLFxyXG4gICAgc3RhdHVzOiBcImFjdGl2ZVwiIHwgXCJmaW5pc2hlZFwiXHJcbiAgKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdDogYW55ID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHBlb3BsZSxcclxuICAgICAgaWQ6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHN0YXR1cyxcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xyXG4gICAgICAvL2NvcHkgb2YgdGhhdCBhcnJheVxyXG4gICAgICBsaXN0ZW5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcihsaXN0ZW5lckZuOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZuKTtcclxuICB9XHJcbiAgbW92ZVByb2plY3QocHJvamVjdElkOiBzdHJpbmcsIHN0OiBzdHJpbmcpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChlbCkgPT4gZWwuaWQgPT0gcHJvamVjdElkKTtcclxuICAgIGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBzdCkge1xyXG4gICAgICBwcm9qZWN0LnN0YXR1cyA9IHN0O1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGRhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGxldCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKSB7XHJcbiAgICAgIC8vY29weSBvZiB0aGF0IGFycmF5XHJcbiAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxubGV0IHByb2plY3RTdGF0ZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdFN0YXRlO1xyXG4iLCJpbXBvcnQgKiBhcyBEIGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kcm9wLWludGVyZmFjZXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdEl0ZW0gaW1wbGVtZW50cyBELkRyYWdnYWJsZSB7XHJcbiAgbGlzdEl0ZW07XHJcbiAgY29uc3RydWN0b3IocHVibGljIHByb2plY3Q6IGFueSwgcHVibGljIGxpc3Q6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgIHRoaXMubGlzdEl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBoMi5pbm5lckhUTUwgPSB0aGlzLnByb2plY3QudGl0bGU7XHJcbiAgICBoMy5pbm5lckhUTUwgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICBwLmlubmVySFRNTCA9IHRoaXMucGVyc29ucyh0aGlzLnByb2plY3QucGVvcGxlKSArIFwiIGFzc2lnbmVkXCI7XHJcbiAgICB0aGlzLmxpc3RJdGVtLmFwcGVuZENoaWxkKGgyKTtcclxuICAgIHRoaXMubGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgdGhpcy5saXN0SXRlbS5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBsaXN0Py5hcHBlbmRDaGlsZCh0aGlzLmxpc3RJdGVtKTtcclxuICAgIHRoaXMuY29uZmlndXJlKCk7XHJcbiAgfVxyXG4gIHBlcnNvbnMobnVtOiBudW1iZXIpIHtcclxuICAgIGlmIChudW0gPT09IDEpIHJldHVybiBcIjEgcGVyc29uXCI7XHJcbiAgICByZXR1cm4gYCR7bnVtfSBwZXJzb25zYDtcclxuICB9XHJcbiAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRoaXMucHJvamVjdC5pZCk7XHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuICB9XHJcbiAgZHJhZ0VuZEhhbmRsZXIoXzogRHJhZ0V2ZW50KSB7fVxyXG4gIGNvbmZpZ3VyZSgpIHtcclxuICAgIHRoaXMubGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJkcmFnc3RhcnRcIixcclxuICAgICAgdGhpcy5kcmFnU3RhcnRIYW5kbGVyLmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgICB0aGlzLmxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuZHJhZ0VuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9qZWN0U3RhdGUgZnJvbSBcIi4uL3N0YXRlL3Byb2plY3RTdGF0ZVwiO1xyXG5pbXBvcnQgKiBhcyBEIGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kcm9wLWludGVyZmFjZXNcIjtcclxuaW1wb3J0ICBQcm9qZWN0SXRlbSAgZnJvbSBcIi4vcHJvamVjdEl0ZW1cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3QgaW1wbGVtZW50cyBELkRyYWdUYXJnZXQge1xyXG4gIHRlbXBsYXRlRWxlbWVudDtcclxuICB3aGVyZVB1dEVsZW1lbnQ7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgYXNzaWduZWRQcm9qZWN0czogYW55W107XHJcbiAgY29uc3RydWN0b3IocHVibGljIHR5cGU6IFwiYWN0aXZlXCIgfCBcImZpbmlzaGVkXCIpIHtcclxuICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicHJvamVjdC1saXN0XCJcclxuICAgICkgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICAgIHRoaXMud2hlcmVQdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgbGV0IGltcG9ydE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsIHRydWUpO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gaW1wb3J0Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCEgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LmlkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0c2A7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJkcmFnc3RhcnRcIixcclxuICAgICAgdGhpcy5kcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5kcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IGFueVtdKSA9PiB7XHJcbiAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IHByb2plY3RzO1xyXG4gICAgICBsZXQgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImFjdGl2ZVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gZWwuc3RhdHVzID09PSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWwuc3RhdHVzID09PSBcImZpbmlzaGVkXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xyXG4gICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gICAgdGhpcy5hdHRhY2goKTtcclxuICB9XHJcbiAgcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICBsZXQgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50eXBlKSE7XHJcbiAgICBsaXN0RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XHJcbiAgICAgIG5ldyBQcm9qZWN0SXRlbShpdGVtLCBsaXN0RWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhdHRhY2goKSB7XHJcbiAgICB0aGlzLndoZXJlUHV0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhpcy5lbGVtZW50KTtcclxuICB9XHJcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSBcInRleHQvcGxhaW5cIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgICAgbGlzdEVsPy5jbGFzc0xpc3QuYWRkKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICBsZXQgcHJvamVjdElkID0gZXZlbnQuZGF0YVRyYW5zZmVyPy5nZXREYXRhKFwidGV4dC9wbGFpblwiKSE7XHJcbiAgICBsZXQgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgIGxpc3RFbD8uY2xhc3NMaXN0LnJlbW92ZShcImRyb3BwYWJsZVwiKTtcclxuICAgIHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChcclxuICAgICAgcHJvamVjdElkLFxyXG4gICAgICB0aGlzLnR5cGUgPT09IFwiYWN0aXZlXCIgPyBcImZpbmlzaGVkXCIgOiBcImFjdGl2ZVwiXHJcbiAgICApO1xyXG4gIH1cclxuICBkcmFnTGVhdmVIYW5kbGVyKF86IERyYWdFdmVudCkge1xyXG4gICAgbGV0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICBsaXN0RWw/LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XHJcbiAgfVxyXG4gIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICBsZXQgbGlzdElkID0gYCR7dGhpcy50eXBlfWA7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImgyXCJcclxuICAgICkhLmlubmVyVGV4dCA9IGAke3RoaXMudHlwZS50b0xvY2FsZVVwcGVyQ2FzZSgpfSBQUk9KRUNUU2A7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RMaXN0XCI7XHJcbmltcG9ydCBQcm9qZWN0SW5wdXQgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0SW5wdXRcIjtcclxubmV3IFByb2plY3RJbnB1dCgpO1xyXG5uZXcgUHJvamVjdExpc3QoXCJhY3RpdmVcIik7XHJcbm5ldyBQcm9qZWN0TGlzdChcImZpbmlzaGVkXCIpO1xyXG4iLCJpbXBvcnQgcHJvamVjdFN0YXRlIGZyb20gXCIuLi9zdGF0ZS9wcm9qZWN0U3RhdGVcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdElucHV0IHtcclxuICB0ZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgd2hlcmVQdXRFbGVtZW50O1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHRpdGxlSW5wdXRFTGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGRlc2NyaXB0aW9uSW5wdXRFTGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG51bWJlcklucHV0RUxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicHJvamVjdC1pbnB1dFwiXHJcbiAgICApIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLndoZXJlUHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGxldCBpbXBvcnROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LCB0cnVlKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgIHRoaXMuZWxlbWVudC5pZCA9IFwidXNlci1pbnB1dFwiO1xyXG4gICAgdGhpcy50aXRsZUlucHV0RUxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpITtcclxuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVMZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKSE7XHJcbiAgICB0aGlzLm51bWJlcklucHV0RUxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blb3BsZVwiKSE7XHJcbiAgICB0aGlzLmF0dGFjaCgpO1xyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICB9XHJcbiAgZ2F0aGVyVXNlcklucHV0KCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB8IHZvaWQge1xyXG4gICAgbGV0IHRpdGxlID0gdGhpcy50aXRsZUlucHV0RUxlbWVudC52YWx1ZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVMZW1lbnQudmFsdWU7XHJcbiAgICBsZXQgbnVtYmVyID0gdGhpcy5udW1iZXJJbnB1dEVMZW1lbnQudmFsdWU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRpdGxlLnRyaW0oKS5sZW5ndGggPiAwICYmXHJcbiAgICAgIGRlc2NyaXB0aW9uLnRyaW0oKS5sZW5ndGggPiAwICYmXHJcbiAgICAgIG51bWJlci50cmltKCkubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBbdGl0bGUsIGRlc2NyaXB0aW9uLCArbnVtYmVyXTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpbnB1dFJlc3VsdCA9IHRoaXMuZ2F0aGVyVXNlcklucHV0KCk7XHJcbiAgICBpZiAoaW5wdXRSZXN1bHQpIHtcclxuICAgICAgcHJvamVjdFN0YXRlLmFkZFByb2plY3QoXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0RUxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFTGVtZW50LnZhbHVlLFxyXG4gICAgICAgICt0aGlzLm51bWJlcklucHV0RUxlbWVudC52YWx1ZSxcclxuICAgICAgICBcImFjdGl2ZVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnRpdGxlSW5wdXRFTGVtZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RUxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHRoaXMubnVtYmVySW5wdXRFTGVtZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgYWxlcnQoXCJmb3JtIHN1Ym1pdHRlZFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uZmlndXJlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIGF0dGFjaCgpIHtcclxuICAgIHRoaXMud2hlcmVQdXRFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdGhpcy5lbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb2plY3RzIiwibGlzdGVuZXJzIiwiYWRkUHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZW9wbGUiLCJzdGF0dXMiLCJuZXdQcm9qZWN0IiwiaWQiLCJNYXRoIiwicmFuZG9tIiwibGlzdGVuZXJGbiIsInRoaXMiLCJzbGljZSIsInB1c2giLCJ1cGRhdGVMaXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsIm1vdmVQcm9qZWN0IiwicHJvamVjdElkIiwic3QiLCJwcm9qZWN0IiwiZmluZCIsImVsIiwiUHJvamVjdEl0ZW0iLCJjb25zdHJ1Y3RvciIsImxpc3QiLCJsaXN0SXRlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRyYWdnYWJsZSIsImgyIiwiaDMiLCJwIiwiaW5uZXJIVE1MIiwicGVyc29ucyIsImFwcGVuZENoaWxkIiwiY29uZmlndXJlIiwibnVtIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcmFnRW5kSGFuZGxlciIsIl8iLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsIlByb2plY3RMaXN0IiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndoZXJlUHV0RWxlbWVudCIsImltcG9ydE5vZGUiLCJjb250ZW50IiwiZWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiZHJhZ0xlYXZlSGFuZGxlciIsImRyYWdPdmVySGFuZGxlciIsImRyb3BIYW5kbGVyIiwicmVsZXZhbnRQcm9qZWN0cyIsImZpbHRlciIsInJlbmRlclByb2plY3RzIiwicmVuZGVyQ29udGVudCIsImF0dGFjaCIsImxpc3RFbCIsIml0ZW0iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ0eXBlcyIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImdldERhdGEiLCJyZW1vdmUiLCJsaXN0SWQiLCJpbm5lclRleHQiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInRpdGxlSW5wdXRFTGVtZW50IiwiZGVzY3JpcHRpb25JbnB1dEVMZW1lbnQiLCJudW1iZXJJbnB1dEVMZW1lbnQiLCJnYXRoZXJVc2VySW5wdXQiLCJ2YWx1ZSIsIm51bWJlciIsInRyaW0iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=