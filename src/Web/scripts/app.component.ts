/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { LineChart } from "./linechart.component";
import { DataTable } from "./datatable.component";
import { BabyNameList } from "./babynamelist.component";

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    directives: [BabyNameList, LineChart, DataTable]
})

export class AppComponent {

    title = "Top Baby Names";
    errorMessage: string;
}
