import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from "./app.component";
import { TopNames } from "./topnames.component";
import { Search } from "./search.component";

const routes: RouterConfig = [
    { path: 'default', component: Search },
    { path: 'Search', component: Search },
    { path: 'Tables', component: TopNames },
    { path: '**', component: Search }
];

export const appRouterProviders = [
    provideRouter(routes)
];
