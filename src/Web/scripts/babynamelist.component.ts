/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, Input, AfterViewChecked } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { NameStatisticsService } from "./NameStatisticsService";

declare var App: IAppTheme;

@Component({
    selector: "babynamelist",
    templateUrl: "/templates/babynamelist.html",
    providers: [NameStatisticsService, HTTP_PROVIDERS]
})

export class BabyNameList implements AfterViewChecked {
    allNames: string[];
    errorMessage: string;
    isAfterViewChecked: boolean;

    constructor(private namerankService: NameStatisticsService) {
    }

    ngOnInit(): void {

        this.namerankService.getAllNames()
            .subscribe((allNames: any) => this.allNames = allNames,
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.isAfterViewChecked)
            return;

        App.formatBabyNameList();
        this.isAfterViewChecked = true;
    }
}
