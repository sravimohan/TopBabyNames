"use strict";
var router_1 = require('@angular/router');
var topnames_component_1 = require("./topnames.component");
var search_component_1 = require("./search.component");
var routes = [
    { path: 'default', component: search_component_1.Search },
    { path: 'Search', component: search_component_1.Search },
    { path: 'Tables', component: topnames_component_1.TopNames },
    { path: '**', component: search_component_1.Search }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map