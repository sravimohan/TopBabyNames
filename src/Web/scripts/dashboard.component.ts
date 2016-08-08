/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { TopNames } from "./topnames.component";


@Component({
    selector: "dashboard",
    templateUrl: "/templates/dashboard.html",
    directives: [TopNames]
})

export class Dashboard {


}
