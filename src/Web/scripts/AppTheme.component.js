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
var NameRankService_1 = require("./NameRankService");
var AppComponent = (function () {
    function AppComponent(namerankService) {
        this.namerankService = namerankService;
        this.title = "Top Baby Names";
        this.year = 2014;
        this.sex = "G";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.namerankService.getNameRanks(this.year, this.sex)
            .subscribe(function (nameRanks) { return _this.nameRanks = nameRanks; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        App.init();
        App.dataTables();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "top-baby-names-app",
            templateUrl: "/templates/app.html",
            providers: [NameRankService_1.NameRankService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map