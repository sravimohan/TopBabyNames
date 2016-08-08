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
/// <reference path="../typings/globals/core-js/index.d.ts" />
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/operator/map");
require("rxjs/Rx");
var NameRankService = (function () {
    function NameRankService(http) {
        this.http = http;
    }
    NameRankService.prototype.getAllNames = function () {
        return this.http.get("api/GetAllNames")
            .map(function (response) { return response.json(); });
    };
    NameRankService.prototype.getNameRanks = function (year, sex) {
        return this.http.get("api/GetByYear?year=" + year + "&sex=" + sex)
            .map(function (response) { return response.json(); });
    };
    NameRankService.prototype.getNameStatistics = function (name) {
        return this.http.get("api/GetStatsByName?name=" + name)
            .map(function (response) { return response.json(); });
    };
    NameRankService.prototype.getNameDetails = function (name) {
        return this.http.get("api/GetByName?name=" + name)
            .map(function (response) { return response.json(); });
    };
    NameRankService.prototype.getTopNames = function (sex) {
        return this.http.get("api/GetTopNames?sex=" + sex)
            .map(function (response) { return response.json(); });
    };
    NameRankService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    NameRankService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameRankService);
    return NameRankService;
}());
exports.NameRankService = NameRankService;
//# sourceMappingURL=NameRankService.js.map