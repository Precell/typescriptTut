class Department {
  // name: string;
  // private employees: string[] = [];
  static fiscalYear = 2020
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // console.log(this.fiscalYear);
    // console.log(Department.fiscalYear);
    
  }

  static createEmploy(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name} `);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfor() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmploy("Jason Derulo");

console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const accounting = new ITDepartment("teys", ["selasieh"]);
accounting.name = "accounting";
accounting.addEmployee("Messi");
accounting.addEmployee("Jane");
accounting.printEmployeeInfor();

// accounting.employees[2] = 'Kilom'
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();

// console.log(accounting);
accounting.describe();
const It = new ITDepartment("d1231", ["selasieh"]);
It.addEmployee("james");
It.addEmployee("Berlin");
It.printEmployeeInfor();

console.log(It);
// console.log(accounting);
It.describe();

class Finance extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Finance");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name == "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  getReports() {
    console.log(this.reports);
  }
}

const finance = new Finance("123test123", []);

console.log(finance);
finance.addEmployee("Miles 8000");
finance.addEmployee("Precell 84738");
finance.addReport("There have been a couple of unfavorable outcomes");
finance.addReport("These people they think that we are joking");
finance.mostRecentReport = "Year End Report";
console.log(finance.mostRecentReport);

finance.addEmployee("Max");
finance.addEmployee("Drake");

finance.describe();
finance.printEmployeeInfor();
finance.getReports();
