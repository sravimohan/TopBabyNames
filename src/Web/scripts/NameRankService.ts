/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/operators/map";
import 'rxjs/Rx';

import { INameRank } from './nameRank';

@Injectable()
export class NameRankService {
    private apiUrl = 'api/GetByYear?year=1975&sex=g';

    constructor(private http: Http) { }

    getNameRanks(): Observable<INameRank[]> {
        return this.http.get(this.apiUrl)
            .map((response: Response) => <INameRank[]>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
