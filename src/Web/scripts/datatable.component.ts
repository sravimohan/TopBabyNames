/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { INameRank } from "./NameRank";
import { NameRankService } from "./NameRankService";

@Component({
    selector: "datatable",
    templateUrl: "/templates/datatable.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class DataTable {

    @Input() year : number;
    boyNameRanks: INameRank[];
    girlNameRanks: INameRank[];
    errorMessage: string;

    constructor(private namerankService: NameRankService) {
    }

    ngOnInit(): void {
        this.namerankService.getNameRanks(this.year, "B")
            .subscribe((nameRanks: any) => this.boyNameRanks = nameRanks,
            error => this.errorMessage = <any>error);

        this.namerankService.getNameRanks(this.year, "G")
            .subscribe((nameRanks: any) => this.girlNameRanks = nameRanks,
            error => this.errorMessage = <any>error);
    }
}
