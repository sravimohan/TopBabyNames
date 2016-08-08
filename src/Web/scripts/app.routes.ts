import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from "./app.component";
import { Dashboard } from "./dashboard.component";
import { TopNames } from "./topnames.component";
import { Search } from "./search.component";

const routes: RouterConfig = [
    { path: 'Dashboard', component: Dashboard },
    { path: 'Search', component: Search },
    { path: 'Tables', component: TopNames },
    { path: '**', component: Search }
];

export const appRouterProviders = [
    provideRouter(routes)
];
