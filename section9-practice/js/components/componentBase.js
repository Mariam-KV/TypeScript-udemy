"use strict";
class ComponentBase {
    constructor(templateElement, wherePutElement) {
        this.templateElement = templateElement;
        this.wherePutElement = wherePutElement;
        this.templateElement = templateElement;
        this.wherePutElement = wherePutElement;
    }
    attach() {
        let importNode = document.importNode(this.templateElement.content, true)
            .firstElementChild;
        this.wherePutElement.insertAdjacentElement("afterend", importNode);
        return importNode;
    }
}
