/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, Input, AfterViewChecked } from "@angular/core";
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
    @Input() babyName : string;
    nameStatistics: INameStatistics[];
    errorMessage: string;
    isAfterViewChecked: boolean;

    constructor(private namerankService: NameStatisticsService) {
    }

    ngOnInit(): void {

        this.namerankService.getNameStatistics(this.babyName)
            .subscribe((nameStatistics: any) => this.nameStatistics = nameStatistics, 
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.nameStatistics == null)
            return;

        if (this.isAfterViewChecked)
            return;

        App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics);
        this.isAfterViewChecked = true;
    }
}
