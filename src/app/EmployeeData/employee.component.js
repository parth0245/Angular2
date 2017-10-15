"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeDetails = (function () {
    function EmployeeDetails() {
        this.company = null;
        this.mobile = null;
        this.feedback = null;
        this.uname = null;
        this.rating = 'positive';
        this.feedbackList = [];
        this.defaultRating = 'all';
    }
    EmployeeDetails.prototype.onRatingChange = function (ratingValue) {
        this.defaultRating = ratingValue;
    };
    EmployeeDetails.prototype.giveFeedback = function () {
        this.feedbackList.push({ company: this.company, mobile: this.mobile, feedback: this.feedback, name: this.uname, rating: this.rating });
        console.log('feedback is', this.feedbackList);
    };
    EmployeeDetails.prototype.getTotalRating = function () {
        return this.feedbackList.length;
    };
    EmployeeDetails.prototype.getPositiveRating = function () {
        return this.feedbackList.filter(function (r) { return r.rating === 'positive'; }).length;
    };
    EmployeeDetails.prototype.getNegativeRating = function () {
        return this.feedbackList.filter(function (r) { return r.rating === 'negative'; }).length;
    };
    return EmployeeDetails;
}());
EmployeeDetails = __decorate([
    core_1.Component({
        selector: 'employee',
        templateUrl: 'app/EmployeeData/employee.component.html',
    })
], EmployeeDetails);
exports.EmployeeDetails = EmployeeDetails;
//# sourceMappingURL=employee.component.js.map