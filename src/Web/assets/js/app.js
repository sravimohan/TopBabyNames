var App = (function () {
    'use strict';

    App.chartsetup = function (name, placeholder, dataValue) {

        var dataset = [{ label: name, data: dataValue }];

        var options = {
            xaxis: {
                min: 1959,
                max: 2015,
                tickDecimals: null
            },

            yxaxis: {
                tickDecimals: null
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.6 }, { opacity: 0.6 }] }
                },

                points: {
                    radius: 3,
                    show: true,
                    fill: true,
                    fillColor: App.color.alt2
                }
            }
        };

        $.plot($(placeholder), dataset, options);
    }

    App.formatBabyNameList = function () {
        $("#babyNameList")
            .select2({
                width: '100%',
                placeholder: "Enter Baby Name..."
            });

        $('#babyNameList').on('select2:select', function (evt) {
            $('#babyNameSearchButton').click();
        });
    };

    App.getSelectedBabyName = function () {
        return $("#babyNameList").val();
    };

    App.dataTables = function (datatableName) {
        $(datatableName).dataTable();
    };

    return App;
})(App || {});
