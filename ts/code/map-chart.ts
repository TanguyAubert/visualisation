
const Map_Areas = ["FR-DEP", "FR-REG", "UE"] as const;
type Map_Area = typeof Map_Areas[number];

class Map_Chart extends Chart
{
	private map_area : Map_Area = "UE";
	private location_variable = "";
	private value_variable = "";
	private min_color     = Color.red();
	private middle_color  = Color.white();
	private max_color     = Color.blue();
    private middle_value  = 0;
	private water_color   = Color.water();
	private null_color    = Color.grey();
	private visible_names = true;
    
	constructor(columns : Columns)
	{
		super(columns);
		
		this.maximum_width = 800;
		this.height_width_ratio = 1;
	}
    
	//// Setters ////

	public set_map_area(value : Map_Area)
	{
		const variable = "map_area" as const;

		if (this.checker.is_string_and_belong_to(variable, value, Map_Areas.map(x => x)))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_location_variable(value : string)
	{
		const variable = "location_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_value_variable(value : string)
	{
		const variable = "value_variable" as const;

		if (this.checker.is_string_and_exists(variable, value, this.data))
		{
			this[variable] = value;
		}

		return this;
	}

	public set_min_color(value : string)
	{
		const variable = "min_color" as const;

		if (this.checker.is_string_and_a_color(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_middle_color(value : string)
	{
		const variable = "middle_color" as const;

		if (this.checker.is_string_and_a_color(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_max_color(value : string)
	{
		const variable = "max_color" as const;

		if (this.checker.is_string_and_a_color(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_middle_value(value : number)
	{
		const variable = "middle_value" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_water_color(value : string)
	{
		const variable = "water_color" as const;

		if (this.checker.is_string(variable, value)
		&& this.checker.is_a_color(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_null_color(value : string)
	{
		const variable = "null_color" as const;

		if (this.checker.is_string(variable, value)
		&& this.checker.is_a_color(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_visible_names(value : boolean)
	{
		const variable = "visible_names" as const;

		if (this.checker.is_boolean(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	//// Getters ////

	public get_map_area          () { return this.map_area;          }
	public get_location_variable () { return this.location_variable; }
	public get_value_variable    () { return this.value_variable;    }
	public get_min_color         () { return this.min_color;         }
	public get_middle_color      () { return this.middle_color;      }
	public get_max_color         () { return this.max_color;         }
	public get_middle_value      () { return this.middle_value;      }
	public get_water_color       () { return this.water_color;       }
	public get_null_color        () { return this.null_color;        }
	public get_visible_names     () { return this.visible_names;     }

	public draw_inside(structure : Structure)
	{
		if (this.library === "HIGHCHARTS")
		{
			Highcharts_Map_Chart.draw(this, structure);
		}
		else
		{
			Highcharts_Map_Chart.draw(this, structure);
		}
		
        return this;
	}
	
	protected check_absence_of_duplicates()
	{
		let keys = [this.location_variable];

		this.filters.forEach(x => keys.push(x.variable));

        this.checker.check_absence_of_duplicates(this.data, keys);
	}
}