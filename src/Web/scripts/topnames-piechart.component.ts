/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";

import { IAppTheme } from "./IAppTheme";
import { INameSummary } from "./INameSummary";
import { NameRankService } from "./NameRankService";

declare var App: IAppTheme;

@Component({
    selector: "topnames-piechart",
    templateUrl: "/templates/topnames-piechart.html",
    providers: [NameRankService]
})

export class TopNamesPieChart {
    private _sex: string;
    private _nameStatistics: INameSummary[];
    errorMessage: string;

    get nameStatistics(): INameSummary[] {
        return this._nameStatistics;
    }

    @Input()
    set sex(sex: string) {
        this._sex = sex;
    }

    get sexDescription(): string {
        return this._sex === "g" ? "Girl" : "Boy";
    }

    get chartPlaceHolder(): string {
        return "TopNamesPieChart" + this._sex;
    }

    @Input()
    set nameStatistics(nameStatistics: INameSummary[]) {
        this._nameStatistics = nameStatistics;

        App.topNamesPieChartInit(this.chartPlaceHolder, this._nameStatistics);
    }

    constructor(private _namerankService: NameRankService) {
    }

    ngOnInit(): void {
        this._namerankService.getNamesByRank(1, this._sex)
            .subscribe((nameStatistics: any) => this.nameStatistics = nameStatistics, error => this.errorMessage = <any>error);
    }
}
