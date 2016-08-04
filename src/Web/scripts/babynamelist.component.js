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
var BabyNameList = (function () {
    function BabyNameList(namerankService) {
        this.namerankService = namerankService;
    }
    BabyNameList.prototype.ngOnInit = function () {
        var _this = this;
        this.namerankService.getAllNames()
            .subscribe(function (allNames) { return _this.allNames = allNames; }, function (error) { return _this.errorMessage = error; });
    };
    BabyNameList.prototype.ngAfterViewChecked = function () {
        if (this.isAfterViewChecked)
            return;
        App.formatBabyNameList();
        this.isAfterViewChecked = true;
    };
    BabyNameList = __decorate([
        core_1.Component({
            selector: "babynamelist",
            templateUrl: "/templates/babynamelist.html",
            providers: [NameStatisticsService_1.NameStatisticsService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameStatisticsService_1.NameStatisticsService])
    ], BabyNameList);
    return BabyNameList;
}());
exports.BabyNameList = BabyNameList;
//# sourceMappingURL=babynamelist.component.js.map