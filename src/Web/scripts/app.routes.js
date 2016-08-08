"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var tables_component_1 = require("./tables.component");
var search_component_1 = require("./search.component");
var routes = [
    { path: 'Dashboard', component: dashboard_component_1.Dashboard },
    { path: 'Search', component: search_component_1.Search },
    { path: 'Tables', component: tables_component_1.Tables },
    { path: '**', component: dashboard_component_1.Dashboard }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map