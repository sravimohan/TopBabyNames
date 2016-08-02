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
var DataTable = (function () {
    function DataTable(namerankService) {
        this.namerankService = namerankService;
    }
    DataTable.prototype.ngOnInit = function () {
        var _this = this;
        this.namerankService.getNameRanks(this.year, "B")
            .subscribe(function (nameRanks) { return _this.boyNameRanks = nameRanks; }, function (error) { return _this.errorMessage = error; });
        this.namerankService.getNameRanks(this.year, "G")
            .subscribe(function (nameRanks) { return _this.girlNameRanks = nameRanks; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTable.prototype, "year", void 0);
    DataTable = __decorate([
        core_1.Component({
            selector: "datatable",
            templateUrl: "/templates/datatable.html",
            providers: [NameRankService_1.NameRankService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], DataTable);
    return DataTable;
}());
exports.DataTable = DataTable;
//# sourceMappingURL=datatable.component.js.map