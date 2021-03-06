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
var BabyNameList = (function () {
    function BabyNameList(_namerankService) {
        this._namerankService = _namerankService;
        this.babyNameSelected = new core_1.EventEmitter();
    }
    BabyNameList.prototype.ngOnInit = function () {
        var _this = this;
        this._namerankService.getAllNames()
            .subscribe(function (allNames) { return _this.allNames = allNames; }, function (error) { return _this.errorMessage = error; });
    };
    BabyNameList.prototype.ngAfterViewChecked = function () {
        if (this.allNames == null)
            return;
        if (this.isAfterViewChecked)
            return;
        App.formatBabyNameList();
        this.isAfterViewChecked = true;
    };
    BabyNameList.prototype.onGobuttonClicked = function () {
        this.selectedBabyName = App.getSelectedBabyName();
        this.babyNameSelected.emit(this.selectedBabyName);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BabyNameList.prototype, "babyNameSelected", void 0);
    BabyNameList = __decorate([
        core_1.Component({
            selector: "babynamelist",
            templateUrl: "/templates/babynamelist.html",
            providers: [NameRankService_1.NameRankService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [NameRankService_1.NameRankService])
    ], BabyNameList);
    return BabyNameList;
}());
exports.BabyNameList = BabyNameList;
//# sourceMappingURL=babynamelist.component.js.map