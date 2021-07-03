
class Selector extends Filter
{
	private select = document.createElement("select");

	constructor(label : string, variable : string, values : string[], default_value : string|null, chart_structure : Structure)
	{
		super(label, variable, values);
		this.create_select();
		this.populate(values);
		this.add_on_change_event(chart_structure);
		this.select_default_value(default_value);
	}

	public get_element()
	{
		return this.select;
	}
    
    public get_value()
    {
        return this.values[this.select.selectedIndex];
    }

	private create_select()
	{
		this.select.className = "chart-filter-select";

		this.container.appendChild(this.select);
	}

	private populate(values : Value[])
	{
		for (let value of values)
		{
			this.append_option(value !== null ? value.toString() : "null");
		}
	}

	private append_option(value : string)
	{
		let option = document.createElement("option");
		option.text = value;
		option.value = value;
		this.select.appendChild(option);
	}
	
	private add_on_change_event(chart_structure : Structure)
	{
		this.select.addEventListener("change", () =>
		{
			chart_structure.revalidate_filters();
		},
		false);
	}

	public set_available_values(values : Value[]) : void
	{
		for (let option of this.select.options)
		{
			let option_value = option.value;

			option.classList.add('chart-filter-option-not-available');

			for (let value of values)
			{
				if (value === null || value.toString() === option_value)
				{
					option.classList.remove('chart-filter-option-not-available');
					break;
				}
			}
		}
	}

	public select_default_value(default_value : string|null)
	{
		if (default_value !== null && this.values.includes(default_value))
		{
			this.select.value = default_value.toString();
		}
	}
}
