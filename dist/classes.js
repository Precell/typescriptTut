"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        // this.name = n;
        // console.log(this.fiscalYear);
        // console.log(Department.fiscalYear);
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmploy = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department(".concat(this.id, "): ").concat(this.name, " "));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfor = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // name: string;
    // private employees: string[] = [];
    Department.fiscalYear = 2020;
    return Department;
}());
var employee1 = Department.createEmploy("Jason Derulo");
console.log(employee1, Department.fiscalYear);
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var accounting = new ITDepartment("teys", ["selasieh"]);
accounting.name = "accounting";
accounting.addEmployee("Messi");
accounting.addEmployee("Jane");
accounting.printEmployeeInfor();
// accounting.employees[2] = 'Kilom'
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
// console.log(accounting);
accounting.describe();
var It = new ITDepartment("d1231", ["selasieh"]);
It.addEmployee("james");
It.addEmployee("Berlin");
It.printEmployeeInfor();
console.log(It);
// console.log(accounting);
It.describe();
var Finance = /** @class */ (function (_super) {
    __extends(Finance, _super);
    function Finance(id, reports) {
        var _this = _super.call(this, id, "Finance") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(Finance.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    Finance.prototype.addEmployee = function (name) {
        if (name == "Max") {
            return;
        }
        this.employees.push(name);
    };
    Finance.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    Finance.prototype.getReports = function () {
        console.log(this.reports);
    };
    return Finance;
}(Department));
var finance = new Finance("123test123", []);
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
