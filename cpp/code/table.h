#ifndef TABLE_H
#define TABLE_H

#include "chart.h"

class Table : public Graphic<Table>
{
    private:

        struct Uniform_Color
        {
            std::string variable;
            std::string color;
        };

        struct Gradient_Color
        {
            std::string variable;
            std::string min_color;
            std::string middle_color;
            std::string max_color;
            double middle_value;
        };

        struct Variable_Color
        {
            std::string variable;
            std::string color_variable;
        };

        std::vector<std::string> columns_order;
        std::vector< std::vector<std::string> > headers;
        std::vector<Uniform_Color> uniform_colors;
        std::vector<Gradient_Color> gradient_colors;
        std::vector<Variable_Color> variable_colors;

    public:

        template<typename... Args>
        auto & set_columns_order(Args... value)
        {
            columns_order = Utils::to_vector<std::string>(value...);

            return *this;
        }

        template<typename... Args>
        auto & add_header(Args... value)
        {
            headers.push_back(Utils::to_vector<std::string>(value...));
            return *this;
        }

        auto & set_color_uniform(str variable, str color)
        {
            uniform_colors.emplace_back(Uniform_Color{variable, color});
            return *this;
        }

        auto & set_color_gradient(str variable, str min_color, str middle_color, str max_color, double middle_value)
        {
            gradient_colors.emplace_back(Gradient_Color{variable, min_color, middle_color, max_color, middle_value}); 
            return *this;
        }

        auto & set_color_variable(str variable, str color_variable)
        {
            variable_colors.emplace_back(Variable_Color{variable, color_variable});
            return *this;
        }

        std::string render() const
        {
            std::string output;

            output += render_initialization("Table");
            output += render_graphic_options();
            output += render_vector_of_options("columns_order", columns_order);
            output += render_headers();
            output += render_colors();
            output += render_filters();
            output += ";";
            output += render_draw_request();

            return render_graphic(output);
        }

        std::string render_headers() const
        {
            std::string output;

            for (auto && header : headers)
            {
                output += "\n.add_header(";
                output += render_vector(header, true);
                output += ")";
            }

            return output;
        }

        std::string render_colors() const
        {
            std::string output;

            for (auto && color : uniform_colors)
            {
                output += "\n.set_color_uniform(";
                output += Utils::single_quote(color.variable) + ", ";
                output += Utils::single_quote(color.color) + ")";
            }
            
            for (auto && color : gradient_colors)
            {
                output += "\n.set_color_gradient(";
                output += Utils::single_quote(color.variable) + ", ";
                output += Utils::single_quote(color.min_color) + ", ";
                output += Utils::single_quote(color.middle_color) + ", ";
                output += Utils::single_quote(color.max_color) + ", ";
                output += Utils::to_string(color.middle_value) + ")";
            }
            
            for (auto && color : variable_colors)
            {
                output += "\n.set_color_variable(";
                output += Utils::single_quote(color.variable) + ", ";
                output += Utils::single_quote(color.color_variable) + ")";
            }
            
            return output;
        }
};

#endif // TABLE_H
