abstract class Department {
  // name: string;
  // private employees: string[] = [];
  static fiscalYear = 2020
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // console.log(this.fiscalYear);
    // console.log(Department.fiscalYear);
    
  }

  static createEmploy(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfor() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmploy("Jason Derulo");

// console.log(employee1, Department.fiscalYear);

class Accounting extends Department {
  admins: string[];
  private static instance: Accounting
  
  private  constructor(id: string, admins: string[]) {
    super(id, "Acc");
    this.admins = admins;
  }

  static getInstance(){
    if (Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting('onlyAccDept', [])
    return this.instance
  }

  describe() {
    console.log("Accounting Department Id " + this.id) ;
  }
}

const accounting = Accounting.getInstance()
const accounting2 = Accounting.getInstance()
// accounting.name = 'Accounting'
// accounting.name = "Accounting";
accounting.addEmployee("Messi");
accounting.addEmployee("Jane");
accounting.describe();

console.log(accounting, accounting2);


// accounting.printEmployeeInfor();
// accounting.employees[2] = 'Kilom'
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
// console.log(accounting);

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("It Department Id " + this.id, this.employees) ;
  }
}
const It = new ITDepartment("ItId", ["selasieh"]);
It.addEmployee("james");
// It.name = 'Information and Technology'
It.addEmployee("Berlin");
It.addEmployee("Jonh");
It.describe()

// It.printEmployeeInfor();
// console.log(It);
// console.log(accounting);
// It.describe();


class Finance extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "Finance");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Finance Department ID " + this.id);
    
  }

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

// console.log(finance);
finance.addEmployee("Miles 8000");
finance.addEmployee("Precell 84738");
finance.addReport("There have been a couple of unfavorable outcomes");
finance.addReport("These people they think that we are joking");
finance.mostRecentReport = "Year End Report";
finance.addEmployee("Max");
finance.addEmployee("Drake");

// console.log(finance.mostRecentReport);
// finance.describe();
// finance.printEmployeeInfor();
// finance.getReports();
// finance.describe()