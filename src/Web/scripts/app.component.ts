/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";

import { TopNames } from "./topnames.component";
import { Search } from "./search.component";

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    directives: [Search, TopNames]
})

export class AppComponent {

    selectedBabyName:string;
    errorMessage: string;

    onBabyNameSelected(babyName: any): void {
        this.selectedBabyName = babyName;
    }
}
