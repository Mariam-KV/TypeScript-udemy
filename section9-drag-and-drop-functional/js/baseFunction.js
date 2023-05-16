export default function baseFn(from, where) {
    let fromTemplate = document.getElementById(from);
    let toApp = document.getElementById(where);
    let form = fromTemplate.content.firstElementChild;
    let node = document === null || document === void 0 ? void 0 : document.importNode(form, true);
    toApp === null || toApp === void 0 ? void 0 : toApp.appendChild(node);
    return [node, toApp];
}
