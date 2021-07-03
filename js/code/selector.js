"use strict";
class Selector extends Filter {
    constructor(label, variable, values, default_value, chart_structure) {
        super(label, variable, values);
        this.select = document.createElement("select");
        this.create_select();
        this.populate(values);
        this.add_on_change_event(chart_structure);
        this.select_default_value(default_value);
    }
    get_element() {
        return this.select;
    }
    get_value() {
        return this.values[this.select.selectedIndex];
    }
    create_select() {
        this.select.className = "chart-filter-select";
        this.container.appendChild(this.select);
    }
    populate(values) {
        for (let value of values) {
            this.append_option(value !== null ? value.toString() : "null");
        }
    }
    append_option(value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        this.select.appendChild(option);
    }
    add_on_change_event(chart_structure) {
        this.select.addEventListener("change", () => {
            chart_structure.revalidate_filters();
        }, false);
    }
    set_available_values(values) {
        for (let option of this.select.options) {
            let option_value = option.value;
            option.classList.add('chart-filter-option-not-available');
            for (let value of values) {
                if (value === null || value.toString() === option_value) {
                    option.classList.remove('chart-filter-option-not-available');
                    break;
                }
            }
        }
    }
    select_default_value(default_value) {
        if (default_value !== null && this.values.includes(default_value)) {
            this.select.value = default_value.toString();
        }
    }
}
