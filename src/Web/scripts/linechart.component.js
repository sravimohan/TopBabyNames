/// <reference path="../typings/globals/core-js/index.d.ts" />
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
var NameStatisticsService_1 = require("./NameStatisticsService");
var LineChart = (function () {
    function LineChart(namerankService) {
        this.namerankService = namerankService;
    }
    LineChart.prototype.ngOnInit = function () {
        var _this = this;
        this.namerankService.getNameStatistics(this.babyName)
            .subscribe(function (nameStatistics) { return _this.nameStatistics = nameStatistics; }, function (error) { return _this.errorMessage = error; });
    };
    LineChart.prototype.ngAfterViewChecked = function () {
        if (this.nameStatistics == null)
            return;
        if (this.isAfterViewChecked)
            return;
        App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics);
        this.isAfterViewChecked = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LineChart.prototype, "babyName", void 0);
    LineChart = __decorate([
        core_1.Component({
            selector: "linechart",
            templateUrl: "/templates/linechart.html",
            providers: [NameStatisticsService_1.NameStatisticsService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameStatisticsService_1.NameStatisticsService])
    ], LineChart);
    return LineChart;
}());
exports.LineChart = LineChart;
//# sourceMappingURL=linechart.component.js.map