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
var NameRankService_1 = require("./NameRankService");
var TopNamesPieChart = (function () {
    function TopNamesPieChart(_namerankService) {
        this._namerankService = _namerankService;
    }
    Object.defineProperty(TopNamesPieChart.prototype, "nameStatistics", {
        get: function () {
            return this._nameStatistics;
        },
        set: function (nameStatistics) {
            this._nameStatistics = nameStatistics;
            App.topNamesPieChartInit(this.chartPlaceHolder, this._nameStatistics);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNamesPieChart.prototype, "sex", {
        set: function (sex) {
            this._sex = sex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNamesPieChart.prototype, "sexDescription", {
        get: function () {
            return this._sex === "g" ? "Girl" : "Boy";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNamesPieChart.prototype, "chartPlaceHolder", {
        get: function () {
            return "TopNamesPieChart" + this._sex;
        },
        enumerable: true,
        configurable: true
    });
    TopNamesPieChart.prototype.ngOnInit = function () {
        var _this = this;
        this._namerankService.getNamesByRank(1, this._sex)
            .subscribe(function (nameStatistics) { return _this.nameStatistics = nameStatistics; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TopNamesPieChart.prototype, "nameStatistics", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TopNamesPieChart.prototype, "sex", null);
    TopNamesPieChart = __decorate([
        core_1.Component({
            selector: "topnames-piechart",
            templateUrl: "/templates/topnames-piechart.html",
            providers: [NameRankService_1.NameRankService]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], TopNamesPieChart);
    return TopNamesPieChart;
}());
exports.TopNamesPieChart = TopNamesPieChart;
//# sourceMappingURL=topnames-piechart.component.js.map