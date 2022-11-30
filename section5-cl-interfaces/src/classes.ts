class Department {
  //private ---can't be accessed from outside
  //private name: string;
  private employees: string[] = [];
  constructor(protected name: string, public id: string) {
    this.name = name;
    this.id = id;
  }
  describe(this: Department) {
    return "Department: " + this.name;
  }
  //to get a private property
  get getName() {
    return this.name;
  }
  set setName(value: string) {
    this.name = value;
  }
  addEmployee(emp: string) {
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
//let copy = { name: "dummy", describe: accounting.describe };
//console.log(copy.describe());
console.log(accounting.getName);
accounting.setName = "hello";
console.log(accounting.getName);
class ItDepartment extends Department {
  // we must use private/public if we initialize directly in a constructor
  constructor(public admin: string[]) {
    super("IT", "2");
    this.admin = admin;
  }
  describe() {
    return "it " + this.name;
  }
}
let it = new ItDepartment(["Mari"]);
it.addEmployee("Mari");
console.log(it.describe());
