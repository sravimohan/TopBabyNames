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

    App.topNamesPieChartInit = function (placeHolder, data) {

        var color1 = tinycolor(App.color.primary).brighten(9).toString();
        var color2 = tinycolor(App.color.primary).lighten(13).toString();
        var color3 = tinycolor(App.color.primary).lighten(20).toString();
        var color4 = tinycolor(App.color.primary).lighten(27).toString();
        var color5 = tinycolor(App.color.primary).lighten(34).toString();

        $.plot('#' + placeHolder, data, {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.27,
                    shadow: {
                        top: 5,
                        left: 15,
                        alpha: 0.3
                    },
                    stroke: {
                        width: 0
                    },
                    label: {
                        show: true,
                        formatter: function (label, series) {
                            return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + label + '</div>';
                        }
                    },
                    highlight: {
                        opacity: 0.08
                    }
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: [color1, color2, color3, color4],
            legend: {
                show: false
            }
        });
    }

    return App;
})(App || {});
