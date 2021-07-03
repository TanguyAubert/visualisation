
abstract class Chart extends Graphic
{
	protected minimum_width = -Infinity;
	protected maximum_width = Infinity;
	protected minimum_height = -Infinity;
	protected maximum_height = Infinity;
	protected height_width_ratio = 1;
    private digits : number|null = null;

	//// Setters ////
	
	public set_minimum_width(value : number)
	{
		const variable = "minimum_width" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_maximum_width(value : number)
	{
		const variable = "maximum_width" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_minimum_height(value : number)
	{
		const variable = "minimum_height" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_maximum_height(value : number)
	{
		const variable = "maximum_height" as const;

		if (this.checker.is_numeric(variable, value))
		{
			this[variable] = value;
		}

		return this;
	}
	
	public set_height_width_ratio(value : number)
	{
		const variable = "height_width_ratio" as const;

		if (this.checker.is_numeric(variable, value) 
		&& this.checker.is_strictly_greater_than(variable, value, 0))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_digits(value : number)
	{
		const variable = "digits" as const;

		if (this.checker.is_numeric(variable, value)
		&& this.checker.is_greater_than(variable, value, 0))
		{
			this[variable] = value;
		}
		
		return this;
	}

	//// Getters ////

	public get_minimum_width()      { return this.minimum_width;      }
	public get_maximum_width()      { return this.maximum_width;      }
	public get_minimum_height()     { return this.minimum_height;     }
	public get_maximum_height()     { return this.maximum_height;     }
	public get_height_width_ratio() { return this.height_width_ratio; }
	public get_digits            () { return this.digits;            }
}
