
type Value = string|number|null;

interface Columns
{
    [variable : string] : Value[];
}

type Row = { [variable : string] : Value };

class Data
{
    protected columns : Columns;

    constructor(columns : Columns)
    {
        this.columns = columns;
    }

	public static initialize_empty_data(variables : string[])
	{
		let data = new Data({});

		for (let variable of variables)
		{
			data.columns[variable] = [];
		}

		return data;
    }
    
    public has_variable(variable : string)
    {
        return this.columns.hasOwnProperty(variable);
    }
    
    public get_variables()
    {
        return Object.getOwnPropertyNames(this.columns);
    }
    
    public get_length()
	{
		let properties = Object.keys(this.columns);

		if (properties.length > 0)
		{
			return this.columns[properties[0]].length;
		}

		return 0;
	}

	public get_text_at(i : number, variable : string)
	{
        return Utils.to_string(this.get_value_at(i, variable));
	}

	public get_number_at(i : number, variable : string)
	{
        return Utils.to_number(this.get_value_at(i, variable));
    }

    private get_value_at(i : number, variable : string)
    {
        if (this.has_variable(variable))
		{
            return this.columns[variable][i];
        }
        
        return null;
    }

    public get_text_column(variable : string)
    {
        let column = this.get_column(variable);

        if (column !== null)
        {
            return column.map(x => Utils.to_string(x));
        }
        else
        {
            return Utils.create_empty_array(this.get_length(), "");
        }
    }

    public get_numeric_column(variable : string)
    {
        let column = this.get_column(variable);

        if (column !== null)
        {
            return column.map(x => Utils.to_number(x));
        }
        else
        {
            return Utils.create_empty_array(this.get_length(), NaN);
        }
    }

    private get_column(variable : string)
    {
        if (this.has_variable(variable))
		{
            return this.columns[variable];
        }
        
        return null;
    }

	public filter_data(filters : {[variable : string] : string})
	{
		let filtered_data = Data.initialize_empty_data(Object.keys(this.columns));

		for (let i = 0, I = this.get_length() ; i < I ; ++i)
		{
			if (this.has_to_keep_row(i, filters))
			{
                this.copy_row(filtered_data, i);
			}
		}

		return filtered_data;
    }
    
    private has_to_keep_row(i : number, filters : {[variable : string] : string})
    {
        let keep = true;

        for (let variable in filters)
        {
            if (this.get_text_at(i, variable) !== filters[variable])
            {
                keep = false;
            }
        }

        return keep;
    }

    private copy_row(destination : Data, i : number)
    {
        for (let variable in this.columns)
        {
            destination.columns[variable].push(this.get_value_at(i, variable));
        }
    }
    
    public order_unique_values(variable : string, desired_order : string[])
    {
        if (!this.has_variable(variable)) return [];

        let values = this.get_text_column(variable);
        
        values = Utils.get_uniques(values);
        
        return Utils.order_values(values, desired_order);
    }

    public to_csv(separator : string, line_feed : string)
    {
        let variables = this.get_variables();
        
        let output = variables.join(separator);

        let number_of_rows = this.get_length();

        for (let i = 0 ; i < number_of_rows ; ++i)
        {
            output += line_feed;

            let j = 0;

            for (let variable of variables)
            {
                if (j++ > 0) output += separator;

                output += this.get_value_at(i, variable);
            }
        }

        return output;
    }

    public get_row(i : number)
    {
        let row : Row = {};

        for (let variable of this.get_variables())
        {
            row[variable] = this.get_value_at(i, variable);
        }

        return row;
    }
}
