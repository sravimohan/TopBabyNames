var App = (function () {
    'use strict';

    App.dataTables = function (datatableName) {
        $(datatableName).dataTable();
    };

    return App;
})(App || {});
