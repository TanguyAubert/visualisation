"use strict";
class Table extends Graphic {
    constructor() {
        super(...arguments);
        this.columns_order = [];
        this.headers = [];
        this.uniform_colors = {};
        this.gradient_colors = {};
        this.variable_colors = {};
    }
    //// Setters ////
    set_columns_order(value) {
        if (this.checker.is_not_null_nor_undefined("columns_order", value)) {
            this.columns_order = value;
        }
        return this;
    }
    set_color_uniform(variable, color) {
        if (this.checker.is_string("color_uniform-variable", variable)
            && this.checker.is_string_and_a_color("color_uniform-color", color)) {
            this.uniform_colors[variable] = color;
        }
        return this;
    }
    set_color_gradient(variable, min_color, middle_color, max_color, middle_value) {
        if (this.checker.is_string("color_gradient-variable", variable)
            && this.checker.is_string_and_a_color("color_gradient-min_color", min_color)
            && this.checker.is_string_and_a_color("color_gradient-middle_color", middle_color)
            && this.checker.is_string_and_a_color("color_gradient-max_color", max_color)) {
            this.gradient_colors[variable] =
                {
                    min_color: min_color,
                    middle_color: middle_color,
                    max_color: max_color,
                    middle_value: middle_value
                };
        }
        return this;
    }
    set_color_variable(variable, color_variable) {
        if (this.checker.is_string("color_variable-variable", variable)
            && this.checker.is_string_and_exists("color_variable-color_variable", color_variable, this.data)) {
            this.variable_colors[variable] = color_variable;
        }
        return this;
    }
    add_header(value) {
        if (this.checker.is_not_null_nor_undefined("header", value)) {
            this.headers.push(value);
        }
        return this;
    }
    //// Others ////
    draw_inside(structure) {
        let data = structure.get_filtered_data();
        structure.get_plot_area().innerHTML = this.render(data);
        return this;
    }
    check_absence_of_duplicates() {
        // Nothing to do
    }
    render(data) {
        if (this.columns_order.length === 0)
            this.columns_order.push("...");
        let variables = Utils.order_values(data.get_variables(), this.columns_order, false);
        let output = "<table class = 'table'>";
        output += this.render_headers(variables);
        output += this.render_body(data, variables);
        output += "</table>";
        return output;
    }
    render_headers(variables) {
        let output = "<thead>";
        if (this.headers.length > 0) {
            for (let header of this.headers) {
                output += this.render_header(header);
            }
        }
        else {
            output += this.render_header(variables);
        }
        output += "</thead>";
        return output;
    }
    render_header(header) {
        let output = "<tr>";
        for (let variable of header) {
            output += "<th>";
            output += variable;
            output += "</th>";
        }
        output += "</tr>";
        return output;
    }
    render_body(data, variables) {
        let gradients = this.create_gradients(data);
        let output = "<tbody>";
        for (let i = 0, I = data.get_length(); i < I; ++i) {
            output += this.render_row(data, i, variables, gradients);
        }
        output += "</tbody>";
        return output;
    }
    render_row(data, i, variables, gradients) {
        let output = "<tr class = '";
        output += i % 2 === 0 ? "even" : "odd";
        output += "'>";
        for (let variable of variables) {
            let value = data.get_text_at(i, variable);
            let color = this.get_color(data, i, variable, gradients);
            output += "<td";
            output += color === "" ? "" : (" style = 'background-color:" + color + "'");
            output += ">";
            output += value;
            output += "</td>";
        }
        output += "</tr>";
        return output;
    }
    get_color(data, i, variable, gradients) {
        if (variable in this.uniform_colors) {
            return this.uniform_colors[variable];
        }
        else if (variable in this.gradient_colors) {
            return gradients[variable][i].color;
        }
        else if (variable in this.variable_colors) {
            return data.get_text_at(i, this.variable_colors[variable]);
        }
        return "";
    }
    create_gradients(data) {
        let gradients = {};
        for (let variable in this.gradient_colors) {
            let gradient = this.gradient_colors[variable];
            let values = data.get_numeric_column(variable);
            gradients[variable] = Utils.map_values_to_colors(values, gradient.min_color, gradient.middle_color, gradient.max_color, gradient.middle_value);
            gradients[variable].sort(function (x, y) {
                return x.index - y.index;
            });
        }
        return gradients;
    }
}
