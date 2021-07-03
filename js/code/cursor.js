"use strict";
class Cursor extends Filter {
    constructor(label, variable, values, default_value, chart_structure) {
        super(label, variable, values);
        this.input = document.createElement("input");
        this.displayer = document.createElement("label");
        this.create_input();
        this.create_displayer();
        this.add_on_change_event(chart_structure);
        this.select_default_value(default_value);
    }
    get_element() {
        return this.input;
    }
    get_value() {
        return this.values[Number.parseInt(this.input.value)];
    }
    create_input() {
        this.input.className = "chart-filter-input";
        this.input.type = 'range';
        this.input.min = "0";
        this.input.max = (this.values.length - 1).toString();
        this.input.value = this.input.max;
        this.input.step = "1";
        this.container.appendChild(this.input);
    }
    create_displayer() {
        this.displayer.className = "chart-filter-displayer";
        this.display_selected_value();
        this.container.appendChild(this.displayer);
    }
    add_on_change_event(chart_structure) {
        this.input.addEventListener("change", () => {
            this.display_selected_value();
            chart_structure.revalidate_filters();
        }, false);
    }
    display_selected_value() {
        let value = this.get_value();
        if (value !== null) {
            this.displayer.innerHTML = value.toString();
        }
    }
    set_available_values(_) {
    }
    select_default_value(default_value) {
        if (default_value !== null) {
            let index = this.values.indexOf(default_value);
            if (index >= 0) {
                this.input.value = index.toString();
                this.display_selected_value();
            }
        }
    }
}
