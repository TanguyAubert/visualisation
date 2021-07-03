
const Legend_Positions = ["right", "left", "bottom", "top"] as const;
type Legend_Position = typeof Legend_Positions[number];

const Stacking_Types = ["none", "stacked", "percent"] as const;
type Stacking_Type = typeof Stacking_Types[number];

class Combo_Chart extends Chart
{
	private legend_position : Legend_Position = "right";
	private x_variable : string = "";
	private y_variable : string = "";
	private by_variable : string = "";
	private type_variable : string = "";
	private color_variable : string = "";
	private y_axis_variable : string = "";
	private x_order : string[] = [];
	private by_order : string[] = [];
	private y_min_value_1 : number|null = null;
	private y_max_value_1 : number|null = null;
	private y_min_value_2 : number|null = null;
	private y_max_value_2 : number|null = null;
	
	private line_width : number = 2;
	private marker_radius : number = 7;
	private stacking_type : Stacking_Type = "stacked";

	constructor(columns : Columns)
	{
		super(columns);

		this.minimum_height = 400;
		this.maximum_height = 800;
		this.height_width_ratio = 3 / 5;
	}
    
	//// Setters ////

	public set_legend_position(value : Legend_Position)
	{
		const variable = "legend_position" as const;

		if (this.checker.is_string_and_belong_to(variable, value, Legend_Positions.map(x => x)))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_x_variable(value : string)
	{
		const variable = "x_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_y_variable(value : string)
	{
		const variable = "y_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_by_variable(value : string)
	{
		const variable = "by_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_type_variable(value : string)
	{
		const variable = "type_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_color_variable(value : string)
	{
		const variable = "color_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_y_axis_variable(value : string)
	{
		const variable = "y_axis_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_x_order(value : string[])
	{
		const variable = "x_order" as const;

		if (this.checker.is_not_null_nor_undefined(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_by_order(value : string[])
	{
		const variable = "by_order" as const;

		if (this.checker.is_not_null_nor_undefined(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_min_value_1(value : number)
	{
		const variable = "y_min_value_1" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_max_value_1(value : number)
	{
		const variable = "y_max_value_1" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_min_value_2(value : number)
	{
		const variable = "y_min_value_2" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_max_value_2(value : number)
	{
		const variable = "y_max_value_2" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_line_width(value : boolean)
	{
		const variable = "line_width" as const;

		if (this.checker.is_numeric(variable, value)
		&& this.checker.is_greater_than(variable, value, 0))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_marker_radius(value : boolean)
	{
		const variable = "marker_radius" as const;

		if (this.checker.is_numeric(variable, value)
		&& this.checker.is_greater_than(variable, value, 0))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_stacking_type(value : Stacking_Type)
	{
		const variable = "stacking_type" as const;

		if (this.checker.is_string_and_belong_to(variable, value, Stacking_Types.map(x => x)))
		{
			this[variable] = value;
		}

		return this;
	}

	//// Getters ////

	public get_legend_position () { return this.legend_position; }
	public get_x_variable      () { return this.x_variable;      }
	public get_y_variable      () { return this.y_variable;      }
	public get_by_variable     () { return this.by_variable;     }
	public get_type_variable   () { return this.type_variable;   }
	public get_color_variable  () { return this.color_variable;  }
	public get_y_axis_variable () { return this.y_axis_variable; }
	public get_x_order         () { return this.x_order;         }
	public get_by_order        () { return this.by_order;        }
	public get_y_min_value_1   () { return this.y_min_value_1;   }
	public get_y_max_value_1   () { return this.y_max_value_1;   }
	public get_y_min_value_2   () { return this.y_min_value_2;   }
	public get_y_max_value_2   () { return this.y_max_value_2;   }
	
	public get_line_width      () { return this.line_width;      }
	public get_marker_radius   () { return this.marker_radius;   }
	public get_stacking_type   () { return this.stacking_type;   }

	public draw_inside(structure : Structure)
	{
        if (this.library === "HIGHCHARTS")
        {
            Highcharts_Combo_Chart.draw(this, structure);
		}
		else
		{
			Highcharts_Combo_Chart.draw(this, structure);
		}

        return this;
	}

	protected check_absence_of_duplicates()
	{
		let keys = [this.x_variable, this.by_variable];

		this.filters.forEach(x => keys.push(x.variable));

        this.checker.check_absence_of_duplicates(this.data, keys);
	}

	//// x-order ////

	public create_x_order(data : Data)
    {
        let order = this.x_order;

        if (order.length > 1)
        {
            let sens = order[0];

            if (sens === "--DECREASING--" || sens === "--INCREASING--")
            {
                let has_x_variable = data.has_variable(this.x_variable);
                let has_y_variable = data.has_variable(this.y_variable);
                let has_by_variable = data.has_variable(this.by_variable);
                
                let factor = sens === "--DECREASING--" ? -1 : 1;

                if (order.length === 1 && has_x_variable && has_y_variable)
                {
                    order = this.get_x_order_in_case_of_a_single_series(data, factor);
                }
                else if (order.length === 2 && order[1] === "--ALPHABETIC--" && has_x_variable)
                {
                    order = this.get_x_order_alphabetically(data, factor);
                }
                else if (order.length === 2 && has_x_variable && has_y_variable && has_by_variable)
                {
                    order = this.get_x_order_in_case_of_multiple_series(data, factor, order[1]);
                }
            }
        }

        order = data.order_unique_values(this.x_variable, order);

        return order;
    }

    private get_x_order_in_case_of_a_single_series(data : Data, factor : number)
    {
        let x_values = data.get_text_column   (this.x_variable);
        let y_values = data.get_numeric_column(this.y_variable);

        let values : { x : string, y : number }[] = [];
    
        for (let i = 0, I = x_values.length ; i < I ; ++i)
        {
            values.push({x : x_values[i], y : y_values[i]});
        }
        
        values.sort((a, b) => (a.y - b.y) * factor);

        return values.map(value => value.x);
    }

    private get_x_order_alphabetically(data : Data, factor : number)
    {
		let x_values = data.get_text_column(this.x_variable);
		
		x_values = Utils.get_uniques(x_values);

        x_values.sort((a, b) =>
        {
            if (a < b) return -factor;
            if (a > b) return factor;
            return 0;
        });

        return x_values;
    }

    private get_x_order_in_case_of_multiple_series(data : Data, factor : number, name : string)
    {
        let x_values  = data.get_text_column   (this.x_variable);
        let y_values  = data.get_numeric_column(this.y_variable);
        let by_values = data.get_text_column   (this.by_variable);

        let values : { x : string, y : number }[] = [];

        for (let i = 0, I = x_values.length ; i < I ; ++i)
        {
            if (by_values[i] === name)
            {
                values.push({x : x_values[i], y : y_values[i]});
            }
        }
        
        values.sort((a, b) => (a.y - b.y) * factor);

        return values.map(value => value.x);
	}
	
	//// by-order ////

    public create_by_order(data : Data)
    {
        let by_order = data.order_unique_values(this.by_variable, this.by_order);
        
        if (by_order.length === 0) by_order.push("");

        return by_order;
    }
}