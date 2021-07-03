
class Structure
{
	private container         = document.createElement("div");
	private title_area        = document.createElement("div");
	private sub_title_area    = document.createElement("div");
	private x_label_area      = document.createElement("div");
	private y_label_1_area    = document.createElement("div");
	private y_label_2_area    = document.createElement("div");
	private plot_area         = document.createElement("div");
	private footnote_area     = document.createElement("div");
	private filters_area      = document.createElement("div");
	private warnings_area     = document.createElement("div");
	private download_area     = document.createElement("div");
	private download_button   = document.createElement("button");

	private graphic : Graphic;
	private filtered_data : Data;
	private filters : Filter[] = [];
	
	constructor(graphic : Graphic)
	{
		this.graphic = graphic;

		this.create_title_area();
		this.create_sub_title_area();
		this.create_filters_area();
		this.create_x_label_area();
		this.create_y_label_1_area();
		this.create_y_label_2_area();
		this.create_plot_area();
		this.create_footnote_area();
		this.create_warnings_area();
		this.create_container();
		this.create_download_area();
		
		this.filtered_data = this.filter_data(this.get_the_values_of_all_filters());

		this.grey_unavailable_options();
	}
	
	private create_title_area()
	{
		this.title_area.className = "chart-title";
		this.title_area.innerHTML = this.graphic.get_title();
	}

	private create_sub_title_area()
	{
		this.sub_title_area.className = "chart-sub-title";
		this.sub_title_area.innerHTML = this.graphic.get_sub_title();
	}

	private create_x_label_area()
	{
		this.x_label_area.className = "chart-x-label";
		this.x_label_area.innerHTML = this.graphic.get_x_label();
	}

	private create_y_label_1_area()
	{
		this.y_label_1_area.className = "chart-y-label-1";
		this.y_label_1_area.innerHTML = this.graphic.get_y_label_1();
	}

	private create_y_label_2_area()
	{
		this.y_label_2_area.className = "chart-y-label-2";
		this.y_label_2_area.innerHTML = this.graphic.get_y_label_2();
	}

	private create_plot_area()
	{
		this.plot_area.className = "chart-plot-area";
	}
	
	private create_footnote_area()
	{
		this.footnote_area.className = "chart-footnote";
		this.footnote_area.innerHTML = this.graphic.get_footnote();
	}

	private create_filters_area()
	{
		this.filters_area.className = "chart-filters-area";

		this.create_filters();
	}

	private create_filters()
	{
		for (let instruction of this.graphic.get_filters())
		{
			let values = this.get_all_possible_values_for_a_filter(this.graphic.get_data(), instruction.variable);

			// Do not create empty filters
			if (values.length !== 0)
			{
				let filter : Filter;
	
				if (instruction.type === "CURSOR")
				{
					filter = new Cursor(instruction.label, instruction.variable, values, instruction.default_value, this);
				}
				else
				{
					filter = new Selector(instruction.label, instruction.variable, values, instruction.default_value, this);
				}
				
				this.filters.push(filter);
				this.filters_area.appendChild(filter.get_container());
			}
		}
	}

	private get_all_possible_values_for_a_filter(data : Data, variable : string)
	{
		let values = data.get_text_column(variable);

		values = Utils.get_uniques(values);

		values.sort();

		return values;
	}

	private create_download_area()
	{
		this.download_area.className = "chart-download-area";

		if (this.graphic.get_download_enabled())
		{
			this.download_button.className = "chart-download-button";
			this.download_button.type = "button";
			this.download_button.innerHTML = navigator.onLine ? "<i class = 'fa fa-download'></i>" : "Download";
	
			this.download_button.addEventListener("click", () =>
			{
				let content = this.graphic.get_data().to_csv(this.graphic.get_download_separator(), this.graphic.get_download_line_feed());

				this.download_csv_file(content, "export.csv");
			},
			false);
			
			this.download_area.appendChild(this.download_button);
		}
	}

	private create_warnings_area()
	{
		this.warnings_area.className = "chart-warnings-area";
	}

	private create_container()
	{
		this.container.innerHTML = "";
		this.container.className = "chart-container";
		this.container.appendChild(this.download_area);
		this.container.appendChild(this.title_area);
		this.container.appendChild(this.sub_title_area);
		this.container.appendChild(this.warnings_area);
		this.container.appendChild(this.filters_area);
		this.container.appendChild(this.group_plot_area_and_y_labels());
		this.container.appendChild(this.x_label_area);
		this.container.appendChild(this.footnote_area);
	}
	
	private group_plot_area_and_y_labels()
	{
		let table = document.createElement("table");
		let row = document.createElement("tr");

		row.appendChild(this.put_inside_cell(this.y_label_1_area));
		row.appendChild(this.put_inside_cell(this.plot_area));
		row.appendChild(this.put_inside_cell(this.y_label_2_area));

		table.appendChild(row);

		return table;
	}

	private put_inside_cell(element : HTMLElement)
	{
		let cell = document.createElement("td");
		cell.appendChild(element);
		return cell;
	}
	
	//// Getters ////

	public get_filtered_data()   { return this.filtered_data; }
	public get_container()       { return this.container; }
	public get_plot_area()       { return this.plot_area; }
	public get_width()           { return this.container.clientWidth; }
	public get_plot_area_width() { return this.plot_area.clientWidth; }

	//// Others ////

	public append_to(element : HTMLElement)
	{
		element.appendChild(this.container);
		
		// Don't set the width before appending the chart structure to the container
		this.set_plot_area_width();
	}

	private filter_data(filters : { [variable : string] : string })
	{
		let filtered_data = this.graphic.get_data().filter_data(filters);

		return filtered_data;
	}

	private get_the_values_of_all_filters()
	{
		let filters : {[variable : string] : string} = {};

		for (let filter of this.filters)
		{
			filters[filter.get_variable()] = filter.get_value();
		}

		return filters;
	}

	public revalidate_filters()
	{
		this.filtered_data = this.filter_data(this.get_the_values_of_all_filters());

		this.grey_unavailable_options();

		this.redraw();
	}

	private grey_unavailable_options()
	{
		for (let filter of this.filters)
		{
			let filters = this.get_the_values_of_all_filters_but_one(filter.get_variable());

			let data = this.filter_data(filters);

			let values = this.get_all_possible_values_for_a_filter(data, filter.get_variable())

			filter.set_available_values(values);
		}
	}
	
	private get_the_values_of_all_filters_but_one(exception : string)
	{
		let filters = this.get_the_values_of_all_filters();

		delete filters[exception];

		return filters;
	}

	public display_warnings(message : string)
	{
		this.warnings_area.innerHTML = message;
	}

	private download_csv_file(content : string, file_name : string)
	{
		// https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side

		let blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });

		// IE 10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(blob, file_name);
		}
		// Browsers that support HTML5 download attribute
		else
		{
			let link = document.createElement("a");
			
			if (link.download !== undefined)
			{
				let url = URL.createObjectURL(blob);
				
                link.setAttribute("href", url);
				link.setAttribute("download", file_name);
				
				link.style.visibility = "hidden";
				
				document.body.appendChild(link);
				
				link.click();
				
                document.body.removeChild(link);
            }
        }
	}

	public redraw()
	{
		this.clear_plot_area();
		this.set_plot_area_width();
		this.graphic.draw_inside(this);
    }

	private clear_plot_area()
	{
		this.plot_area.innerHTML = "";
	}

	private set_plot_area_width()
	{
		this.plot_area.style.width = "0px";
		this.plot_area.style.width = (this.container.clientWidth - this.y_label_1_area.clientWidth - this.y_label_2_area.clientWidth) + "px";
	}
}
