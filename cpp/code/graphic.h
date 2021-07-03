#ifndef GRAPHIC_H
#define GRAPHIC_H

#include <string>
#include <vector>
#include "node.h"
#include "utils.h"
#include "field.h"
#include "data.h"
#include "tag.h"

template <typename U>
class Graphic : public Node
{
    protected:

        using str = const std::string &;
        using str_vec = const std::vector<std::string> &;

        struct Filter
        {
            std::string variable;
            std::string label;
            std::string type;
            Field<std::string> default_value;

            Filter(str variable, str label, str type                   ) : variable(variable), label(label), type(type) {}
            Filter(str variable, str label, str type, str default_value) : variable(variable), label(label), type(type), default_value(default_value) {}
        };

        std::string id;
        Field<std::string> data_name;
        Field<Data> data;
        Field<std::string> title;
        Field<std::string> sub_title;
        Field<std::string> library;
        Field<std::string> footnote;
        Field<std::string> x_label;
        Field<std::string> y_label_1;
        Field<std::string> y_label_2;

        bool checker_disabled = false;

        std::vector<Filter> filters;

        Field<bool> download_enabled;
        Field<std::string> download_separator;
        Field<std::string> download_line_feed;
        
    public:

        Graphic() : id(Utils::generate_unique_id())
        {
            // NOTHING TO DO
        }

        U & set_data(const Data & value)
        {
            data = value;

            if(data_name.is_empty())
            {
                data_name = std::string("data_") + id;
            }

            return derived();
        }

        U & set_data_name          (str value) { data_name = value;          return derived(); }
        U & set_title              (str value) { title = value;              return derived(); }
        U & set_sub_title          (str value) { sub_title = value;          return derived(); }
        U & set_x_label            (str value) { x_label = value;            return derived(); }
        U & set_y_label_1          (str value) { y_label_1 = value;          return derived(); }
        U & set_y_label_2          (str value) { y_label_2 = value;          return derived(); }
        U & set_library            (str value) { library = value;            return derived(); }
        U & set_footnote           (str value) { footnote = value;           return derived(); }
        U & set_download_enabled   (bool value){ download_enabled = value;   return derived(); }
        U & set_download_separator (str value) { download_separator = value; return derived(); }
        U & set_download_line_feed (str value) { download_line_feed = value; return derived(); }
        U & disable_checker        ()          { checker_disabled = true;    return derived(); }

        U & add_filter(str variable, str label, str type)
        {
            filters.emplace_back(variable, label, type);

            return derived();
        }

        U & add_filter(str variable, str label, str type, str default_value)
        {
            filters.emplace_back(variable, label, type, default_value);

            return derived();
        }

    private:

        U & derived()
        {
            return static_cast<U &>(*this);
        }

        const U & derived() const
        {
            return static_cast<const U &>(*this);
        }

    protected:
        
        template <typename T>
        std::string render_option(str name, const Field<T> & value, bool do_quote = true) const
        {
            std::string code;

            if (!value.is_empty())
            {
                code += "\n.set_";
                code += name;
                code += "(";
                code += do_quote ? Utils::single_quote(value.to_string()) : value.to_string();
                code += ")";
            }

            return code;
        }

        template <typename T>
        std::string render_vector_of_options(str name, const std::vector<T> & values, bool do_quote = true) const
        {
            std::string code;

            if (!values.empty())
            {
                code += "\n.set_";
                code += name;
                code += "(";
                code += render_vector(values, do_quote);
                code += ")";
            }

            return code;
        }

        std::string render_initialization(str chart_type) const
        {
            std::string code;
            std::string chart_id = Utils::single_quote(std::string("chart-") + id);

            code += "\ncharts[";
            code += chart_id;
            code += "] = new ";
            code += chart_type;
            code += "(";
            code += data_name.to_string();
            code += ")";

            return code;
        }

        std::string render_draw_request() const
        {
            std::string code;
            std::string chart_id = Utils::single_quote(std::string("chart-") + id);

            code += "\ncharts[";
            code += chart_id;
            code += "].draw(";
            code += chart_id;
            code += ");\n";

            return code;
        }

        std::string render_graphic(str code) const
        {
            return 
            "\n" + render_container() + 
            "\n" + render_data() + 
            "\n" + render_code(code)
            ;
        }

        std::string render_container() const
        {
            return Tag("div").add_attribute("id", std::string("chart-") + id).render();
        }

        std::string render_data() const
        {
            if (!data.is_empty())
            {
                return data.get_value().set_name(data_name.get_value()).render();
            }
            
            return "";
        }

        std::string render_code(str code) const
        {
            return Tag("script").add_text(code).render();
        }

        std::string render_graphic_options() const
        {
            std::string code;

            if (checker_disabled)
            {
                code += "\n.disable_checker()";
            }

            code += render_option("title", title);
            code += render_option("sub_title", sub_title);
            code += render_option("x_label", x_label);
            code += render_option("y_label_1", y_label_1);
            code += render_option("y_label_2", y_label_2);
            code += render_option("footnote", footnote);
            code += render_option("download_enabled", download_enabled, false);
            code += render_option("download_separator", download_separator);
            code += render_option("download_line_feed", download_line_feed);
            
            return code;
        }

        std::string render_filters() const
        {
            std::string code;

            for (auto && filter : filters)
            {
                code += "\n.add_filter(";
                code += Utils::single_quote(filter.variable);
                code += ", ";
                code += Utils::single_quote(filter.label);
                code += ", ";
                code += Utils::single_quote(filter.type);
                code += ", ";
                code += filter.default_value.is_empty() ? "null" : Utils::single_quote(filter.default_value.to_string());
                code += ")";
            }

            return code;
        }

        std::string render_vector(str_vec values, bool do_quote) const
        {
            std::string output;
            std::string text;
                        
            for (auto && value : values)
            {
                text = Utils::to_string(value);

                if (!output.empty())
                {
                    output += ", ";
                }

                output += do_quote ? Utils::single_quote(text) : text;
            }

            output = std::string("[") + output + "]";

            return output;
        }
};

#endif // GRAPHIC_H
