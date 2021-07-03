"use strict";
class Checker {
    constructor() {
        this.disabled = false;
        this.warnings = {};
    }
    disable() {
        this.disabled = true;
    }
    is_not_null_nor_undefined(variable, value) {
        if (this.disabled)
            return true;
        if (value === null || value === undefined) {
            return this.log(variable, value, "is null or undefined");
        }
        return true;
    }
    is_boolean(variable, value) {
        if (this.disabled)
            return true;
        if (typeof value !== "boolean") {
            return this.log(variable, value, "is not a boolean");
        }
        return true;
    }
    is_numeric(variable, value) {
        if (this.disabled)
            return true;
        if (typeof value !== "number") {
            return this.log(variable, value, "is not a number");
        }
        return true;
    }
    is_string(variable, value) {
        if (this.disabled)
            return true;
        if (typeof value !== "string") {
            return this.log(variable, value, "is not a string");
        }
        return true;
    }
    exists(variable, value, table) {
        if (this.disabled)
            return true;
        if (!table.has_variable(value)) {
            return this.log(variable, value, "does not exists");
        }
        return true;
    }
    is_string_and_exists(variable, value, table) {
        return this.is_string(variable, value) && this.exists(variable, value, table);
    }
    is_smaller_than(variable, value, maximum_value) {
        if (this.disabled)
            return true;
        if (value > maximum_value) {
            return this.log(variable, value, "is not smaller than " + maximum_value);
        }
        return true;
    }
    is_strictly_smaller_than(variable, value, maximum_value) {
        if (this.disabled)
            return true;
        if (value >= maximum_value) {
            return this.log(variable, value, "is not strictly smaller than " + maximum_value);
        }
        return true;
    }
    is_greater_than(variable, value, minimum_value) {
        if (this.disabled)
            return true;
        if (value < minimum_value) {
            return this.log(variable, value, "is not greater than " + minimum_value);
        }
        return true;
    }
    is_strictly_greater_than(variable, value, minimum_value) {
        if (this.disabled)
            return true;
        if (value <= minimum_value) {
            return this.log(variable, value, "is not strictly greater than " + minimum_value);
        }
        return true;
    }
    is_a_color(variable, value) {
        if (this.disabled)
            return true;
        if (!Utils.is_a_color(value)) {
            return this.log(variable, value, "is not a valid color (#FFF or #FFFFFF or rgb(255, 255, 255) or rgba(255, 255, 255, 0.5))");
        }
        return true;
    }
    is_string_and_a_color(variable, value) {
        return this.is_string(variable, value) && this.is_a_color(variable, value);
    }
    belong_to(variable, value, collection) {
        if (this.disabled)
            return true;
        if (!collection.includes(value)) {
            return this.log(variable, value, "is not one of " + collection.join(", "));
        }
        return true;
    }
    is_string_and_belong_to(variable, value, collection) {
        return this.is_string(variable, value) && this.belong_to(variable, value, collection);
    }
    log(variable, value, message) {
        // Only the first error is logged
        if (!(variable in this.warnings)) {
            this.warnings[variable] =
                {
                    value: this.value_to_string(value),
                    message: message
                };
        }
        return false;
    }
    value_to_string(value) {
        if (value === null)
            return "null";
        else if (value === undefined)
            return "undefined";
        else if (typeof value === "string")
            return value;
        else if (typeof value === "number")
            return "'" + value.toString() + "'";
        else if (typeof value === "boolean")
            return (value ? "true" : "false");
        else if (typeof value === "object")
            return "object";
        return "DO_NOT_PRINT";
    }
    to_html() {
        let output = "";
        if (Object.keys(this.warnings).length > 0) {
            output += "Any incorrect value will be ignored and replaced with a default one :";
            for (let variable in this.warnings) {
                output += "<br/>ERROR : ";
                output += variable;
                if (this.warnings[variable].value !== "DO_NOT_PRINT") {
                    output += " [";
                    output += this.warnings[variable].value;
                    output += "]";
                }
                output += " ";
                output += this.warnings[variable].message;
                output += " !";
            }
            output += "<br/>To hide these errors, please call disable_checker().";
        }
        return output;
    }
    //// Duplicates ////
    check_absence_of_duplicates(data, variables) {
        let keys = new Set();
        for (let i = 0, I = data.get_length(); i < I; ++i) {
            let values = [];
            for (let variable of variables) {
                values.push(data.get_text_at(i, variable));
            }
            if (values.length > 0) {
                let key = values.join(",");
                if (keys.has(key)) {
                    this.log("Duplicate values by " + variables.toString(), "DO_NOT_PRINT", "");
                    return;
                }
                keys.add(key);
            }
        }
    }
}
