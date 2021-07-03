"use strict";
class Bubble_Chart extends Chart {
    constructor(columns) {
        super(columns);
        this.legend_position = "right";
        this.x_variable = "";
        this.y_variable = "";
        this.z_variable = "";
        this.by_variable = "";
        this.type_variable = "";
        this.color_variable = "";
        this.y_axis_variable = "";
        this.by_order = [];
        this.x_min_value = null;
        this.x_max_value = null;
        this.y_min_value_1 = null;
        this.y_max_value_1 = null;
        this.y_min_value_2 = null;
        this.y_max_value_2 = null;
        this.x_axis_value = null;
        this.y_axis_value_1 = null;
        this.y_axis_value_2 = null;
        this.labels_variable = "";
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
    set_z_variable(value) {
        const variable = "z_variable";
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
    set_by_order(value) {
        const variable = "by_order";
        if (this.checker.is_not_null_nor_undefined(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_x_min_value(value) {
        const variable = "x_min_value";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_x_max_value(value) {
        const variable = "x_max_value";
        if (this.checker.is_numeric(variable, value)) {
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
    set_x_axis_value(value) {
        const variable = "x_axis_value";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_axis_value_1(value) {
        const variable = "y_axis_value_1";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_axis_value_2(value) {
        const variable = "y_axis_value_2";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_labels_variable(value) {
        const variable = "labels_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    //// Getters ////
    get_legend_position() { return this.legend_position; }
    get_x_variable() { return this.x_variable; }
    get_y_variable() { return this.y_variable; }
    get_z_variable() { return this.z_variable; }
    get_by_variable() { return this.by_variable; }
    get_type_variable() { return this.type_variable; }
    get_color_variable() { return this.color_variable; }
    get_y_axis_variable() { return this.y_axis_variable; }
    get_by_order() { return this.by_order; }
    get_x_min_value() { return this.x_min_value; }
    get_x_max_value() { return this.x_max_value; }
    get_y_min_value_1() { return this.y_min_value_1; }
    get_y_max_value_1() { return this.y_max_value_1; }
    get_y_min_value_2() { return this.y_min_value_2; }
    get_y_max_value_2() { return this.y_max_value_2; }
    get_x_axis_value() { return this.x_axis_value; }
    get_y_axis_value_1() { return this.y_axis_value_1; }
    get_y_axis_value_2() { return this.y_axis_value_2; }
    get_labels_variable() { return this.labels_variable; }
    draw_inside(structure) {
        if (this.library === "HIGHCHARTS") {
            Highcharts_Bubble_Chart.draw(this, structure);
        }
        else {
            Highcharts_Bubble_Chart.draw(this, structure);
        }
        return this;
    }
    check_absence_of_duplicates() {
        let keys = [this.x_variable, this.y_variable, this.by_variable];
        this.filters.forEach(x => keys.push(x.variable));
        if (this.labels_variable !== "") {
            keys.push(this.labels_variable);
        }
        this.checker.check_absence_of_duplicates(this.data, keys);
    }
    //// by-order ////
    create_by_order(data) {
        let by_order = data.order_unique_values(this.by_variable, this.by_order);
        if (by_order.length === 0)
            by_order.push("");
        return by_order;
    }
}
