/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { INameStatistics } from "./NameStatistics";
import { NameRankService } from "./NameRankService";

declare var App: IAppTheme;

@Component({
    selector: "linechart",
    templateUrl: "/templates/linechart.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class LineChart {
    private _babyName: string;
    private _nameStatistics: INameStatistics[];
    errorMessage: string;

    get nameStatistics(): INameStatistics[] {
        return this._nameStatistics;
    }

    set nameStatistics(nameStatistics: INameStatistics[]) {
        this._nameStatistics = nameStatistics;
        App.chartsetup(this.babyName, "#lineChartPlaceHolder", this.nameStatistics);
    }

    get babyName(): string {
        return this._babyName;
    }

    @Input() set babyName(babyName: string) {

        if (this._babyName === babyName)
            return;

        this._babyName = babyName;
        this.showChart();
    }

    constructor(private namerankService: NameRankService) {
    }

    showChart(): void {

        if (!this.babyName)
            return;

        this.namerankService.getNameStatistics(this.babyName)
            .subscribe(
                (nameStatistics: any) => this.nameStatistics = nameStatistics,
                error => this.errorMessage = <any>error);
    }
}
