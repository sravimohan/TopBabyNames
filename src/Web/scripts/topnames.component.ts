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
    private _sex: string;
    private _count: number;
    private _names: INameSummary[];

    errorMessage: string;

    @Input()
    set count(count: number) {
        this._count = count;
        this.loadData();
    }

    @Input()
    set sex(sex: string) {
        this._sex = sex;
        this.loadData();
    }

    get sexDescription(): string {
        return this._sex === "g" ? "Girl" : "Boy";
    }

    get count(): number {
        return this._count;
    }

    get names(): INameSummary[] {
        return this._names;
    }

    @Input()
    set names(names: INameSummary[]) {
        this.loadData();
        this._names = names;
    }

    constructor(private _namerankService: NameRankService) {
    }

    loadData(): void {
        this._namerankService.getTopNames(this._sex, this.count)
            .subscribe((names: any) => this.names = names,
            error => this.errorMessage = <any>error);
    }
}
