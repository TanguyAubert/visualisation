"use strict";
const Map_Areas = ["FR-DEP", "FR-REG", "UE"];
class Map_Chart extends Chart {
    constructor(columns) {
        super(columns);
        this.map_area = "UE";
        this.location_variable = "";
        this.value_variable = "";
        this.min_color = Color.red();
        this.middle_color = Color.white();
        this.max_color = Color.blue();
        this.middle_value = 0;
        this.water_color = Color.water();
        this.null_color = Color.grey();
        this.visible_names = true;
        this.maximum_width = 800;
        this.height_width_ratio = 1;
    }
    //// Setters ////
    set_map_area(value) {
        const variable = "map_area";
        if (this.checker.is_string_and_belong_to(variable, value, Map_Areas.map(x => x))) {
            this[variable] = value;
        }
        return this;
    }
    set_location_variable(value) {
        const variable = "location_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_value_variable(value) {
        const variable = "value_variable";
        if (this.checker.is_string_and_exists(variable, value, this.data)) {
            this[variable] = value;
        }
        return this;
    }
    set_min_color(value) {
        const variable = "min_color";
        if (this.checker.is_string_and_a_color(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_middle_color(value) {
        const variable = "middle_color";
        if (this.checker.is_string_and_a_color(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_max_color(value) {
        const variable = "max_color";
        if (this.checker.is_string_and_a_color(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_middle_value(value) {
        const variable = "middle_value";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_water_color(value) {
        const variable = "water_color";
        if (this.checker.is_string(variable, value)
            && this.checker.is_a_color(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_null_color(value) {
        const variable = "null_color";
        if (this.checker.is_string(variable, value)
            && this.checker.is_a_color(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_visible_names(value) {
        const variable = "visible_names";
        if (this.checker.is_boolean(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    //// Getters ////
    get_map_area() { return this.map_area; }
    get_location_variable() { return this.location_variable; }
    get_value_variable() { return this.value_variable; }
    get_min_color() { return this.min_color; }
    get_middle_color() { return this.middle_color; }
    get_max_color() { return this.max_color; }
    get_middle_value() { return this.middle_value; }
    get_water_color() { return this.water_color; }
    get_null_color() { return this.null_color; }
    get_visible_names() { return this.visible_names; }
    draw_inside(structure) {
        if (this.library === "HIGHCHARTS") {
            Highcharts_Map_Chart.draw(this, structure);
        }
        else {
            Highcharts_Map_Chart.draw(this, structure);
        }
        return this;
    }
    check_absence_of_duplicates() {
        let keys = [this.location_variable];
        this.filters.forEach(x => keys.push(x.variable));
        this.checker.check_absence_of_duplicates(this.data, keys);
    }
}
