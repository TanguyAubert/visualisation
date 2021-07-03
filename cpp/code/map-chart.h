#ifndef MAP_CHART_H
#define MAP_CHART_H

#include "chart.h"

class Map_Chart : public Chart<Map_Chart>
{
    private:

        Field<std::string> map_area;
        Field<std::string> location_variable;
        Field<std::string> value_variable;
        Field<std::string> min_color;
        Field<std::string> middle_color;
        Field<std::string> max_color;
        Field<double> middle_value;
        Field<std::string> water_color;
        Field<std::string> null_color;
        Field<bool> visible_names;

    public:

        auto & set_map_area          (str value)         { map_area = value;          return *this; }
        auto & set_location_variable (str value)         { location_variable = value; return *this; }
        auto & set_value_variable    (str value)         { value_variable = value;    return *this; }
        auto & set_min_color         (str value)         { min_color = value;         return *this; }
        auto & set_middle_color      (str value)         { middle_color = value;      return *this; }
        auto & set_max_color         (str value)         { max_color = value;         return *this; }
        auto & set_middle_value      (double value)      { middle_value = value;      return *this; }
        auto & set_water_color       (str value)         { water_color = value;       return *this; }
        auto & set_null_color        (str value)         { null_color = value;        return *this; }
        auto & set_visible_names     (bool value)        { visible_names = value;     return *this; }
        
        std::string render() const
        {
            std::string code;

            code += render_initialization("Map_Chart");
            code += render_graphic_options();
            code += render_chart_options();
            code += render_map_chart_options();
            code += render_filters();
            code += ";";
            code += render_draw_request();

            return render_graphic(code);
        }

    private:

        std::string render_map_chart_options() const
        {
            std::string code;

            code += render_option("map_area", map_area);
            code += render_option("location_variable", location_variable);
            code += render_option("value_variable", value_variable);
            code += render_option("min_color", min_color);
            code += render_option("middle_color", middle_color);
            code += render_option("max_color", max_color);
            code += render_option("middle_value", middle_value, false);
            code += render_option("water_color", water_color);
            code += render_option("null_color", null_color);
            code += render_option("visible_names", visible_names, false);

            return code;
        }
};

#endif // MAP_CHART_H
