/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input } from "@angular/core";

import { INameSummary } from "./INameSummary";
import { NameRankService } from "./NameRankService";

@Component({
    selector: "topnames",
    inputs:["count"],
    templateUrl: "/templates/topnames.html",
    providers: [NameRankService]
})

export class TopNames {
    private _count: number;
    private _boyNames: INameSummary[];
    private _girlNames: INameSummary[];
    errorMessage: string;

    @Input()
    set count(count: number) {
        this._count = count;
        this.loadData();
    }

    get count(): number {
        return this._count;
    }

    get boyNames(): INameSummary[] {
        return this._boyNames;
    }

    @Input()
    set boyNames(boyNames: INameSummary[]) {
        this._boyNames = boyNames;
    }

    get girlNames(): INameSummary[] {
        return this._girlNames;
    }

    @Input()
    set girlNames(girlNames: INameSummary[]) {
        this._girlNames = girlNames;
    }

    constructor(private _namerankService: NameRankService) {
    }

    loadData(): void {
        this._namerankService.getTopNames("b", this.count)
            .subscribe((boyNames: any) => this.boyNames = boyNames,
            error => this.errorMessage = <any>error);

        this._namerankService.getTopNames("g", this.count)
            .subscribe((girlNames: any) => this.girlNames = girlNames,
            error => this.errorMessage = <any>error);
    }
}
