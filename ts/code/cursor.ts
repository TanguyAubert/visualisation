
class Cursor extends Filter
{
    private input = document.createElement("input");
    private displayer = document.createElement("label");

	constructor(label : string, variable : string, values : string[], default_value : string|null, chart_structure : Structure)
	{
        super(label, variable, values);
        this.create_input();
        this.create_displayer();
		this.add_on_change_event(chart_structure);
		this.select_default_value(default_value);
	}

	public get_element()
	{
		return this.input;
	}
    
    public get_value()
    {
        return this.values[Number.parseInt(this.input.value)];
    }

	private create_input()
	{
        this.input.className = "chart-filter-input";
        this.input.type = 'range';
        this.input.min = "0";
        this.input.max = (this.values.length - 1).toString();
        this.input.value = this.input.max;
        this.input.step = "1";
        
		this.container.appendChild(this.input);
    }
    
    private create_displayer()
    {
        this.displayer.className = "chart-filter-displayer";
        this.display_selected_value();
        
		this.container.appendChild(this.displayer);
    }
    
	private add_on_change_event(chart_structure : Structure)
	{
		this.input.addEventListener("change", () =>
		{
            this.display_selected_value();
            chart_structure.revalidate_filters();
		},
		false);
    }
    
    private display_selected_value()
    {
        let value = this.get_value();

        if (value !== null)
        {
            this.displayer.innerHTML = value.toString();
        }
    }
    
	public set_available_values(_ : Value[]) : void
	{

    }
    
	public select_default_value(default_value : string|null)
	{
		if (default_value !== null)
		{
            let index = this.values.indexOf(default_value);

            if (index >= 0)
            {
                this.input.value = index.toString();
                this.display_selected_value();
            }
		}
	}
}
