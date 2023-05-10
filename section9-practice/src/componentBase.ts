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
