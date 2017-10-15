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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var RatingService = (function () {
    function RatingService(http) {
        this.http = http;
    }
    RatingService.prototype.getReviews = function () {
        /*return [
            {company:"Nokia",mobile:"Nokia 6",feedback:"good",name:"Parth",rating:"positive"},
            {company:"samsung",mobile:"galaxy 6",feedback:"bad",name:"payas",rating:"negative"},
            {company:"HTC",mobile:"butterfly",feedback:"good",name:"Parth",rating:"positive"}
        ]*/
        return this.http.get("http://demo7430966.mockable.io/ratingList")
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    RatingService.prototype.error = function (error) {
        console.error('error');
        return Observable_1.Observable.throw(error); // this throws the error back as there is no way to do
    };
    return RatingService;
}());
RatingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map