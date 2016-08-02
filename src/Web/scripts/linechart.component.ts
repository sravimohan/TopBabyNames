/// <reference path="../typings/globals/core-js/index.d.ts" />

import { Component, AfterViewChecked } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { IAppTheme } from "./AppTheme";
import { INameStatistics } from "./NameStatistics";
import { NameStatisticsService } from "./NameStatisticsService";

declare var App: IAppTheme;

@Component({
    selector: "linechart",
    templateUrl: "/templates/linechart.html",
    providers: [NameStatisticsService, HTTP_PROVIDERS]
})

export class LineChart implements AfterViewChecked {

    title = "Top Baby Names";
    nameStatistics: INameStatistics[];
    errorMessage: string;

    name = "Tom";

    constructor(private namerankService: NameStatisticsService) {
    }

    ngOnInit(): void {
        this.namerankService.getNameStatistics(this.name)
            .subscribe(
            (nameStatistics: any) => this.nameStatistics = nameStatistics,
            error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13], [14, 8], [18, 5], [19, 13]];
        var d3 = [
            [1952, 1997], [1953, 2083], [1954, 2199], [1955, 2423], [1956, 2931], [1957, 2868], [1958, 2697],
            [1959, 2429], [1960, 2335], [1961, 2274], [1962, 2080], [1963, 2038], [1964, 1938], [1965, 1752], [1966, 1714],
            [1967, 1596], [1968, 1521], [1969, 1500], [1970, 1340], [1971, 1306], [1972, 1197], [1973, 980], [1974, 1002],
            [1975, 845], [1976, 726], [1977, 714], [1978, 786], [1979, 888], [1980, 794], [1981, 824], [1982, 742], [1983, 708],
            [1984, 670], [1985, 553], [1986, 531], [1987, 462], [1988, 454], [1989, 413], [1990, 375], [1991, 372],
            [1992, 317], [1993, 284], [1994, 304], [1995, 254], [1996, 233], [1998, 156], [1999, 166], [2000, 124],
            [2001, 141], [2002, 121], [2004, 129], [2005, 109], [2006, 98]
        ];

        App.chartsetup("#chartplaceholder2", d3);
    }
}
