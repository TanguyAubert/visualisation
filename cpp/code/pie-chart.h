#ifndef PIE_CHART_H
#define PIE_CHART_H

#include "chart.h"

class Pie_Chart : public Chart<Pie_Chart>
{
    private:

        Field<std::string> y_variable;
        Field<std::string> by_variable;
        Field<std::string> color_variable;
        std::vector<std::string> by_order;

    public:

        auto & set_y_variable     (str value)     { y_variable = value;      return *this; }
        auto & set_by_variable    (str value)     { by_variable = value;     return *this; }
        auto & set_color_variable (str value)     { color_variable = value;  return *this; }

        template<typename... Args>
        auto & set_by_order(Args... value)
        {
            by_order = Utils::to_vector<std::string>(value...);
            
            return *this;
        }

        std::string render() const
        {
            std::string code;

            code += render_initialization("Pie_Chart");
            code += render_graphic_options();
            code += render_chart_options();
            code += render_pie_chart_options();
            code += render_filters();
            code += ";";
            code += render_draw_request();

            return render_graphic(code);
        }

    private: 

        std::string render_pie_chart_options() const
        {
            std::string code;

            code += render_option("y_variable", y_variable);
            code += render_option("by_variable", by_variable);
            code += render_option("color_variable", color_variable);
            code += render_vector_of_options("by_order", by_order);

            return code;
        }
};

#endif // PIE_CHART_H
