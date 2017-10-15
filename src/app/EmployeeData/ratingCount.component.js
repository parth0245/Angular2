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
var UserRating = (function () {
    function UserRating() {
        this.selectedRating = 'all';
        this.changeRating = new core_1.EventEmitter();
    }
    UserRating.prototype.changeUserRating = function () {
        this.changeRating.emit(this.selectedRating);
    };
    return UserRating;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserRating.prototype, "changeRating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UserRating.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UserRating.prototype, "positive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UserRating.prototype, "negative", void 0);
UserRating = __decorate([
    core_1.Component({
        selector: 'rating',
        templateUrl: 'app/EmployeeData/ratingCount.component.html'
    })
], UserRating);
exports.UserRating = UserRating;
//# sourceMappingURL=ratingCount.component.js.map