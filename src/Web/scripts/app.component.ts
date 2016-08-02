/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { LineChart } from "./linechart.component";
import { DataTable } from "./datatable.component";

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    directives: [LineChart, DataTable]
})

export class AppComponent {

    title = "Top Baby Names";
    errorMessage: string;
}
