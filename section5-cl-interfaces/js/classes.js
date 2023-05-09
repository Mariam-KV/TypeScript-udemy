class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        return "Department: " + this.name;
    }
    get getName() {
        return this.name;
    }
    set setName(value) {
        this.name = value;
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployees() {
    }
}
let accounting = new Department("accounting", "1");
accounting.addEmployee("Mari");
accounting.addEmployee("Koka");
accounting.printEmployees();
class ItDepartment {
    constructor(admin, name, id) {
        this.admin = admin;
        this.name = name;
        this.id = id;
        this.admin = admin;
        this.name = name;
        this.id = id;
    }
    get describe() {
        return (this.id = "gfgfg");
    }
    de() {
        return (this.id = "id");
    }
}
let g = new ItDepartment(["me"], "me", "dgffh");
console.log(g.describe);
console.log(g.de());
console.log(g);
