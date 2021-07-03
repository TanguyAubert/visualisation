const Libraries = ["HIGHCHARTS"] as const;
type Library = typeof Libraries[number];

const Filter_Types = ["SELECTOR", "CURSOR"] as const;
type Filter_Type = typeof Filter_Types[number];

abstract class Graphic
{
	private structures : Structure[] = [];

	protected data : Data;
	private title : string = "";
	private sub_title : string = "";
	private x_label : string = "";
	private y_label_1 : string = "";
	private y_label_2 : string = "";
	protected library : Library = "HIGHCHARTS";
	private footnote : string = "";

	protected filters : {
		variable : string,
		label : string,
		type : Filter_Type,
		default_value : string|null
	}[] = [];
	
	private download_enabled = true;
	private download_separator = ";";
	private download_line_feed = "\n";

	protected checker = new Checker();

	constructor(columns : Columns)
	{
		const variable = "data" as const;

		if (this.checker.is_not_null_nor_undefined(variable, columns))
		{
			this.data = new Data(columns);
		}
		else
		{
			this.data = new Data({});
		}
	}

	//// Setters ////
	
	public set_title(value : string)
	{
		const variable = "title" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}

	public set_sub_title(value : string)
	{
		const variable = "sub_title" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_x_label(value : string)
	{
		const variable = "x_label" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_y_label_1(value : string)
	{
		const variable = "y_label_1" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_y_label_2(value : string)
	{
		const variable = "y_label_2" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_library(value : Library)
	{
		const variable = "library" as const;

		if (this.checker.is_string_and_belong_to(variable, value, Libraries.map(x => x)))
		{
			this[variable] = value;
		}

		return this;
	}
	
	public set_footnote(value : string)
	{
		const variable = "footnote" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public add_filter(variable : string, label : string, type : Filter_Type, default_value : string|null = null)
	{
		if (this.checker.is_string("filter-variable", variable)
		&& this.checker.is_string("filter-label", label)
		&& this.checker.is_string_and_belong_to("filter-type", type, Filter_Types.map(x => x)))
		{
			this.filters.push({variable, label, type, default_value});
		}
		
		return this;
	}

	public set_download_enabled(value : boolean)
	{
		const variable = "download_enabled" as const;

		if (this.checker.is_boolean(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_download_separator(value : string)
	{
		const variable = "download_separator" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public set_download_line_feed(value : string)
	{
		const variable = "download_line_feed" as const;

		if (this.checker.is_string(variable, value))
		{
			this[variable] = value;
		}
		
		return this;
	}
	
	public disable_checker()
	{
		this.checker.disable();

		return this;
	}

	//// Getters ////

	public get_data()                  { return this.data;                  }
	public get_title()                 { return this.title;                 }
	public get_sub_title()             { return this.sub_title;             }
	public get_x_label()               { return this.x_label;               }
	public get_y_label_1()             { return this.y_label_1;             }
	public get_y_label_2()             { return this.y_label_2;             }
	public get_library()               { return this.library;               }
	public get_footnote()              { return this.footnote;              }
    public get_filters()               { return this.filters;               }
	public get_download_enabled()      { return this.download_enabled;      }
	public get_download_separator()    { return this.download_separator;    }
	public get_download_line_feed()    { return this.download_line_feed;    }
    
	//// Others ////

	public draw(destination : string | HTMLElement)
	{
		let container = this.get_target_container(destination);
		let structure = this.insert_structure_into(container);
		
		this.structures.push(structure);

		this.check_absence_of_duplicates();

		structure.display_warnings(this.checker.to_html());

		this.draw_inside(structure);
	}

	private get_target_container(destination : string | HTMLElement)
	{
		if (typeof destination === "string")
		{
			return document.getElementById(destination)!;
		}
		else
		{
			return destination;
		}
	}

	private insert_structure_into(container : HTMLElement)
	{
		container.innerHTML = "";

		let structure = new Structure(this);

		structure.append_to(container);

		return structure;
	}

	public redraw_all()
	{
		for (let structure of this.structures)
		{
			structure.redraw();
		}
    }

	//// Abstract methods ////

	public abstract draw_inside(structure : Structure) : void;
	protected abstract check_absence_of_duplicates() : void;
}

let charts : { [variable : string] : Graphic } = {};

function draw_all_charts()
{
	for (let id in charts)
	{
		charts[id].redraw_all();
	}
}

function redraw_all_charts_within(container : HTMLElement)
{
	for (let id in charts)
	{
		let target = document.getElementById(id);

		if (target !== null && container.contains(target))
		{
			charts[id].redraw_all();
		}
	}
}

var resizing = 0;

window.onresize = function()
{
	clearTimeout(resizing);
	resizing = setTimeout(draw_all_charts, 100);
};