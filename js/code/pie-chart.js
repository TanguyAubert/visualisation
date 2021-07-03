"use strict";
class Pie_Chart extends Chart {
    constructor(columns) {
        super(columns);
        this.by_variable = "";
        this.y_variable = "";
        this.color_variable = "";
        this.by_order = [];
        this.maximum_width = 800;
        this.maximum_height = 600;
        this.height_width_ratio = 4 / 5;
    }
    //// Setters ////
    set_by_variable(value) {
        const variable = "by_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_variable(value) {
        const variable = "y_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_color_variable(value) {
        const variable = "color_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_by_order(value) {
        const variable = "by_order";
        if (this.checker.is_not_null_nor_undefined(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    //// Getters ////
    get_by_variable() { return this.by_variable; }
    get_y_variable() { return this.y_variable; }
    get_color_variable() { return this.color_variable; }
    get_by_order() { return this.by_order; }
    draw_inside(structure) {
        if (this.library === "HIGHCHARTS") {
            Highcharts_Pie_Chart.draw(this, structure);
        }
        else {
            Highcharts_Pie_Chart.draw(this, structure);
        }
        return this;
    }
    check_absence_of_duplicates() {
        let keys = [this.by_variable];
        this.filters.forEach(x => keys.push(x.variable));
        this.checker.check_absence_of_duplicates(this.data, keys);
    }
    //// by-order ////
    create_by_order(data) {
        let order = this.by_order;
        if (order.length === 1) {
            let sens = order[0];
            if (sens === "--DECREASING--" || sens === "--INCREASING--") {
                let has_y_variable = data.has_variable(this.y_variable);
                let has_by_variable = data.has_variable(this.by_variable);
                let factor = sens === "--DECREASING--" ? -1 : 1;
                if (has_y_variable && has_by_variable) {
                    let by_values = data.get_text_column(this.by_variable);
                    let y_values = data.get_numeric_column(this.y_variable);
                    let values = [];
                    for (let i = 0, I = by_values.length; i < I; ++i) {
                        values.push({ x: by_values[i], y: y_values[i] });
                    }
                    values.sort((a, b) => (a.y - b.y) * factor);
                    order = values.map(value => value.x);
                }
            }
        }
        order = data.order_unique_values(this.by_variable, order);
        return order;
    }
}
