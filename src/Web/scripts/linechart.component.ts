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
    nameStatistics: INameStatistics[];
    errorMessage: string;
    isAfterViewChecked: boolean;

    private _babyName: string;

    get babyName(): string {
        return this._babyName;
    }

    @Input() set babyName(babyName: string) {

        if (this._babyName === babyName)
            return;

        this._babyName = babyName;
        this.showChart();
    }

    constructor(private namerankService: NameStatisticsService) {
    }

    ngOnInit(): void {

        if (this.babyName == null || this.babyName === "")
            return;

        this.namerankService.getNameStatistics(this.babyName)
            .subscribe((nameStatistics: any) => this.nameStatistics = nameStatistics, 
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (!this.babyName)
            return;

        if (!this.nameStatistics)
            return;

        if (this.isAfterViewChecked)
            return;

        App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics);
        this.isAfterViewChecked = true;
    }

    showChart(): void {
        this.namerankService.getNameStatistics(this.babyName)
            .subscribe((nameStatistics: any) => this.nameStatistics = nameStatistics,
            error => this.errorMessage = <any>error,
            App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics));
    }
}
