#ifndef COMBO_CHART_H
#define COMBO_CHART_H

#include "chart.h"

class Combo_Chart : public Chart<Combo_Chart>
{
    private:

        Field<std::string> legend_position;
        Field<std::string> x_variable;
        Field<std::string> y_variable;
        Field<std::string> by_variable;
        Field<std::string> type_variable;
        Field<std::string> color_variable;
        Field<std::string> y_axis_variable;

        Field<int> line_width;
        Field<int> marker_radius;
        Field<std::string> stacking_type;
        Field<double> column_spacing;
        
        std::vector<std::string> x_order;
        std::vector<std::string> by_order;

        Field<double> y_min_value_1;
        Field<double> y_max_value_1;
        Field<double> y_min_value_2;
        Field<double> y_max_value_2;

    public:

        auto & set_legend_position(str value)     { legend_position = value; return *this; }
        auto & set_x_variable     (str value)     { x_variable = value;      return *this; }
        auto & set_y_variable     (str value)     { y_variable = value;      return *this; }
        auto & set_by_variable    (str value)     { by_variable = value;     return *this; }
        auto & set_type_variable  (str value)     { type_variable = value;   return *this; }
        auto & set_color_variable (str value)     { color_variable = value;  return *this; }
        auto & set_y_axis_variable(str value)     { y_axis_variable = value; return *this; }
        auto & set_y_min_value_1  (double value)  { y_min_value_1 = value;   return *this; }
        auto & set_y_max_value_1  (double value)  { y_max_value_1 = value;   return *this; }
        auto & set_y_min_value_2  (double value)  { y_min_value_2 = value;   return *this; }
        auto & set_y_max_value_2  (double value)  { y_max_value_2 = value;   return *this; }

        template<typename... Args>
        auto & set_x_order(Args... value)
        {
            x_order = Utils::to_vector<std::string>(value...);
            
            return *this;
        }

        template<typename... Args>
        auto & set_by_order(Args... value)
        {
            by_order = Utils::to_vector<std::string>(value...);
            
            return *this;
        }
        
        auto & set_line_width           (int value)     { line_width = value;             return *this; }
        auto & set_marker_radius        (int value)     { marker_radius = value;          return *this; }
        auto & set_stacking_type        (str value)     { stacking_type = value;          return *this; }
        
        std::string render() const
        {
            std::string code;

            code += render_initialization("Combo_Chart");
            code += render_graphic_options();
            code += render_chart_options();
            code += render_combo_chart_options();
            code += render_filters();
            code += ";";
            code += render_draw_request();

            return render_graphic(code);
        }

    private:
    
        std::string render_combo_chart_options() const
        {
            std::string code;

            code += render_option("legend_position", legend_position);
            code += render_option("x_variable", x_variable);
            code += render_option("y_variable", y_variable);
            code += render_option("by_variable", by_variable);
            code += render_option("type_variable", type_variable);
            code += render_option("color_variable", color_variable);
            code += render_option("y_axis_variable", y_axis_variable);
            code += render_vector_of_options("x_order", x_order);
            code += render_vector_of_options("by_order", by_order);
            code += render_option("y_min_value_1", y_min_value_1, false);
            code += render_option("y_max_value_1", y_max_value_1, false);
            code += render_option("y_min_value_2", y_min_value_2, false);
            code += render_option("y_max_value_2", y_max_value_2, false);
            
            code += render_option("line_width", line_width, false);
            code += render_option("marker_radius", marker_radius, false);
            code += render_option("stacking_type", stacking_type);

            return code;
        }
};

#endif // COMBO_CHART_H
