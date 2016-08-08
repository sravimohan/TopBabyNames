"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var topnames_component_1 = require("./topnames.component");
var search_component_1 = require("./search.component");
var datatable_component_1 = require("./datatable.component");
var routes = [
    { path: 'Dashboard', component: dashboard_component_1.Dashboard },
    { path: 'Search', component: search_component_1.Search },
    { path: 'DataTable', component: datatable_component_1.DataTable },
    { path: 'TopNames/:sex', component: topnames_component_1.TopNames },
    { path: '**', component: dashboard_component_1.Dashboard }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map