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
var linechart_component_1 = require("./linechart.component");
var datatable_component_1 = require("./datatable.component");
var babynamelist_component_1 = require("./babynamelist.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onBabyNameSelected = function (babyName) {
        this.selectedBabyName = babyName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "top-baby-names-app",
            templateUrl: "/templates/app.html",
            directives: [babynamelist_component_1.BabyNameList, linechart_component_1.LineChart, datatable_component_1.DataTable]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map