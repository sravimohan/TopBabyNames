/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { LineChart } from "./linechart.component";
import { NameTable } from "./nametable.component";
import { BabyNameList } from "./babynamelist.component";
import { TopNames } from "./topnames.component";

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    directives: [BabyNameList, LineChart, NameTable, TopNames]
})

export class AppComponent {

    selectedBabyName:string;
    errorMessage: string;

    onBabyNameSelected(babyName: any): void {
        this.selectedBabyName = babyName;
    }
}
