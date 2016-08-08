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
var router_1 = require("@angular/router");
require("rxjs/add/observable/fromPromise");
var NameRankService_1 = require("./NameRankService");
var TopNames = (function () {
    function TopNames(_namerankService, _route, _router) {
        this._namerankService = _namerankService;
        this._route = _route;
        this._router = _router;
        this._count = 0;
    }
    Object.defineProperty(TopNames.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (count) {
            this._count = count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNames.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (sex) {
            this._sex = sex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNames.prototype, "sexDescription", {
        get: function () {
            return this._sex === "g" ? "Girl" : "Boy";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopNames.prototype, "names", {
        get: function () {
            return this._names;
        },
        set: function (names) {
            this._names = names;
        },
        enumerable: true,
        configurable: true
    });
    TopNames.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route
            .params
            .subscribe(function (params) {
            if (params["sex"] != null)
                _this._sex = params["sex"];
            _this._namerankService.getTopNames(_this._sex, _this.count)
                .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], TopNames.prototype, "count", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TopNames.prototype, "sex", null);
    TopNames = __decorate([
        core_1.Component({
            selector: "topnames",
            inputs: ["count"],
            templateUrl: "/templates/topnames.html",
            providers: [NameRankService_1.NameRankService]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService, router_1.ActivatedRoute, router_1.Router])
    ], TopNames);
    return TopNames;
}());
exports.TopNames = TopNames;
//# sourceMappingURL=topnames.component.js.map