"use strict";
class Chart extends Graphic {
    constructor() {
        super(...arguments);
        this.minimum_width = -Infinity;
        this.maximum_width = Infinity;
        this.minimum_height = -Infinity;
        this.maximum_height = Infinity;
        this.height_width_ratio = 1;
        this.digits = null;
    }
    //// Setters ////
    set_minimum_width(value) {
        const variable = "minimum_width";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_maximum_width(value) {
        const variable = "maximum_width";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_minimum_height(value) {
        const variable = "minimum_height";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_maximum_height(value) {
        const variable = "maximum_height";
        if (this.checker.is_numeric(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_height_width_ratio(value) {
        const variable = "height_width_ratio";
        if (this.checker.is_numeric(variable, value)
            && this.checker.is_strictly_greater_than(variable, value, 0)) {
            this[variable] = value;
        }
        return this;
    }
    set_digits(value) {
        const variable = "digits";
        if (this.checker.is_numeric(variable, value)
            && this.checker.is_greater_than(variable, value, 0)) {
            this[variable] = value;
        }
        return this;
    }
    //// Getters ////
    get_minimum_width() { return this.minimum_width; }
    get_maximum_width() { return this.maximum_width; }
    get_minimum_height() { return this.minimum_height; }
    get_maximum_height() { return this.maximum_height; }
    get_height_width_ratio() { return this.height_width_ratio; }
    get_digits() { return this.digits; }
}
