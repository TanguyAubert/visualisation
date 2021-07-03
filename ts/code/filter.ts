
abstract class Filter
{
	protected container = document.createElement("div");
	protected label     = document.createElement("label");
	protected variable : string;
	protected values : string[];

	constructor(label : string, variable : string, values : string[])
	{
        this.variable = variable;
		this.values = values;
        this.create_container();
		this.create_label(label);
	}
	
	private create_label(label : string)
	{
		this.label.innerHTML = label;
        this.label.className = "chart-filter-label";
        
		this.container.appendChild(this.label);
    }
    
    private create_container()
    {
		this.container.className = "chart-filter-container";
    }

    public get_variable()  { return this.variable;  }
	public get_container() { return this.container; }

	public abstract set_available_values(values : Value[]) : void;
	public abstract get_value() : string;
}
