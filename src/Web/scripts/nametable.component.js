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
var NameTable = (function () {
    function NameTable(namerankService) {
        this.namerankService = namerankService;
    }
    Object.defineProperty(NameTable.prototype, "babyName", {
        get: function () {
            return this._babyName;
        },
        set: function (babyName) {
            if (this._babyName === babyName)
                return;
            this._babyName = babyName;
            this.showTable();
        },
        enumerable: true,
        configurable: true
    });
    NameTable.prototype.showTable = function () {
        var _this = this;
        if (!this.babyName)
            return;
        this.namerankService.getNameDetails(this.babyName)
            .subscribe(function (nameRanks) { return _this.nameRanks = nameRanks; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameTable.prototype, "babyName", null);
    NameTable = __decorate([
        core_1.Component({
            selector: "nametable",
            templateUrl: "/templates/nametable.html",
            providers: [NameRankService_1.NameRankService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], NameTable);
    return NameTable;
}());
exports.NameTable = NameTable;
//# sourceMappingURL=nametable.component.js.map