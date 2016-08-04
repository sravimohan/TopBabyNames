/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { INameRank } from "./NameRank";
import { NameRankService } from "./NameRankService";

@Component({
    selector: "nametable",
    templateUrl: "/templates/nametable.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class NameTable {

    nameRanks: INameRank[];
    errorMessage: string;

    private _babyName: string;

    get babyName(): string {
        return this._babyName;
    }

    @Input() set babyName(babyName: string) {

        if (this._babyName === babyName)
            return;

        this._babyName = babyName;
        this.showTable();
    }

    constructor(private namerankService: NameRankService) {
    }

    showTable(): void {
        if (!this.babyName)
            return;

        this.namerankService.getNameDetails(this.babyName)
            .subscribe((nameRanks: any) => this.nameRanks = nameRanks,
            error => this.errorMessage = <any>error);
    }
}
