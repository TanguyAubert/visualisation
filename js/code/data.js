"use strict";
class Data {
    constructor(columns) {
        this.columns = columns;
    }
    static initialize_empty_data(variables) {
        let data = new Data({});
        for (let variable of variables) {
            data.columns[variable] = [];
        }
        return data;
    }
    has_variable(variable) {
        return this.columns.hasOwnProperty(variable);
    }
    get_variables() {
        return Object.getOwnPropertyNames(this.columns);
    }
    get_length() {
        let properties = Object.keys(this.columns);
        if (properties.length > 0) {
            return this.columns[properties[0]].length;
        }
        return 0;
    }
    get_text_at(i, variable) {
        return Utils.to_string(this.get_value_at(i, variable));
    }
    get_number_at(i, variable) {
        return Utils.to_number(this.get_value_at(i, variable));
    }
    get_value_at(i, variable) {
        if (this.has_variable(variable)) {
            return this.columns[variable][i];
        }
        return null;
    }
    get_text_column(variable) {
        let column = this.get_column(variable);
        if (column !== null) {
            return column.map(x => Utils.to_string(x));
        }
        else {
            return Utils.create_empty_array(this.get_length(), "");
        }
    }
    get_numeric_column(variable) {
        let column = this.get_column(variable);
        if (column !== null) {
            return column.map(x => Utils.to_number(x));
        }
        else {
            return Utils.create_empty_array(this.get_length(), NaN);
        }
    }
    get_column(variable) {
        if (this.has_variable(variable)) {
            return this.columns[variable];
        }
        return null;
    }
    filter_data(filters) {
        let filtered_data = Data.initialize_empty_data(Object.keys(this.columns));
        for (let i = 0, I = this.get_length(); i < I; ++i) {
            if (this.has_to_keep_row(i, filters)) {
                this.copy_row(filtered_data, i);
            }
        }
        return filtered_data;
    }
    has_to_keep_row(i, filters) {
        let keep = true;
        for (let variable in filters) {
            if (this.get_text_at(i, variable) !== filters[variable]) {
                keep = false;
            }
        }
        return keep;
    }
    copy_row(destination, i) {
        for (let variable in this.columns) {
            destination.columns[variable].push(this.get_value_at(i, variable));
        }
    }
    order_unique_values(variable, desired_order) {
        if (!this.has_variable(variable))
            return [];
        let values = this.get_text_column(variable);
        values = Utils.get_uniques(values);
        return Utils.order_values(values, desired_order);
    }
    to_csv(separator, line_feed) {
        let variables = this.get_variables();
        let output = variables.join(separator);
        let number_of_rows = this.get_length();
        for (let i = 0; i < number_of_rows; ++i) {
            output += line_feed;
            let j = 0;
            for (let variable of variables) {
                if (j++ > 0)
                    output += separator;
                output += this.get_value_at(i, variable);
            }
        }
        return output;
    }
    get_row(i) {
        let row = {};
        for (let variable of this.get_variables()) {
            row[variable] = this.get_value_at(i, variable);
        }
        return row;
    }
}
