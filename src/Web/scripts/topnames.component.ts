/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input, OnInit } from "@angular/core";

import { INameSummary } from "./INameSummary";
import { NameRankService } from "./NameRankService";

@Component({
    selector: "topnames",
    inputs:["count"],
    templateUrl: "/templates/topnames.html",
    providers: [NameRankService]
})

export class TopNames implements OnInit{
    private _sex: string;
    private _count: number;
    private _names: INameSummary[];

    errorMessage: string;

    @Input()
    set count(count: number) {
        this._count = count;
    }

    get count(): number {
        return this._count;
    }

    @Input()
    set sex(sex: string) {
        this._sex = sex;
    }

    get sex(): string {
        return this._sex;
    }

    get sexDescription(): string {
        return this._sex === "g" ? "Girl" : "Boy";
    }

    get names(): INameSummary[] {
        return this._names;
    }

    set names(names: INameSummary[]) {
       this._names = names;
    }

    constructor(private _namerankService: NameRankService){
    }

    ngOnInit() : void {
        this._namerankService.getTopNames(this._sex, this.count)
            .subscribe((names: any) => this.names = names,
            error => this.errorMessage = <any>error);
    }
}
