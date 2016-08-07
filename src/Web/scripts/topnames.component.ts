/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { INameSummary } from "./INameSummary";
import { NameRankService } from "./NameRankService";

@Component({
    selector: "topnames",
    templateUrl: "/templates/topnames.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class TopNames {

    private boyNames: INameSummary[];
    private girlNames: INameSummary[];
    errorMessage: string;

    constructor(private namerankService: NameRankService) {
    }

    ngOnInit(): void {
        this.namerankService.getTopNames("b")
            .subscribe((boyNames: any) => this.boyNames = boyNames,
            error => this.errorMessage = <any>error);

        this.namerankService.getTopNames("g")
            .subscribe((girlNames: any) => this.girlNames = girlNames,
            error => this.errorMessage = <any>error);
    }
}
