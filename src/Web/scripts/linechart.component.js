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
        this.title = "Top Baby Names";
        this.name = "Tom";
    }
    LineChart.prototype.ngOnInit = function () {
        var _this = this;
        this.namerankService.getNameStatistics(this.name)
            .subscribe(function (nameStatistics) { return _this.nameStatistics = nameStatistics; }, function (error) { return _this.errorMessage = error; });
    };
    LineChart.prototype.ngAfterViewChecked = function () {
        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13], [14, 8], [18, 5], [19, 13]];
        var d3 = [
            [1952, 1997], [1953, 2083], [1954, 2199], [1955, 2423], [1956, 2931], [1957, 2868], [1958, 2697],
            [1959, 2429], [1960, 2335], [1961, 2274], [1962, 2080], [1963, 2038], [1964, 1938], [1965, 1752], [1966, 1714],
            [1967, 1596], [1968, 1521], [1969, 1500], [1970, 1340], [1971, 1306], [1972, 1197], [1973, 980], [1974, 1002],
            [1975, 845], [1976, 726], [1977, 714], [1978, 786], [1979, 888], [1980, 794], [1981, 824], [1982, 742], [1983, 708],
            [1984, 670], [1985, 553], [1986, 531], [1987, 462], [1988, 454], [1989, 413], [1990, 375], [1991, 372],
            [1992, 317], [1993, 284], [1994, 304], [1995, 254], [1996, 233], [1998, 156], [1999, 166], [2000, 124],
            [2001, 141], [2002, 121], [2004, 129], [2005, 109], [2006, 98]
        ];
        App.chartsetup("#chartplaceholder2", d3);
    };
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