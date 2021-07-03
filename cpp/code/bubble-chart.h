#ifndef BUBBLE_CHART_H
#define BUBBLE_CHART_H

#include "chart.h"

class Bubble_Chart : public Chart<Bubble_Chart>
{
    private:

        Field<std::string> legend_position;
        Field<std::string> x_variable;
        Field<std::string> y_variable;
        Field<std::string> z_variable;
        Field<std::string> by_variable;
        Field<std::string> type_variable;
        Field<std::string> color_variable;
        Field<std::string> y_axis_variable;

        std::vector<std::string> by_order;
        
        Field<double> x_min_value;
        Field<double> x_max_value;
        Field<double> y_min_value_1;
        Field<double> y_max_value_1;
        Field<double> y_min_value_2;
        Field<double> y_max_value_2;
        Field<double> x_axis_value;
        Field<double> y_axis_value_1;
        Field<double> y_axis_value_2;

        Field<std::string> labels_variable;

    public:

        auto & set_legend_position(str value)     { legend_position = value; return *this; }
        auto & set_x_variable     (str value)     { x_variable = value;      return *this; }
        auto & set_y_variable     (str value)     { y_variable = value;      return *this; }
        auto & set_z_variable     (str value)     { z_variable = value;      return *this; }
        auto & set_by_variable    (str value)     { by_variable = value;     return *this; }
        auto & set_type_variable  (str value)     { type_variable = value;   return *this; }
        auto & set_color_variable (str value)     { color_variable = value;  return *this; }
        auto & set_y_axis_variable(str value)     { y_axis_variable = value; return *this; }
        auto & set_x_min_value    (double value)  { x_min_value = value;     return *this; }
        auto & set_x_max_value    (double value)  { x_max_value = value;     return *this; }
        auto & set_y_min_value_1  (double value)  { y_min_value_1 = value;   return *this; }
        auto & set_y_max_value_1  (double value)  { y_max_value_1 = value;   return *this; }
        auto & set_y_min_value_2  (double value)  { y_min_value_2 = value;   return *this; }
        auto & set_y_max_value_2  (double value)  { y_max_value_2 = value;   return *this; }
        auto & set_x_axis_value    (double value) { x_axis_value = value;    return *this; }
        auto & set_y_axis_value_1  (double value) { y_axis_value_1 = value;  return *this; }
        auto & set_y_axis_value_2  (double value) { y_axis_value_2 = value;  return *this; }
        auto & set_labels_variable  (str value)   { labels_variable = value; return *this; }

        template<typename... Args>
        auto & set_by_order(Args... value)
        {
            by_order = Utils::to_vector<std::string>(value...);
            
            return *this;
        }
        
        std::string render() const
        {
            std::string code;

            code += render_initialization("Bubble_Chart");
            code += render_graphic_options();
            code += render_chart_options();
            code += render_bubble_chart_options();
            code += render_filters();
            code += ";";
            code += render_draw_request();

            return render_graphic(code);
        }

    private:
    
        std::string render_bubble_chart_options() const
        {
            std::string code;

            code += render_option("legend_position", legend_position);
            code += render_option("x_variable", x_variable);
            code += render_option("y_variable", y_variable);
            code += render_option("z_variable", z_variable);
            code += render_option("by_variable", by_variable);
            code += render_option("type_variable", type_variable);
            code += render_option("color_variable", color_variable);
            code += render_option("y_axis_variable", y_axis_variable);
            code += render_vector_of_options("by_order", by_order);
            code += render_option("x_min_value", x_min_value, false);
            code += render_option("x_max_value", x_max_value, false);
            code += render_option("y_min_value_1", y_min_value_1, false);
            code += render_option("y_max_value_1", y_max_value_1, false);
            code += render_option("y_min_value_2", y_min_value_2, false);
            code += render_option("y_max_value_2", y_max_value_2, false);
            code += render_option("x_axis_value", x_axis_value, false);
            code += render_option("y_axis_value_1", y_axis_value_1, false);
            code += render_option("y_axis_value_2", y_axis_value_2, false);
            code += render_option("labels_variable", labels_variable);

            return code;
        }
};

#endif // BUBBLE_CHART_H
