import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from "./app.component";
import { Dashboard } from "./dashboard.component";
import { TopNames } from "./topnames.component";
import { Search } from "./search.component";
import { DataTable } from "./datatable.component";
import { About } from "./about.component";

const routes: RouterConfig = [
    { path: 'Dashboard', component: Dashboard },
    { path: 'Search', component: Search },
    { path: 'DataTable', component: DataTable },
    { path: 'About', component: About },
    { path: 'TopNames/:sex', component: TopNames },
    { path: '**', component: Dashboard }
];

export const appRouterProviders = [
    provideRouter(routes)
];
