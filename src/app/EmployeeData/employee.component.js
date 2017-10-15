"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rating_service_1 = require("./rating.service");
var EmployeeDetails = (function () {
    function EmployeeDetails(ratingService) {
        this.ratingService = ratingService;
        this.company = null;
        this.mobile = null;
        this.feedback = null;
        this.uname = null;
        this.rating = 'positive';
        this.errMsg = 'Loading Data.....';
        this.defaultRating = 'all';
    }
    EmployeeDetails.prototype.ngOnInit = function () {
        var _this = this;
        // this.feedbackList = this.ratingService.getReviews().subscribe((feedback) => this.feedbackList = feedback);
        this.ratingService.getReviews().subscribe(function (feedback) { return _this.feedbackList = feedback; }, function (error) {
            _this.errMsg = "Problem with Database";
        });
    };
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
        providers: [rating_service_1.RatingService] // Used to register the service.
    }),
    __metadata("design:paramtypes", [rating_service_1.RatingService])
], EmployeeDetails);
exports.EmployeeDetails = EmployeeDetails;
//# sourceMappingURL=employee.component.js.map