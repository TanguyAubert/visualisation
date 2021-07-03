
/// <reference path = "C:/Externes/TypeScript/node_modules/highcharts/highcharts.d.ts"/>

module Highcharts_Bubble_Chart
{
    interface Bubble_Series
    {
        name: string,
        data: {x: number, y: number, z: number, label: string}[],
        type?: string,
        yAxis?: number
        color?: string
    }

    export function draw(chart : Bubble_Chart, structure : Structure)
    {
        let data = structure.get_filtered_data();
        let options = get_options(chart, structure);

        options.series = convert_data_to_series(chart, data);

		// @ts-ignore
		Highcharts.chart(structure.get_plot_area(), options);
    }

    function convert_data_to_series(chart : Bubble_Chart, data : Data)
	{
        let by_variable = chart.get_by_variable();
        let x_variable = chart.get_x_variable();
        let y_variable = chart.get_y_variable();
        let z_variable = chart.get_z_variable();
        let color_variable = chart.get_color_variable();
        let axis_variable = chart.get_y_axis_variable();
        let type_variable = chart.get_type_variable();
        let labels_variable = chart.get_labels_variable();

        let output = new Map<string, Bubble_Series>();

        for (let i = 0, I = data.get_length() ; i < I ; ++i)
        {
            let by_value = data.get_text_at(i, by_variable);

            let series = output.get(by_value);

            if (series === undefined)
            {
                series = {
                    name: by_value,
                    data: []
                };

                output.set(by_value, series);
            }

            series.data.push({
                x: data.get_number_at(i, x_variable),
                y: data.get_number_at(i, y_variable),
                z: data.get_number_at(i, z_variable),
                label: data.get_text_at(i, labels_variable)
            });
            
            get_color_at(i, series, data, color_variable);
            get_axis_at(i, series, data, axis_variable);
            get_type_at(i, series, data, type_variable);
        }

        return Array.from(output.values());
    }

    function get_color_at(i : number, series : Bubble_Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable)) return;

        let value = data.get_text_at(i, variable);

        if (Utils.is_a_color(value))
        {
            series.color = value;
        }
    }

    function get_axis_at(i : number, series : Bubble_Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable)) return;

        let value = data.get_number_at(i, variable);

        if (value === 1 || value === 0)
        {
            series.yAxis = value;
        }
    }

    function get_type_at(i : number, series : Bubble_Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable))
        {
            series.type = "bubble";
        }
        else 
        {
            let value = data.get_text_at(i, variable).toLowerCase();

            series.type = value;
        }
    }

	function get_options(chart : Bubble_Chart, structure : Structure)
	{
		return {
			title:         { text: "" },
			subtitle:      { text: "" },
			credits:       { enabled: false },
            chart:         get_chart_options(chart, structure),
			legend:        get_legend_options(chart),
			xAxis:         get_x_axis_options(chart),
			yAxis:         get_y_axis_options(chart),
			rangeSelector: get_range_selector_options(),
			navigator:     get_navigator_options(),
			scrollbar:     get_scrollbar_options(),
			tooltip:       get_tooltip_options(chart),
            plotOptions:   get_plot_options(chart),
            series:        {}
		};
    }
    
    function get_chart_options(chart : Bubble_Chart, structure : Structure)
    {
        let width = structure.get_plot_area_width();

        if (width < chart.get_minimum_width()) width = chart.get_minimum_width();
        if (width > chart.get_maximum_width()) width = chart.get_maximum_width();
        
        let height = width * chart.get_height_width_ratio();
        
        if (height < chart.get_minimum_height()) height = chart.get_minimum_height();
        if (height > chart.get_maximum_height()) height = chart.get_maximum_height();
        
        return {
            backgroundColor: "rgba(0,0,0,0)",
            width: width,
            height: height
        };
    }
    
    function get_legend_options(chart : Bubble_Chart)
    {
        let position = chart.get_legend_position();
        
        let layout = "horizontal";
        let horizontal_alignment = "center";
        let vertical_alignment = "bottom";

        if (position === "left" || position === "right")
        {
            layout = "vertical";
            horizontal_alignment = position;
            vertical_alignment = "middle";
        }
        else if (position === "top" || position === "bottom")
        {
            layout = "horizontal";
            horizontal_alignment = "center";
            vertical_alignment = position;
        }

        return {
            enabled: chart.get_data().has_variable(chart.get_by_variable()),
            layout: layout,
            align: horizontal_alignment,
            verticalAlign: vertical_alignment,
            backgroundColor: "rgba(0,0,0,0)",
            itemStyle:{color: '#000000', cursor: 'pointer', fontSize: '16px', fontWeight: 'plain'},
        };
    }
    
    function get_x_axis_options(chart : Bubble_Chart)
    {
        return {
            gridLineWidth: 1,
            title: { text: "" },
            min: chart.get_x_min_value(),
            max: chart.get_x_max_value(),
            plotLines:
            [{
                color: 'red',
                width: 1,
                value: chart.get_x_axis_value(),
                label:
                {
                    rotation: 0,
                    y: 15,
                    text: chart.get_x_label() + " : " + chart.get_x_axis_value()
                },
                zIndex: 3
            }]
        };
    }

    function get_y_axis_options(chart : Bubble_Chart)
    {
        return [{
            endOnTick: chart.get_y_max_value_1() === null,
            title: { text: "" },
            opposite: false,
            min: chart.get_y_min_value_1(),
            max: chart.get_y_max_value_1(),
            maxPadding: 0.2,
            plotLines: [{
                color: 'red',
                width: 1,
                value: chart.get_y_axis_value_1(),
                label:
                {
                    align: 'right',
                    text: chart.get_y_label_1() + " : " + chart.get_y_axis_value_1(),
                    x: -10
                },
                zIndex: 3
            }]
        },
        {
            endOnTick: chart.get_y_max_value_2() === null,
            title: { text: "" },
            opposite: true,
            min: chart.get_y_min_value_2(),
            max: chart.get_y_max_value_2(),
            maxPadding: 0.2,
            plotLines: [{
                color: 'red',
                width: 1,
                value: chart.get_y_axis_value_2(),
                label:
                {
                    align: 'right',
                    text: chart.get_y_label_2() + " : " + chart.get_y_axis_value_2(),
                    x: -10
                },
                zIndex: 3
            }]
        }];
    }

    function get_range_selector_options()
    {
        return { enabled:false };
    }

    function get_navigator_options()
    {
        return {
            enabled:true,
            height: 15
        };
    }

    function get_scrollbar_options()
    {
        return {
            enabled:true,
            minWidth:1,
            height: 1
        };
    }

    function get_tooltip_options(chart : Bubble_Chart)
    {
        chart.get_digits();

        return {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.label}</h3></th></tr>' +
                '<tr><th>' + chart.get_x_label() + ' :</th><td>{point.x:.' + chart.get_digits() + 'f}</td></tr>' +
                '<tr><th>' + chart.get_y_label_1() + (chart.get_y_label_2() === "" ? "" : " / " + chart.get_y_label_2()) + ' :</th><td>{point.y:.' + chart.get_digits() + 'f}</td></tr>' +
                '<tr><th>' + "Size" + ' :</th><td>{point.z:.' + chart.get_digits() + 'f}</td></tr>',
            footerFormat: '</table>',
            followPointer: true,
            crosshairs: true,
            animation: true,
            shared: true
        };
    }

    function get_plot_options(chart : Bubble_Chart)
    {
        let output =
        {
            series: {},
            bubble: {}
        };

        if (chart.get_labels_variable() !== "")
        {
            output.series =
            {
                dataLabels:
                {
                    enabled: true,
                    format: "{point.label}"
                }
            };
        }
        
        return output;
    }

}
