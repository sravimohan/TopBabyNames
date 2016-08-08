/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

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
    private _sub: any;

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

    constructor(private _namerankService: NameRankService, private _route: ActivatedRoute, private _router: Router) {
        this._count = 0;
    }

    ngOnInit() : void {
        this._sub = this._route
            .params
            .subscribe(params => {
                if (params["sex"] != null)
                    this._sex = params["sex"];
                this._namerankService.getTopNames(this._sex, this.count)
                    .subscribe((names: any) => this.names = names,
                    error => this.errorMessage = <any>error);
            });
    }
}
