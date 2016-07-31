/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, AfterViewChecked } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { INameRank } from "./NameRank";
import { NameRankService } from "./NameRankService";

declare var App: IAppTheme;

@Component({
    selector: "top-baby-names-app",
    templateUrl: "/templates/app.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class AppComponent implements AfterViewChecked {

    title = "Top Baby Names";
    nameRanks: INameRank[];
    errorMessage: string;

    year = 2014;
    sex = "G";

    constructor(private namerankService: NameRankService) {
    }

    ngOnInit(): void {
        this.namerankService.getNameRanks(this.year, this.sex)
            .subscribe(
            (nameRanks: any) => this.nameRanks = nameRanks,
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        //App.init();
        //App.dataTables();
    }
}
