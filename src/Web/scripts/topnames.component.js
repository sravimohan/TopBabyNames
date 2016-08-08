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
var TopNames = (function () {
    function TopNames(_namerankService) {
        var _this = this;
        this._namerankService = _namerankService;
        this._namerankService.getTopNames("b")
            .subscribe(function (boyNames) { return _this.boyNames = boyNames; }, function (error) { return _this.errorMessage = error; });
        this._namerankService.getTopNames("g")
            .subscribe(function (girlNames) { return _this.girlNames = girlNames; }, function (error) { return _this.errorMessage = error; });
    }
    Object.defineProperty(TopNames.prototype, "boyNames", {
        get: function () {
            return this._boyNames;
        },
        set: function (boyNames) {
            this._boyNames = boyNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNames.prototype, "girlNames", {
        get: function () {
            return this._girlNames;
        },
        set: function (girlNames) {
            this._girlNames = girlNames;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TopNames.prototype, "boyNames", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TopNames.prototype, "girlNames", null);
    TopNames = __decorate([
        core_1.Component({
            selector: "topnames",
            templateUrl: "/templates/topnames.html",
            providers: [NameRankService_1.NameRankService]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], TopNames);
    return TopNames;
}());
exports.TopNames = TopNames;
//# sourceMappingURL=topnames.component.js.map