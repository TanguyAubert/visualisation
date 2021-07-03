
class Pie_Chart extends Chart
{
	private by_variable : string = "";
	private y_variable : string = "";
	private color_variable : string = "";
	private by_order : string[] = [];
    
	constructor(columns : Columns)
	{
		super(columns);

		this.maximum_width = 800;
		this.maximum_height = 600;
		this.height_width_ratio = 4 / 5;
	}
    
	//// Setters ////

	public set_by_variable(value : string)
	{
		const variable = "by_variable" as const;

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

	public set_color_variable(value : string)
	{
		const variable = "color_variable" as const;

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

	//// Getters ////

	public get_by_variable     () { return this.by_variable;     }
	public get_y_variable      () { return this.y_variable;      }
	public get_color_variable  () { return this.color_variable;  }
	public get_by_order        () { return this.by_order;        }

	public draw_inside(structure : Structure)
	{
        if (this.library === "HIGHCHARTS")
        {
            Highcharts_Pie_Chart.draw(this, structure);
		}
		else
		{
			Highcharts_Pie_Chart.draw(this, structure);
		}

        return this;
	}

	protected check_absence_of_duplicates()
	{
		let keys = [this.by_variable];

		this.filters.forEach(x => keys.push(x.variable));

        this.checker.check_absence_of_duplicates(this.data, keys);
	}
	
	//// by-order ////

	public create_by_order(data : Data)
	{
		let order = this.by_order;

        if (order.length === 1)
        {
            let sens = order[0];

            if (sens === "--DECREASING--" || sens === "--INCREASING--")
            {
                let has_y_variable = data.has_variable(this.y_variable);
                let has_by_variable = data.has_variable(this.by_variable);
                
                let factor = sens === "--DECREASING--" ? -1 : 1;

                if (has_y_variable && has_by_variable)
                {
					let by_values = data.get_text_column   (this.by_variable);
					let y_values  = data.get_numeric_column(this.y_variable);
	
					let values : { x : string, y : number }[] = [];
				
					for (let i = 0, I = by_values.length ; i < I ; ++i)
					{
						values.push({x : by_values[i], y : y_values[i]});
					}
					
					values.sort((a, b) => (a.y - b.y) * factor);
	
					order = values.map(value => value.x);
				}
            }
        }

		order = data.order_unique_values(this.by_variable, order);
		
		return order;
	}
}