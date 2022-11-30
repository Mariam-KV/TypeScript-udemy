"use strict";
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
        console.log(this.employees);
    }
}
let accounting = new Department("accounting", "1");
accounting.addEmployee("Mari");
accounting.addEmployee("Koka");
accounting.printEmployees();
console.log(accounting.describe());
console.log(accounting.getName);
accounting.setName = "hello";
console.log(accounting.getName);
class ItDepartment extends Department {
    constructor(admin) {
        super("IT", "2");
        this.admin = admin;
        this.admin = admin;
    }
    describe() {
        return "it " + this.name;
    }
}
let it = new ItDepartment(["Mari"]);
it.addEmployee("Mari");
console.log(it.describe());
//# sourceMappingURL=classes.js.map