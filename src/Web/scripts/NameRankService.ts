/// <reference path="../typings/globals/core-js/index.d.ts" />
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/operators/map";
import "rxjs/Rx";

import { INameRank } from "./INameRank";
import { INameByYear } from "./INameByYear";
import { INameSummary } from "./INameSummary";

@Injectable()
export class NameRankService {

    constructor(private http: Http) { }

    getAllNames(): Observable<string[]> {
        return this.http.get("api/GetAllNames")
            .map((response: Response) => <string[]>response.json());
    }

    getNameRanks(year: number, sex: string): Observable<INameRank[]> {
        return this.http.get("api/GetByYear?year=" + year + "&sex=" + sex)
            .map((response: Response) => <INameRank[]>response.json());
    }

    getNameStatistics(name: string): Observable<INameByYear[]> {
        return this.http.get("api/GetStatsByName?name=" + name)
            .map((response: Response) => <INameByYear[]>response.json());
    }

    getNameDetails(name: string): Observable<INameRank[]> {
        return this.http.get("api/GetByName?name=" + name)
            .map((response: Response) => <INameRank[]>response.json());
    }

    getTopNames(sex: string): Observable<INameSummary[]> {
        return this.http.get("api/GetTopNames?sex=" + sex)
            .map((response: Response) => <INameSummary[]>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
