"use strict";
const Legend_Positions = ["right", "left", "bottom", "top"];
const Stacking_Types = ["none", "stacked", "percent"];
class Combo_Chart extends Chart {
    constructor(columns) {
        super(columns);
        this.legend_position = "right";
        this.x_variable = "";
        this.y_variable = "";
        this.by_variable = "";
        this.type_variable = "";
        this.color_variable = "";
        this.y_axis_variable = "";
        this.x_order = [];
        this.by_order = [];
        this.y_min_value_1 = null;
        this.y_max_value_1 = null;
        this.y_min_value_2 = null;
        this.y_max_value_2 = null;
        this.line_width = 2;
        this.marker_radius = 7;
        this.stacking_type = "stacked";
        this.minimum_height = 400;
        this.maximum_height = 800;
        this.height_width_ratio = 3 / 5;
    }
    //// Setters ////
    set_legend_position(value) {
        const variable = "legend_position";
        if (this.checker.is_string_and_belong_to(variable, value, Legend_Positions.map(x => x))) {
            this[variable] = value;
        }
        return this;
    }
    set_x_variable(value) {
        const variable = "x_variable";
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
    set_by_variable(value) {
        const variable = "by_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_type_variable(value) {
        const variable = "type_variable";
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
    set_y_axis_variable(value) {
        const variable = "y_axis_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_x_order(value) {
        const variable = "x_order";
        if (this.checker.is_not_null_nor_undefined(variable, value)) {
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
    set_y_min_value_1(value) {
        const variable = "y_min_value_1";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_max_value_1(value) {
        const variable = "y_max_value_1";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_min_value_2(value) {
        const variable = "y_min_value_2";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_max_value_2(value) {
        const variable = "y_max_value_2";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_line_width(value) {
        const variable = "line_width";
        if (this.checker.is_numeric(variable, value)
            && this.checker.is_greater_than(variable, value, 0)) {
            this[variable] = value;
        }
        return this;
    }
    set_marker_radius(value) {
        const variable = "marker_radius";
        if (this.checker.is_numeric(variable, value)
            && this.checker.is_greater_than(variable, value, 0)) {
            this[variable] = value;
        }
        return this;
    }
    set_stacking_type(value) {
        const variable = "stacking_type";
        if (this.checker.is_string_and_belong_to(variable, value, Stacking_Types.map(x => x))) {
            this[variable] = value;
        }
        return this;
    }
    //// Getters ////
    get_legend_position() { return this.legend_position; }
    get_x_variable() { return this.x_variable; }
    get_y_variable() { return this.y_variable; }
    get_by_variable() { return this.by_variable; }
    get_type_variable() { return this.type_variable; }
    get_color_variable() { return this.color_variable; }
    get_y_axis_variable() { return this.y_axis_variable; }
    get_x_order() { return this.x_order; }
    get_by_order() { return this.by_order; }
    get_y_min_value_1() { return this.y_min_value_1; }
    get_y_max_value_1() { return this.y_max_value_1; }
    get_y_min_value_2() { return this.y_min_value_2; }
    get_y_max_value_2() { return this.y_max_value_2; }
    get_line_width() { return this.line_width; }
    get_marker_radius() { return this.marker_radius; }
    get_stacking_type() { return this.stacking_type; }
    draw_inside(structure) {
        if (this.library === "HIGHCHARTS") {
            Highcharts_Combo_Chart.draw(this, structure);
        }
        else {
            Highcharts_Combo_Chart.draw(this, structure);
        }
        return this;
    }
    check_absence_of_duplicates() {
        let keys = [this.x_variable, this.by_variable];
        this.filters.forEach(x => keys.push(x.variable));
        this.checker.check_absence_of_duplicates(this.data, keys);
    }
    //// x-order ////
    create_x_order(data) {
        let order = this.x_order;
        if (order.length > 1) {
            let sens = order[0];
            if (sens === "--DECREASING--" || sens === "--INCREASING--") {
                let has_x_variable = data.has_variable(this.x_variable);
                let has_y_variable = data.has_variable(this.y_variable);
                let has_by_variable = data.has_variable(this.by_variable);
                let factor = sens === "--DECREASING--" ? -1 : 1;
                if (order.length === 1 && has_x_variable && has_y_variable) {
                    order = this.get_x_order_in_case_of_a_single_series(data, factor);
                }
                else if (order.length === 2 && order[1] === "--ALPHABETIC--" && has_x_variable) {
                    order = this.get_x_order_alphabetically(data, factor);
                }
                else if (order.length === 2 && has_x_variable && has_y_variable && has_by_variable) {
                    order = this.get_x_order_in_case_of_multiple_series(data, factor, order[1]);
                }
            }
        }
        order = data.order_unique_values(this.x_variable, order);
        return order;
    }
    get_x_order_in_case_of_a_single_series(data, factor) {
        let x_values = data.get_text_column(this.x_variable);
        let y_values = data.get_numeric_column(this.y_variable);
        let values = [];
        for (let i = 0, I = x_values.length; i < I; ++i) {
            values.push({ x: x_values[i], y: y_values[i] });
        }
        values.sort((a, b) => (a.y - b.y) * factor);
        return values.map(value => value.x);
    }
    get_x_order_alphabetically(data, factor) {
        let x_values = data.get_text_column(this.x_variable);
        x_values = Utils.get_uniques(x_values);
        x_values.sort((a, b) => {
            if (a < b)
                return -factor;
            if (a > b)
                return factor;
            return 0;
        });
        return x_values;
    }
    get_x_order_in_case_of_multiple_series(data, factor, name) {
        let x_values = data.get_text_column(this.x_variable);
        let y_values = data.get_numeric_column(this.y_variable);
        let by_values = data.get_text_column(this.by_variable);
        let values = [];
        for (let i = 0, I = x_values.length; i < I; ++i) {
            if (by_values[i] === name) {
                values.push({ x: x_values[i], y: y_values[i] });
            }
        }
        values.sort((a, b) => (a.y - b.y) * factor);
        return values.map(value => value.x);
    }
    //// by-order ////
    create_by_order(data) {
        let by_order = data.order_unique_values(this.by_variable, this.by_order);
        if (by_order.length === 0)
            by_order.push("");
        return by_order;
    }
}
