/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/operator/map";
import "rxjs/Rx";

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
    private _sub: any;

    errorMessage: string;

    @Input()
    set count(count: number) {
        this._count = count;
        this.loadData();
    }

    @Input()
    set sex(sex: string) {
        if (sex == null)
            return;

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

    constructor(private _route: ActivatedRoute, private _namerankService: NameRankService){
    }

    ngOnInit() : void {
        this._sub = this._route.params.subscribe((params: any) => {
            this.sex = params["sex"];
        });
    }

    loadData(): void {
        this._namerankService.getTopNames(this.sex, this.count)
            .subscribe((names: any) => this.names = names,
            error => this.errorMessage = <any>error);
    }
}
