/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/operators/map";
import "rxjs/Rx";

import { INameStatistics } from "./NameStatistics";

@Injectable()
export class NameStatisticsService {

    constructor(private http: Http) { }

    getAllNames(): Observable<string[]> {
        return this.http.get("api/GetAllNames")
            .map((response: Response) => <string[]>response.json());
    }

    getNameStatistics(name: string): Observable<INameStatistics[]> {
        return this.http.get("api/GetStatsByName?name=" + name)
            .map((response: Response) => <INameStatistics[]>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
