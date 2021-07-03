
class Bubble_Chart extends Chart
{
	private legend_position : Legend_Position = "right";
	private x_variable : string = "";
	private y_variable : string = "";
	private z_variable : string = "";
	private by_variable : string = "";
	private type_variable : string = "";
	private color_variable : string = "";
	private y_axis_variable : string = "";
	private by_order : string[] = [];
	private x_min_value : number|null = null;
	private x_max_value : number|null = null;
	private y_min_value_1 : number|null = null;
	private y_max_value_1 : number|null = null;
	private y_min_value_2 : number|null = null;
	private y_max_value_2 : number|null = null;
	private x_axis_value : number|null = null;
	private y_axis_value_1 : number|null = null;
	private y_axis_value_2 : number|null = null;
	private labels_variable : string = "";
	
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

	public set_z_variable(value : string)
	{
		const variable = "z_variable" as const;

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

	public set_by_order(value : string[])
	{
		const variable = "by_order" as const;

		if (this.checker.is_not_null_nor_undefined(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_x_min_value(value : number)
	{
		const variable = "x_min_value" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_x_max_value(value : number)
	{
		const variable = "x_max_value" as const;

		if (this.checker.is_numeric(variable, value))
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

	public set_x_axis_value(value : number)
	{
		const variable = "x_axis_value" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_axis_value_1(value : number)
	{
		const variable = "y_axis_value_1" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_y_axis_value_2(value : number)
	{
		const variable = "y_axis_value_2" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_labels_variable(value : string)
	{
		const variable = "labels_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	//// Getters ////

	public get_legend_position () { return this.legend_position; }
	public get_x_variable      () { return this.x_variable;      }
	public get_y_variable      () { return this.y_variable;      }
	public get_z_variable      () { return this.z_variable;      }
	public get_by_variable     () { return this.by_variable;     }
	public get_type_variable   () { return this.type_variable;   }
	public get_color_variable  () { return this.color_variable;  }
	public get_y_axis_variable () { return this.y_axis_variable; }
	public get_by_order        () { return this.by_order;        }
	public get_x_min_value     () { return this.x_min_value;     }
	public get_x_max_value     () { return this.x_max_value;     }
	public get_y_min_value_1   () { return this.y_min_value_1;   }
	public get_y_max_value_1   () { return this.y_max_value_1;   }
	public get_y_min_value_2   () { return this.y_min_value_2;   }
	public get_y_max_value_2   () { return this.y_max_value_2;   }
	public get_x_axis_value    () { return this.x_axis_value;    }
	public get_y_axis_value_1  () { return this.y_axis_value_1;  }
	public get_y_axis_value_2  () { return this.y_axis_value_2;  }
	public get_labels_variable () { return this.labels_variable;  }
	
	public draw_inside(structure : Structure)
	{
        if (this.library === "HIGHCHARTS")
        {
            Highcharts_Bubble_Chart.draw(this, structure);
		}
		else
		{
			Highcharts_Bubble_Chart.draw(this, structure);
		}

        return this;
	}

	protected check_absence_of_duplicates()
	{
		let keys = [this.x_variable, this.y_variable, this.by_variable];

		this.filters.forEach(x => keys.push(x.variable));

		if (this.labels_variable !== "")
		{
			keys.push(this.labels_variable);
		}

		this.checker.check_absence_of_duplicates(this.data, keys);
	}

	//// by-order ////

    public create_by_order(data : Data)
    {
        let by_order = data.order_unique_values(this.by_variable, this.by_order);
        
        if (by_order.length === 0) by_order.push("");

        return by_order;
    }
}