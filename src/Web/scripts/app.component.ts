/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { IAppTheme } from "./IAppTheme";

declare var App: IAppTheme;

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    ngOnInit(): void {
        App.init();
    }
}
