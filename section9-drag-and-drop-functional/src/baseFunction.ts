export default function baseFn(from: string, where: string) {
  let fromTemplate = document.getElementById(from) as HTMLTemplateElement;
  let toApp = document.getElementById(where) as HTMLDivElement;
  let form = fromTemplate.content.firstElementChild! as HTMLElement;
  let node = document?.importNode(form, true);
  toApp?.appendChild(node);
  return [node, toApp];
}
