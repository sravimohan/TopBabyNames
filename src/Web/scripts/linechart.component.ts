/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, AfterViewChecked } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { INameStatistics } from "./NameStatistics";
import { NameStatisticsService } from "./NameStatisticsService";

declare var App: IAppTheme;

@Component({
    selector: "linechart",
    templateUrl: "/templates/linechart.html",
    providers: [NameStatisticsService, HTTP_PROVIDERS]
})

export class LineChart implements AfterViewChecked {

    title = "Top Baby Names";
    nameStatistics: INameStatistics[];
    errorMessage: string;

    name = "Jessica";

    constructor(private namerankService: NameStatisticsService) {
    }

    ngOnInit(): void {
        this.namerankService.getNameStatistics(this.name)
            .subscribe((nameStatistics: any) => this.nameStatistics = nameStatistics, 
            error => this.errorMessage = <any>error,
            App.chartsetup(this.name, "#chartplaceholder2", this.nameStatistics));
    }

    ngAfterViewChecked(): void {
        App.chartsetup(this.name, "#chartplaceholder2", this.nameStatistics);
    }
}
