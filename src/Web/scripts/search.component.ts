/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { LineChart } from "./linechart.component";
import { NameTable } from "./nametable.component";
import { BabyNameList } from "./babynamelist.component";

@Component({
    selector: "search",
    templateUrl: "/templates/search.html",
    directives: [BabyNameList, LineChart, NameTable]
})

export class Search {

    selectedBabyName:string;
    errorMessage: string;

    onBabyNameSelected(babyName: any): void {
        this.selectedBabyName = babyName;
    }
}
