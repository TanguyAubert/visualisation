
Documentation <- methods::setRefClass(
    
    Class = "Documentation",
    
    methods = base::list(
        
        create = function(.self, output_file_path)
        {
            document <- Document()$
                css(get_css_path("chart.css"))$
                body(
                    Tag("div")$
                        add_style("max-width", "1200px")$
                        add_style("margin", "auto")$
                        add_style("padding", "20px 20px")$
                        append(
                            .self$render_title(),
                            .self$render_tags_section(),
                            .self$render_combo_charts_section(),
                            .self$render_map_charts_section(),
                            .self$render_pie_charts_section(),
                            .self$render_tables_section(),
                            .self$render_codes_section(),
                            .self$render_tabs_section()
                        )
                )
            
            save_text_to_file(document$render(), output_file_path)
        },
        
        render_title = function(.self)
        {
            return (
                Tag("h1")$
                    add_text("Documentation")$
                    add_style("display", "block")$
                    add_style("text-align", "center")
            )
        },
        
        render_tags_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Tags"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Tag_1()$to_string(), Tag_1()$create()))$
                            add_tab("Example 2", .self$add_example(Tag_2()$to_string(), Tag_2()$create()))$
                            add_tab("Example 3", .self$add_example(Tag_3()$to_string(), Tag_3()$create()))$
                            add_tab("Example 4", .self$add_example(Tag_4()$to_string(), Tag_4()$create()))
                    )
            )
        },
        
        render_combo_charts_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Combo charts"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Combo_Chart_1()$to_string(), Combo_Chart_1()$create()))$
                            add_tab("Example 2", .self$add_example(Combo_Chart_2()$to_string(), Combo_Chart_2()$create()))$
                            add_tab("Example 3", .self$add_example(Combo_Chart_3()$to_string(), Combo_Chart_3()$create()))$
                            add_tab("Example 4", .self$add_example(Combo_Chart_4()$to_string(), Combo_Chart_4()$create()))
                    )
            )
        },
        
        render_map_charts_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Map charts"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Map_Chart_1()$to_string(), Map_Chart_1()$create()))$
                            add_tab("Example 2", .self$add_example(Map_Chart_2()$to_string(), Map_Chart_2()$create()))$
                            add_tab("Example 3", .self$add_example(Map_Chart_3()$to_string(), Map_Chart_3()$create()))
                    )
            )
        },
        
        render_pie_charts_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Pie charts"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Pie_Chart_1()$to_string(), Pie_Chart_1()$create()))$
                            add_tab("Example 2", .self$add_example(Pie_Chart_2()$to_string(), Pie_Chart_2()$create()))
                    )
            )
        },
        
        render_tables_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Tables"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Table_1()$to_string(), Table_1()$create()))
                    )
            )
        },
        
        render_codes_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Code"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Code_1()$to_string(), Code_1()$create()))
                    )
            )
        },
        
        render_tabs_section = function(.self)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_section_title("Tabs"),
                        Tabs()$
                            add_tab("Example 1", .self$add_example(Tabs_1()$to_string(), Tabs_1()$create()))
                    )
            )
        },
        
        render_section_title = function(.self, text)
        {
            return (
                Tag("h2")$
                    add_text(text)$
                    add_style("padding-top", "10px")
            )
        },
        
        render_code = function(.self, code)
        {
            return (
                Code()$
                    set_language("cpp")$
                    set_text(code)
            )
        },
        
        add_example = function(.self, code, node)
        {
            return (
                Tag("div")$
                    append(
                        .self$render_code(code),
                        Tag("div")$append(node)
                    )
            )
        }
    )
)
