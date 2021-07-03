
class Checker
{
    protected disabled = false;
    protected warnings : { [variable : string] : { value : string, message : string }} = {};

	public disable()
	{
		this.disabled = true;
	}

	public is_not_null_nor_undefined(variable : string, value : any)
	{
		if (this.disabled) return true;

		if (value === null || value === undefined)
		{
			return this.log(variable, value, "is null or undefined");
		}

		return true;
	}

	public is_boolean(variable : string, value : any) : value is boolean
	{
		if (this.disabled) return true;

		if (typeof value !== "boolean")
		{
			return this.log(variable, value, "is not a boolean");
		}

		return true;
	}

	public is_numeric(variable : string, value : any) : value is number
	{
		if (this.disabled) return true;

		if (typeof value !== "number")
		{
			return this.log(variable, value, "is not a number");
		}

		return true;
	}

	public is_string(variable : string, value : any) : value is string
	{
		if (this.disabled) return true;

		if (typeof value !== "string")
		{
			return this.log(variable, value, "is not a string");
		}

		return true;
	}

	public exists(variable : string, value : string, table : Data)
	{
		if (this.disabled) return true;

		if (!table.has_variable(value))
		{
			return this.log(variable, value, "does not exists");
		}

		return true;
	}

	public is_string_and_exists(variable : string, value : string, table : Data)
	{
		return this.is_string(variable, value) && this.exists(variable, value, table);
	}

	public is_smaller_than(variable : string, value : number, maximum_value : number)
	{
		if (this.disabled) return true;

		if (value > maximum_value)
		{
			return this.log(variable, value, "is not smaller than " + maximum_value);
		}

		return true;
	}

	public is_strictly_smaller_than(variable : string, value : number, maximum_value : number)
	{
		if (this.disabled) return true;

		if (value >= maximum_value)
		{
			return this.log(variable, value, "is not strictly smaller than " + maximum_value);
		}

		return true;
	}

	public is_greater_than(variable : string, value : number, minimum_value : number)
	{
		if (this.disabled) return true;

		if (value < minimum_value)
		{
			return this.log(variable, value, "is not greater than " + minimum_value);
		}

		return true;
	}

	public is_strictly_greater_than(variable : string, value : number, minimum_value : number)
	{
		if (this.disabled) return true;

		if (value <= minimum_value)
		{
			return this.log(variable, value, "is not strictly greater than " + minimum_value);
		}

		return true;
	}

	public is_a_color(variable : string, value : string)
	{
		if (this.disabled) return true;

		if (!Utils.is_a_color(value))
		{
			return this.log(variable, value, "is not a valid color (#FFF or #FFFFFF or rgb(255, 255, 255) or rgba(255, 255, 255, 0.5))");
		}

		return true;
	}

	public is_string_and_a_color(variable : string, value : string)
	{
		return this.is_string(variable, value) && this.is_a_color(variable, value);
	}
	
    public belong_to(variable : string, value : string, collection : string[])
    {
		if (this.disabled) return true;

        if (!collection.includes(value))
        {
			return this.log(variable, value, "is not one of " + collection.join(", "));
		}
		
		return true;
	}
	
	public is_string_and_belong_to(variable : string, value : string, collection : string[])
	{
		return this.is_string(variable, value) && this.belong_to(variable, value, collection);
	}
	
	private log(variable : string, value : any, message : string)
	{
		// Only the first error is logged
		if (!(variable in this.warnings))
		{
			this.warnings[variable] = 
			{
				value : this.value_to_string(value), 
				message : message
			};
		}

		return false;
	}

	private value_to_string(value : any)
	{
		if (value === null)                  return "null";
		else if (value === undefined)        return "undefined";
		else if (typeof value === "string")  return value;
		else if (typeof value === "number")  return "'" + value.toString() + "'";
		else if (typeof value === "boolean") return (value ? "true" : "false");
		else if (typeof value === "object")  return "object";

		return "DO_NOT_PRINT";
	}
	
    public to_html()
    {
		let output = "";

		if (Object.keys(this.warnings).length > 0)
		{
			output += "Any incorrect value will be ignored and replaced with a default one :";

			for (let variable in this.warnings)
			{
				output += "<br/>ERROR : ";
				output += variable;
				
				if (this.warnings[variable].value !== "DO_NOT_PRINT")
				{
					output += " [";
					output += this.warnings[variable].value;
					output += "]";
				} 

				output += " ";
				output += this.warnings[variable].message;
				output += " !";
			}

			output += "<br/>To hide these errors, please call disable_checker().";
		}
        
        return output;
	}
	
    //// Duplicates ////
    
    public check_absence_of_duplicates(data : Data, variables : string[])
    {
		let keys = new Set<string>();

		for (let i = 0, I = data.get_length() ; i < I ; ++i)
		{
            let values : string[] = [];

            for (let variable of variables)
            {
                values.push(data.get_text_at(i, variable));
			}

			if (values.length > 0)
			{
				let key = values.join(",");
				
				if (keys.has(key))
				{
					this.log("Duplicate values by " + variables.toString(), "DO_NOT_PRINT", "");
	
					return;
				}
	
				keys.add(key);
			}
		}
    }
}