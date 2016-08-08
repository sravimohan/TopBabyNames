/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { TopNames } from "./topnames.component";
import { TopNamesPieChart } from "./topnames-piechart.component";


@Component({
    selector: "dashboard",
    templateUrl: "/templates/dashboard.html",
    directives: [TopNames, TopNamesPieChart]
})

export class Dashboard {


}
