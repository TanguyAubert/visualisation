#ifndef DOCUMENTATION_H
#define DOCUMENTATION_H

#include "visualisation.h"

namespace Documentation
{
    template <typename T>
    Tag add_example(const std::string & code, T && node)
    {
        return Tag("div")
        (
            render_code(code),
            Tag("div")(node)
        );
    }
    
    Tag render_section_title(const std::string & text)
    {
        return Tag("h2")
        .add_text(text)
        .add_style("padding-top", "10px")
        ;
    }

    Code render_code(const std::string & code)
    {
        return Code()
        .set_language("cpp")
        .set_text(code);
    }

    Tag render_title()
    {
        return Tag("h1")
        .add_text("Documentation")
        .add_style("display", "block")
        .add_style("text-align", "center")
        ;
    }

    Tag render_tags_section()
    {
        return Tag("div")
        (
            render_section_title("Tags"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Tag_1::to_string(), Example::Tag_1::create()))
            .add_tab("Example 2", add_example(Example::Tag_2::to_string(), Example::Tag_2::create()))
            .add_tab("Example 3", add_example(Example::Tag_3::to_string(), Example::Tag_3::create()))
            .add_tab("Example 4", add_example(Example::Tag_4::to_string(), Example::Tag_4::create()))
        );
    }

    Tag render_combo_charts_section()
    {
        return Tag("div")
        (
            render_section_title("Combo charts"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Combo_Chart_1::to_string(), Example::Combo_Chart_1::create()))
            .add_tab("Example 2", add_example(Example::Combo_Chart_2::to_string(), Example::Combo_Chart_2::create()))
            .add_tab("Example 3", add_example(Example::Combo_Chart_3::to_string(), Example::Combo_Chart_3::create()))
            .add_tab("Example 4", add_example(Example::Combo_Chart_4::to_string(), Example::Combo_Chart_4::create()))
        );
    }

    Tag render_map_charts_section()
    {
        return Tag("div")
        (
            render_section_title("Map charts"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Map_Chart_1::to_string(), Example::Map_Chart_1::create()))
            .add_tab("Example 2", add_example(Example::Map_Chart_2::to_string(), Example::Map_Chart_2::create()))
            .add_tab("Example 3", add_example(Example::Map_Chart_3::to_string(), Example::Map_Chart_3::create()))
        );
    }

    Tag render_pie_charts_section()
    {
        return Tag("div")
        (
            render_section_title("Pie charts"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Pie_Chart_1::to_string(), Example::Pie_Chart_1::create()))
            .add_tab("Example 2", add_example(Example::Pie_Chart_2::to_string(), Example::Pie_Chart_2::create()))
        );
    }

    Tag render_tables_section()
    {
        return Tag("div")
        (
            render_section_title("Tables"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Table_1::to_string(), Example::Table_1::create()))
        );
    }

    Tag render_codes_section()
    {
        return Tag("div")
        (
            render_section_title("Code"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Code_1::to_string(), Example::Code_1::create()))
        );
    }

    Tag render_tabs_section()
    {
        return Tag("div")
        (
            render_section_title("Tabs"),
            Tabs()
            .add_tab("Example 1", add_example(Example::Tabs_1::to_string(), Example::Tabs_1::create()))
        );
    }

    void create(const std::string & output_file_path)
    {
        auto document = 

        Document()
        .css(Visualisation::get_css_path("chart.css"))
        .body
        (
            Tag("div")
            .add_style("max-width", "1200px")
            .add_style("margin", "auto")
            .add_style("padding", "20px 20px")
            (
                render_title(),
                render_tags_section(),
                render_combo_charts_section(),
                render_map_charts_section(),
                render_pie_charts_section(),
                render_tables_section(),
                render_codes_section(),
                render_tabs_section()
            )
        )
        ;

        Utils::save_text_to_file(output_file_path, document.render());
    }
}

#endif // DOCUMENTATION_H

