/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, Output, EventEmitter, AfterViewChecked } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./IAppTheme";
import { NameRankService } from "./NameRankService";

declare var App: IAppTheme;

@Component({
    selector: "babynamelist",
    templateUrl: "/templates/babynamelist.html",
    providers: [NameRankService, HTTP_PROVIDERS]
})

export class BabyNameList implements AfterViewChecked {
    allNames: string[];
    errorMessage: string;
    isAfterViewChecked: boolean;
    selectedBabyName: string;
    @Output() babyNameSelected = new EventEmitter();

    constructor(private _namerankService: NameRankService) {
    }

    ngOnInit(): void {

        this._namerankService.getAllNames()
            .subscribe((allNames: any) => this.allNames = allNames,
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.allNames == null)
            return;

        if (this.isAfterViewChecked)
            return;

        App.formatBabyNameList();
        this.isAfterViewChecked = true;
    }

    onGobuttonClicked(): void {
        this.selectedBabyName = App.getSelectedBabyName();
        this.babyNameSelected.emit(this.selectedBabyName);
    }
}
