/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { TopNames } from "./topnames.component";


@Component({
    selector: "tables",
    templateUrl: "/templates/tables.html",
    directives: [TopNames]
})

export class Tables {


}
