"use strict";
/// <reference path = "C:/Externes/TypeScript/node_modules/highcharts/highcharts.d.ts"/>
var Highcharts_Pie_Chart;
(function (Highcharts_Pie_Chart) {
    function draw(chart, structure) {
        let data = structure.get_filtered_data();
        let series = convert_data_to_series(chart, data);
        let options = get_options(chart, structure, series);
        // @ts-ignore
        Highcharts.chart(structure.get_plot_area(), options);
    }
    Highcharts_Pie_Chart.draw = draw;
    function convert_data_to_series(chart, data) {
        let by_variable = chart.get_by_variable();
        let y_variable = chart.get_y_variable();
        let color_variable = chart.get_color_variable();
        let by_order = chart.create_by_order(data);
        let output = [];
        for (let by_value of by_order) {
            output.push({ name: by_value, y: NaN });
        }
        for (let i = 0, I = data.get_length(); i < I; ++i) {
            let name = data.get_text_at(i, by_variable);
            let index = by_order.indexOf(name);
            if (index >= 0 && index < output.length) {
                output[index].y = data.get_number_at(i, y_variable);
                get_color_at(i, output, index, data, color_variable);
            }
        }
        return output;
    }
    function get_color_at(i, series, index, data, variable) {
        if (!data.has_variable(variable))
            return;
        let value = data.get_text_at(i, variable);
        if (Utils.is_a_color(value)) {
            series[index].color = value;
        }
    }
    function get_options(chart, structure, series) {
        return {
            title: { text: "" },
            subtitle: { text: "" },
            credits: { enabled: false },
            chart: get_chart_options(chart, structure),
            tooltip: get_tooltip_options(chart),
            plotOptions: get_plot_options(chart),
            series: get_series_options(series)
        };
    }
    function get_chart_options(chart, structure) {
        let width = structure.get_plot_area_width();
        if (width < chart.get_minimum_width())
            width = chart.get_minimum_width();
        if (width > chart.get_maximum_width())
            width = chart.get_maximum_width();
        let height = width * chart.get_height_width_ratio();
        if (height < chart.get_minimum_height())
            height = chart.get_minimum_height();
        if (height > chart.get_maximum_height())
            height = chart.get_maximum_height();
        return {
            backgroundColor: "rgba(0,0,0,0)",
            width: width,
            height: height,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        };
    }
    function get_tooltip_options(chart) {
        let numeric_format = chart.get_digits() !== null ? ":." + chart.get_digits() + "f" : "";
        return {
            pointFormat: "Percentage : {point.percentage:.1f}%<br>Value : {point.y" + numeric_format + "}",
            animation: true,
            shared: true
        };
    }
    function get_plot_options(chart) {
        return {
            series: get_plot_series_options(),
            pie: get_pie_options(chart)
        };
    }
    function get_plot_series_options() {
        return {
            animation: {
                duration: 0,
            }
        };
    }
    function get_pie_options(chart) {
        let numeric_format = chart.get_digits() !== null ? ":." + chart.get_digits() + "f" : "";
        return {
            colors: null,
            marker: { enabled: true },
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b><br>Percentage : {point.percentage:.1f} %<br>Value : {point.y" + numeric_format + "}"
            },
        };
    }
    function get_series_options(series) {
        return [{
                states: {},
                data: series
            }];
    }
})(Highcharts_Pie_Chart || (Highcharts_Pie_Chart = {}));
