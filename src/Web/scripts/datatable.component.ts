/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./IAppTheme";
import { INameRank } from "./INameRank";
import { NameRankService } from "./NameRankService";

declare var App: IAppTheme;

@Component({
    selector: "datatable",
    templateUrl: "/templates/datatable.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})
export class DataTable {

    @Input()
    year: number;

    boyNameRanks: INameRank[];

    girlNameRanks: INameRank[];

    errorMessage: string;

    constructor(private _namerankService: NameRankService) {
        this.year = 1952;
    }

    ngOnInit(): void {
        this.loadTable();
        App.formatYearList();
    }

    loadTable(): void {
        this._namerankService.getNameRanks(this.year, "B")
            .subscribe((nameRanks: any) => this.boyNameRanks = nameRanks,
            error => this.errorMessage = <any>error);

        this._namerankService.getNameRanks(this.year, "G")
            .subscribe((nameRanks: any) => this.girlNameRanks = nameRanks,
            error => this.errorMessage = <any>error);
    }

    onyearSearchButtonClicked(): void {
        this.year = App.getSelectedYear();
        this.loadTable();
    }
}
