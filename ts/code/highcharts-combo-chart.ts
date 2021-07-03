
/// <reference path = "C:/Externes/TypeScript/node_modules/highcharts/highcharts.d.ts"/>

module Highcharts_Combo_Chart
{
    interface Series
    {
        name: string
        data: [string, number][]
        type?: string
        yAxis?: number
        color?: string
        lineWidth?: number;
    }

    export function draw(chart : Combo_Chart, structure : Structure)
    {
        let data = structure.get_filtered_data();
        let options = get_options(chart, structure);

        options.series = convert_data_to_series(chart, data);

		// @ts-ignore
		Highcharts.chart(structure.get_plot_area(), options);
    }

    function convert_data_to_series(chart : Combo_Chart, data : Data)
	{
        let x_order = chart.create_x_order(data);
        let by_order = chart.create_by_order(data);

        let output = create_empty_series(x_order, by_order);

        fill_values(output, chart, data, x_order);
        
        return Array.from(output.values());
    }

    function create_empty_series(x_order : string[], by_order : string[])
    {
        let output = new Map<string, Series>();

        for (let by_value of by_order)
        {
            let empty_data : [string, number][] = [];
            
            for (let x_value of x_order)
            {
                empty_data.push([x_value, NaN]);
            }
    
            let series : Series = {
                name: by_value,
                data: empty_data
            };

            output.set(by_value, series);
        }

        return output;
    }

    function fill_values(output : Map<string, Series>, chart : Combo_Chart, data : Data, x_order : string[])
    {
        let by_variable = chart.get_by_variable();
        let x_variable = chart.get_x_variable();
        let y_variable = chart.get_y_variable();
        let color_variable = chart.get_color_variable();
        let axis_variable = chart.get_y_axis_variable();
        let type_variable = chart.get_type_variable();

        for (let i = 0, I = data.get_length() ; i < I ; ++i)
        {
            let name = data.get_text_at(i, by_variable);
            let x    = data.get_text_at(i, x_variable);

            let x_index = x_order.indexOf(x);
            let series = output.get(name);
            
            if (series !== undefined && x_index >= 0 && x_index < series.data.length)
            {
                get_color_at(i, series, data, color_variable);
                get_axis_at(i, series, data, axis_variable);
                get_type_at(i, series, data, type_variable);

                series.data[x_index][1] = data.get_number_at(i, y_variable);
    
                if (series.type === "marker")
                {
                    series.type = "line";
                    series.lineWidth = 0;
                }
            }
        }
    }

    function get_color_at(i : number, series : Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable)) return;

        let value = data.get_text_at(i, variable);

        if (Utils.is_a_color(value))
        {
            series.color = value;
        }
    }

    function get_axis_at(i : number, series : Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable)) return;

        let value = data.get_number_at(i, variable);

        if (value === 1 || value === 0)
        {
            series.yAxis = value;
        }
    }

    function get_type_at(i : number, series : Series, data : Data, variable : string)
    {
        if (!data.has_variable(variable)) return;

        let value = data.get_text_at(i, variable).toLowerCase();

        series.type = value;
    }

	function get_options(chart : Combo_Chart, structure : Structure)
	{
		return {
			title:         { text: "" },
			subtitle:      { text: "" },
			credits:       { enabled: false },
            chart:         get_chart_options(chart, structure),
			legend:        get_legend_options(chart),
			xAxis:         get_x_axis_options(),
			yAxis:         get_y_axis_options(chart),
			rangeSelector: get_range_selector_options(),
			navigator:     get_navigator_options(),
			scrollbar:     get_scrollbar_options(),
			tooltip:       get_tooltip_options(chart),
            plotOptions:   get_plot_options(chart),
            series:        {}
		};
    }
    
    function get_chart_options(chart : Combo_Chart, structure : Structure)
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
    
    function get_legend_options(chart : Combo_Chart)
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
    
    function get_x_axis_options()
    {
        return {
            title:{text: ""},
            type: 'category',
            labels:{style:{color: '#000000', cursor: 'default', fontSize: '11px'}},
            tickmarkPlacement: 'between',
            gridLineWidth: 1,
            startOnTick: false,
            endOnTick: false,
        };
    }

    function get_y_axis_options(chart : Combo_Chart)
    {
        let endOnTick_1 = chart.get_y_max_value_1() === null;
        let endOnTick_2 = chart.get_y_max_value_2() === null;

        return [
            { title: "", opposite: false, min: chart.get_y_min_value_1(), max: chart.get_y_max_value_1(), endOnTick: endOnTick_1 },
            { title: "", opposite: true,  min: chart.get_y_min_value_2(), max: chart.get_y_max_value_2(), endOnTick: endOnTick_2  }
        ];
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

    function get_tooltip_options(chart : Combo_Chart)
    {
        if (chart.get_stacking_type() === "percent")
        {
            let numeric_format = chart.get_digits() !== null ? ":." + chart.get_digits() + "f" : "";
    
            return {
                pointFormat : "<span style = \"color:{series.color}\">{series.name}</span>: <b>{point.y" + numeric_format + "}</b> ({point.percentage:.1f}%)<br/>",
                crosshairs: true,
                animation: true,
                shared: true
            };
        }
        else
        {
            return {
                valueDecimals: chart.get_digits() !== null ? chart.get_digits() : undefined,
                crosshairs: true,
                animation: true,
                shared: true
            };
        }
    }

    function get_plot_options(chart : Combo_Chart)
    {
        return {
            series: get_series_options(),
            line:   get_line_options(chart),
            spline: get_spline_options(chart),
            column: get_column_options(chart),
            area:   get_area_options(chart)
        };
    }

    function get_series_options()
    {
        return {
            borderColor: '#303030',
            animation:
            {
                duration: 0,
            },
            states: 
            {
                hover: 
                {
                    lineWidthPlus: 0
                }
            }
        };
    }

    function get_line_options(chart : Combo_Chart)
    {
        return {
            lineWidth: chart.get_line_width(),
            marker: get_marker_options(chart, true, true, 0)
		};
    }

    function get_marker_options(chart : Combo_Chart, enabled : boolean, enabled_on_hover : boolean, line_width : number)
    {
        return {
            enabled: enabled,
            lineWidth: line_width,
            radius: chart.get_marker_radius(),
            lineColor: '#000000',
            states:
            {
                hover:
                {
                    enabled: enabled_on_hover,
                    radiusPlus: 2,
                    lineWidthPlus: 0
                }
            }
        };
    }

    function get_spline_options(chart : Combo_Chart)
    {
        return get_line_options(chart);
    }

    function get_column_options(chart : Combo_Chart)
    {
        let stacking_type = get_stacking_type(chart);

        return {
			borderWidth: 1,
			dataLabels:
			{
				enabled: false,
				color: 'black',
				backgroundColor: 'rgba(200, 200, 200, 1)',
				borderWidth: 1,
				borderColor: '#000000'
			},
            marker: get_marker_options(chart, false, false, 0),
			pointPadding: 0,
            groupPadding: stacking_type === null ? 0.2 : 0,
            stacking: stacking_type
		};
    }

    function get_area_options(chart : Combo_Chart)
    {
        return {
			lineColor: '#000000',
			lineWidth: 1,
            marker: get_marker_options(chart, true, true, 1),
            stacking: get_stacking_type(chart)
		};
    }

    function get_stacking_type(chart : Combo_Chart)
    {
        let stacking_type = chart.get_stacking_type();

        if (stacking_type === "none") return null;

        return stacking_type;
    }
}
