"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./EmployeeData/employee.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var section_component_1 = require("./section/section.component");
var employee_pipe_1 = require("./EmployeeData/employee.pipe");
var ratingCount_component_1 = require("./EmployeeData/ratingCount.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.Header, footer_component_1.Footer, section_component_1.Section, employee_component_1.EmployeeDetails, employee_pipe_1.Employeetitle, ratingCount_component_1.UserRating],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map