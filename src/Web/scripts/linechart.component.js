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
var NameRankService_1 = require("./NameRankService");
var LineChart = (function () {
    function LineChart(_namerankService) {
        this._namerankService = _namerankService;
    }
    Object.defineProperty(LineChart.prototype, "nameStatistics", {
        get: function () {
            return this._nameStatistics;
        },
        set: function (nameStatistics) {
            this._nameStatistics = nameStatistics;
            App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineChart.prototype, "babyName", {
        get: function () {
            return this._babyName;
        },
        set: function (babyName) {
            if (this._babyName === babyName)
                return;
            this._babyName = babyName;
            this.showChart();
        },
        enumerable: true,
        configurable: true
    });
    LineChart.prototype.showChart = function () {
        var _this = this;
        if (!this.babyName)
            return;
        this._namerankService.getNameStatistics(this.babyName)
            .subscribe(function (nameStatistics) { return _this.nameStatistics = nameStatistics; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LineChart.prototype, "babyName", null);
    LineChart = __decorate([
        core_1.Component({
            selector: "linechart",
            templateUrl: "/templates/linechart.html",
            providers: [NameRankService_1.NameRankService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], LineChart);
    return LineChart;
}());
exports.LineChart = LineChart;
//# sourceMappingURL=linechart.component.js.map