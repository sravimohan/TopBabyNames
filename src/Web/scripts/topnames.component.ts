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

    private _boyNames: INameSummary[];
    private _girlNames: INameSummary[];
    errorMessage: string;

    constructor(private _namerankService: NameRankService) {
    }

    ngOnInit(): void {
        this._namerankService.getTopNames("b")
            .subscribe((boyNames: any) => this._boyNames = boyNames,
            error => this.errorMessage = <any>error);

        this._namerankService.getTopNames("g")
            .subscribe((girlNames: any) => this._girlNames = girlNames,
            error => this.errorMessage = <any>error);
    }
}
