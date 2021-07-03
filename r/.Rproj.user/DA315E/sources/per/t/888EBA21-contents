
Data_1 <- methods::setRefClass(
    
    Class = "Data_1",
    
    methods = base::list(
        
        create = function()
        {
            data_1 <- data.table::fread(get_data_path("data-1.csv"))
            data_1[, Y2 := base::as.numeric(stringr::str_replace(Y2, ",", "."))]
            return (data_1)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_1 <- data.table::fread(\"data/data-1.csv\")",
                    "\ndata_1[, Y2 := base::as.numeric(stringr::str_replace(Y2, \",\", \".\"))]",
                    "\nreturn (data_1)"
                )
            )
        }
    )
)

Data_2 <- methods::setRefClass(
    
    Class = "Data_2",
    
    methods = base::list(
        
        create = function()
        {
            data_2 <- data.table::fread(get_data_path("data-2.csv"))
            data_2[, valeur := base::suppressWarnings(base::as.numeric(stringr::str_replace(valeur, ",", ".")))]
            return (data_2)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_2 <- data.table::fread(\"data/data-2.csv\")",
                    "\ndata_2[, valeur := base::as.numeric(stringr::str_replace(valeur, \",\", \".\"))]",
                    "\nreturn (data_2)"
                )
            )
        }
    )
)

Data_3 <- methods::setRefClass(
    
    Class = "Data_3",
    
    methods = base::list(
        
        create = function()
        {
            data_3 <- data.table::fread(get_data_path("data-3.csv"))
            return (data_3)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_3 <- data.table::fread(\"data/data-3.csv\")",
                    "\nreturn (data_3)"
                )
            )
        }
    )
)

Data_4 <- methods::setRefClass(
    
    Class = "Data_4",
    
    methods = base::list(
        
        create = function()
        {
            data_4 <- data.table::fread(get_data_path("data-4.csv"))
            return (data_4)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_4 <- data.table::fread(\"data/data-4.csv\")",
                    "\nreturn (data_4)"
                )
            )
        }
    )
)

Data_5 <- methods::setRefClass(
    
    Class = "Data_5",
    
    methods = base::list(
        
        create = function()
        {
            data_5 <- data.table::fread(get_data_path("departements.csv"))
            data_5[, Valeur := base::as.numeric(stringr::str_replace(Valeur, ",", "."))]
            return (data_5)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_5 <- data.table::fread(\"data/departements.csv\")",
                    "\ndata_5[, Valeur := base::as.numeric(stringr::str_replace(Valeur, \",\", \".\"))]",
                    "\nreturn (data_5)"
                )
            )
        }
    )
)

Data_6 <- methods::setRefClass(
    
    Class = "Data_6",
    
    methods = base::list(
        
        create = function()
        {
            data_6 <- data.table::fread(get_data_path("regions.csv"))
            data_6[, Valeur := base::as.numeric(stringr::str_replace(Valeur, ",", "."))]
            return (data_6)
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\ndata_6 <- data.table::fread(\"data/regions.csv\")",
                    "\ndata_6[, Valeur := base::as.numeric(stringr::str_replace(Valeur, \",\", \".\"))]",
                    "\nreturn (data_6)"
                )
            )
        }
    )
)

Combo_Chart_1 <- methods::setRefClass(
    
    Class = "Combo_Chart_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Combo_Chart()$
                    set_data(Data_1()$create())$
                    set_title("Titre du graphique")$
                    set_sub_title("Sous-titre du graphique")$
                    set_x_variable("X")$
                    set_x_label("Dates")$
                    set_y_variable("Y2")$
                    set_y_label_1("Random values (1)")$
                    set_y_label_2("Random values (2)")$
                    set_by_variable("Name")$
                    set_type_variable("Type2")$
                    set_legend_position("right")$
                    set_y_axis_variable("axis-2")$
                    set_stacking_type("stacked")$
                    set_line_width(5)$
                    set_marker_radius(15)$
                    set_footnote("Note : ce graphique utilise la librarie Javascript Highcharts.")$
                    set_by_order("F", "G", "H", "...", "B", "A")$
                    set_y_min_value_1(10)$
                    set_y_max_value_1(50)$
                    set_y_min_value_2(0)$
                    set_y_max_value_2(20)$
                    set_download_enabled(TRUE)$
                    set_download_line_feed("\\r\\n")$
                    set_download_separator(",")$
                    set_digits(2)
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nCombo_Chart()$",
                    "\n\tset_data(Data_1()$create())$",
                    "\n\tset_title(\"Titre du graphique\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_x_variable(\"X\")$",
                    "\n\tset_x_label(\"Dates\")$",
                    "\n\tset_y_variable(\"Y2\")$",
                    "\n\tset_y_label_1(\"Random values (1)\")$",
                    "\n\tset_y_label_2(\"Random values (2)\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tset_type_variable(\"Type2\")$",
                    "\n\tset_legend_position(\"right\")$",
                    "\n\tset_y_axis_variable(\"axis-2\")$",
                    "\n\tset_stacking_type(\"stacked\")$",
                    "\n\tset_line_width(5)$",
                    "\n\tset_marker_radius(15)$",
                    "\n\tset_footnote(\"Note : ce graphique utilise la librarie Javascript Highcharts.\")$",
                    "\n\tset_by_order(\"F\", \"G\", \"H\", \"...\", \"B\", \"A\")$",
                    "\n\tset_y_min_value_1(10)$",
                    "\n\tset_y_max_value_1(50)$",
                    "\n\tset_y_min_value_2(0)$",
                    "\n\tset_y_max_value_2(20)$",
                    "\n\tset_download_enabled(TRUE)",
                    "\n\tset_download_line_feed(\"\\r\\n\")",
                    "\n\tset_download_separator(\",\")",
                    "\n\tset_digits(2)"
                )
            )
        }
    )
)

Combo_Chart_2 <- methods::setRefClass(
    
    Class = "Combo_Chart_2",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Combo_Chart()$
                    set_data(Data_3()$create())$
                    set_title("Combo chart")$
                    set_sub_title("Sous-titre du graphique")$
                    set_x_variable("X")$
                    set_y_variable("Y")$
                    set_by_variable("Name")$
                    set_type_variable("Type")$
                    set_legend_position("bottom")$
                    set_stacking_type("stacked")$
                    add_filter("Variable", "S?lectionner une variable :", "SELECTOR")$
                    add_filter("Name", "S?lectionner une s?rie :", "CURSOR")$
                    set_x_order("--INCREASING--")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nCombo_Chart()$",
                    "\n\tset_data(Data_3()$create())$",
                    "\n\tset_title(\"Combo chart\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_x_variable(\"X\")$",
                    "\n\tset_y_variable(\"Y\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tset_type_variable(\"Type\")$",
                    "\n\tset_legend_position(\"bottom\")$",
                    "\n\tset_stacking_type(\"stacked\")$",
                    "\n\tadd_filter(\"Variable\", \"S?lectionner une variable :\", \"SELECTOR\")$",
                    "\n\tadd_filter(\"Name\", \"S?lectionner une s?rie :\", \"CURSOR\")$",
                    "\n\tset_x_order(\"--INCREASING--\")"
                )
            )
        }
    )
)

Combo_Chart_3 <- methods::setRefClass(
    
    Class = "Combo_Chart_3",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Combo_Chart()$
                    set_data(Data_3()$create())$
                    set_title("Combo chart")$
                    set_sub_title("Sous-titre du graphique")$
                    set_x_variable("X")$
                    set_y_variable("Y")$
                    set_by_variable("Name")$
                    set_type_variable("Type")$
                    set_legend_position("bottom")$
                    set_stacking_type("stacked")$
                    add_filter("Variable", "S?lectionner une variable :", "SELECTOR")$
                    add_filter("Name", "S?lectionner une s?rie :", "CURSOR")$
                    set_x_order("--DECREASING--", "--ALPHABETIC--")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nCombo_Chart()$",
                    "\n\tset_data(Data_3()$create())$",
                    "\n\tset_title(\"Combo chart\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_x_variable(\"X\")$",
                    "\n\tset_y_variable(\"Y\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tset_type_variable(\"Type\")$",
                    "\n\tset_legend_position(\"bottom\")$",
                    "\n\tset_stacking_type(\"stacked\")$",
                    "\n\tadd_filter(\"Variable\", \"S?lectionner une variable :\", \"SELECTOR\")$",
                    "\n\tadd_filter(\"Name\", \"S?lectionner une s?rie :\", \"CURSOR\")$",
                    "\n\tset_x_order(\"--DECREASING--\", \"--ALPHABETIC--\")"
                )
            )
        }
    )
)

Combo_Chart_4 <- methods::setRefClass(
    
    Class = "Combo_Chart_4",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Combo_Chart()$
                    set_data(Data_1()$create())$
                    set_title("Titre du graphique")$
                    set_sub_title("Sous-titre du graphique")$
                    set_x_variable("X")$
                    set_y_variable("Y2")$
                    set_by_variable("Name")$
                    set_type_variable("Type2")$
                    set_x_order("--DECREASING--", "B")$
                    set_stacking_type("percent")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nCombo_Chart()$",
                    "\n\tset_data(Data_1()$create())$",
                    "\n\tset_title(\"Titre du graphique\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_x_variable(\"X\")$",
                    "\n\tset_y_variable(\"Y2\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tset_type_variable(\"Type2\")$",
                    "\n\tset_x_order(\"--DECREASING--\", \"B\")$",
                    "\n\tset_stacking_type(\"percent\")"
                )
            )
        }
    )
)

Map_Chart_1 <- methods::setRefClass(
    
    Class = "Map_Chart_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Map_Chart()$
                    set_data(Data_2()$create())$
                    set_location_variable("pays")$
                    set_value_variable("valeur")$
                    set_title("Carte de la zone euro")$
                    set_sub_title("Valeur al?atoire entre -1 et 1")$
                    set_footnote("Note : ce graphique utilise la librarie Javascript Highmaps.")$
                    set_digits(3)$
                    set_min_color("rgb(255, 127, 0)")$
                    set_max_color("rgb(127, 0, 255)")$
                    set_water_color("rgb(200, 230, 255)")$
                    add_filter("dates", "?ch?ance :", "CURSOR", "03/10/2020")$
                    set_maximum_width(800)$
                    set_visible_names(FALSE)$
                    set_null_color("rgb(255, 245, 230)")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nMap_Chart()$",
                    "\n\tset_data(Data_2()$create())$",
                    "\n\tset_location_variable(\"pays\")$",
                    "\n\tset_value_variable(\"valeur\")$",
                    "\n\tset_title(\"Carte de la zone euro\")$",
                    "\n\tset_sub_title(\"Valeur al?atoire entre -1 et 1\")$",
                    "\n\tset_footnote(\"Note : ce graphique utilise la librarie Javascript Highmaps.\")$",
                    "\n\tset_digits(3)$",
                    "\n\tset_min_color(\"rgb(255, 127, 0)\")$",
                    "\n\tset_max_color(\"rgb(127, 0, 255)\")$",
                    "\n\tset_water_color(\"rgb(200, 230, 255)\")$",
                    "\n\tadd_filter(\"dates\", \"?ch?ance :\", \"CURSOR\", \"03/10/2020\")$",
                    "\n\tset_maximum_width(800)$",
                    "\n\tset_visible_names(FALSE)$",
                    "\n\tset_null_color(\"rgb(255, 245, 230)\")"
                )
            )
        }
    )
)

Map_Chart_2 <- methods::setRefClass(
    
    Class = "Map_Chart_2",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Map_Chart()$
                    set_data(Data_5()$create())$
                    set_map_area("FR-DEP")$
                    set_location_variable("Zone")$
                    set_value_variable("Valeur")$
                    set_title("Carte de la France")$
                    set_sub_title("Cosinus")$
                    set_digits(3)$
                    set_visible_names(TRUE)
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nMap_Chart()$",
                    "\n\tset_data(Data_5()$create())$",
                    "\n\tset_map_area(\"FR-DEP\")$",
                    "\n\tset_location_variable(\"Zone\")$",
                    "\n\tset_value_variable(\"Valeur\")$",
                    "\n\tset_title(\"Carte de la France\")$",
                    "\n\tset_sub_title(\"Cosinus\")$",
                    "\n\tset_digits(3)$",
                    "\n\tset_visible_names(TRUE)"
                )
            )
        }
    )
)

Map_Chart_3 <- methods::setRefClass(
    
    Class = "Map_Chart_3",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Map_Chart()$
                    set_data(Data_6()$create())$
                    set_map_area("FR-REG")$
                    set_location_variable("Zone")$
                    set_value_variable("Valeur")$
                    set_title("Carte de la France")$
                    set_sub_title("Cosinus")$
                    set_digits(2)$
                    set_visible_names(TRUE)$
                    set_download_enabled(FALSE)
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nMap_Chart()$",
                    "\n\tset_data(Data_6()$create())$",
                    "\n\tset_map_area(\"FR-REG\")$",
                    "\n\tset_location_variable(\"Zone\")$",
                    "\n\tset_value_variable(\"Valeur\")$",
                    "\n\tset_title(\"Carte de la France\")$",
                    "\n\tset_sub_title(\"Cosinus\")$",
                    "\n\tset_digits(2)$",
                    "\n\tset_visible_names(TRUE)$",
                    "\n\tset_download_enabled(FALSE)"
                )
            )
        }
    )
)

Pie_Chart_1 <- methods::setRefClass(
    
    Class = "Pie_Chart_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Pie_Chart()$
                    set_data(Data_4()$create())$
                    set_title("Pie chart")$
                    set_sub_title("Sous-titre du graphique")$
                    set_y_variable("Y")$
                    set_by_variable("Name")$
                    set_color_variable("color_2")$
                    set_digits(2)$
                    add_filter("Variable", "S?lectionner une variable :", "SELECTOR")$
                    add_filter("X", "S?lectionner une date :", "CURSOR")$
                    set_by_order("H", "...", "A", "D")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nPie_Chart()$",
                    "\n\tset_data(Data_4()$create())$",
                    "\n\tset_title(\"Pie chart\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_y_variable(\"Y\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tset_color_variable(\"color_2\")$",
                    "\n\tset_digits(2)$",
                    "\n\tadd_filter(\"Variable\", \"S?lectionner une variable :\", \"SELECTOR\")$",
                    "\n\tadd_filter(\"X\", \"S?lectionner une date :\", \"CURSOR\")$",
                    "\n\tset_by_order(\"H\", \"...\", \"A\", \"D\")"
                )
            )
        }
    )
)

Pie_Chart_2 <- methods::setRefClass(
    
    Class = "Pie_Chart_2",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Pie_Chart()$
                    set_data(Data_4()$create())$
                    set_title("Pie chart")$
                    set_sub_title("Sous-titre du graphique")$
                    set_y_variable("Y")$
                    set_by_variable("Name")$
                    add_filter("Variable", "S?lectionner une variable :", "SELECTOR")$
                    add_filter("X", "S?lectionner une date :", "CURSOR")$
                    set_by_order("--DECREASING--")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nPie_Chart()$",
                    "\n\tset_data(Data_4()$create())$",
                    "\n\tset_title(\"Pie chart\")$",
                    "\n\tset_sub_title(\"Sous-titre du graphique\")$",
                    "\n\tset_y_variable(\"Y\")$",
                    "\n\tset_by_variable(\"Name\")$",
                    "\n\tadd_filter(\"Variable\", \"S?lectionner une variable :\", \"SELECTOR\")$",
                    "\n\tadd_filter(\"X\", \"S?lectionner une date :\", \"CURSOR\")$",
                    "\n\tset_by_order(\"--DECREASING--\")"
                )
            )
        }
    )
)

Code_1 <- methods::setRefClass(
    
    Class = "Code_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Code()$
                    set_language("cpp")$
                    set_text(
                        base::paste0(
                            "\n#ifndef ZERO_COUPON_BOND_H",
                            "\n#define ZERO_COUPON_BOND_H",
                            "\nnamespace Zero_Coupon_Bond",
                            "\n{",
                            "\n    // r : initial interest rate",
                            "\n    // Theta : long-term mean",
                            "\n    // Kappa : speed reversion toward long-term mean",
                            "\n    // Sigma : volatility",
                            "\n    // T : time at which the price is computed",
                            "\n    // S : time at which the bond matures S > T",
                            "\n    // Drift : a function with the signature double (*Drift)(double)",
                            "\n    // N : the number of steps for integrating the drift N > 0",
                            "\n    double Price_Vasicek(double T, double S, double Theta, double Kappa, double Sigma, double r);",
                            "\n    double Price_CIR(double T, double S, double Theta, double Kappa, double Sigma, double r);",
                            "\n    double Price_Ho_Lee(double T, double S, double (*Drift)(double), double Sigma, double r, long N);",
                            "\n    double Price_Hull_White(double T, double S, double (*Theta)(double), double Kappa, double Sigma, double r, long N);",
                            "\n};",
                            "\n#endif // ZERO_COUPON_BOND_H"
                        )
                    )
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nCode()$",
                    "\n\tset_language(\"cpp\")$",
                    "\n\tset_text(",
                    "\n\t\tbase::paste0(",
                    "\n\t\t\t\"\n#ifndef ZERO_COUPON_BOND_H\",",
                    "\n\t\t\t\"\n#define ZERO_COUPON_BOND_H\",",
                    "\n\t\t\t\"\nnamespace Zero_Coupon_Bond\",",
                    "\n\t\t\t\"\n{\",",
                    "\n\t\t\t\"\n    // r : initial interest rate\",",
                    "\n\t\t\t\"\n    // Theta : long-term mean\",",
                    "\n\t\t\t\"\n    // Kappa : speed reversion toward long-term mean\",",
                    "\n\t\t\t\"\n    // Sigma : volatility\",",
                    "\n\t\t\t\"\n    // T : time at which the price is computed\",",
                    "\n\t\t\t\"\n    // S : time at which the bond matures S > T\",",
                    "\n\t\t\t\"\n    // Drift : a function with the signature double (*Drift)(double)\",",
                    "\n\t\t\t\"\n    // N : the number of steps for integrating the drift N > 0\",",
                    "\n\t\t\t\"\n    double Price_Vasicek(double T, double S, double Theta, double Kappa, double Sigma, double r);\",",
                    "\n\t\t\t\"\n    double Price_CIR(double T, double S, double Theta, double Kappa, double Sigma, double r);\",",
                    "\n\t\t\t\"\n    double Price_Ho_Lee(double T, double S, double (*Drift)(double), double Sigma, double r, long N);\",",
                    "\n\t\t\t\"\n    double Price_Hull_White(double T, double S, double (*Theta)(double), double Kappa, double Sigma, double r, long N);\",",
                    "\n\t\t\t\"\n};\",",
                    "\n\t\t\t\"\n#endif // ZERO_COUPON_BOND_H\"",
                    "\n\t\t)",
                    "\n\t)"
                )
            )
        }
    )
)

Table_1 <- methods::setRefClass(
    
    Class = "Table_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Table()$
                    set_data(Data_4()$create())$
                    set_title("Un tableau")$
                    set_sub_title("Sous-titre")$
                    add_filter("Variable", "S?lectionner une variable :", "SELECTOR", "V2")$
                    add_filter("X", "S?lectionner une date :", "CURSOR")$
                    set_columns_order("Name", "Y", "Type")$
                    add_header("Noms", "Valeurs", "Type de donn?es")$
                    add_header("Name", "Y", "Type")$
                    set_color_variable("Name", "color")$
                    set_color_gradient("Y", "rgb(255, 127, 127)", "rgb(255, 255, 255)", "rgb(127, 127, 255)", 0)$
                    set_color_uniform("Type", "rgb(240, 255, 240)")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTable()$",
                    "\n\tset_data(Data_4()$create())$",
                    "\n\tset_title(\"Un tableau\")$",
                    "\n\tset_sub_title(\"Sous-titre\")$",
                    "\n\tadd_filter(\"Variable\", \"S?lectionner une variable :\", \"SELECTOR\", \"V2\")$",
                    "\n\tadd_filter(\"X\", \"S?lectionner une date :\", \"CURSOR\")$",
                    "\n\tset_columns_order(\"Name\", \"Y\", \"Type\")$",
                    "\n\tadd_header(\"Noms\", \"Valeurs\", \"Type de donn?es\")$",
                    "\n\tadd_header(\"Name\", \"Y\", \"Type\")$",
                    "\n\tset_color_variable(\"Name\", \"color\")$",
                    "\n\tset_color_gradient(\"Y\", \"rgb(255, 127, 127)\", \"rgb(255, 255, 255)\", \"rgb(127, 127, 255)\", 0)$",
                    "\n\tset_color_uniform(\"Type\", \"rgb(240, 255, 240)\")"
                )
            )
        }
    )
)

Tabs_1 <- methods::setRefClass(
    
    Class = "Tabs_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Tabs()$
                    add_tab("Pie chart", Pie_Chart_1()$create())$
                    add_tab("Tableau", Table_1()$create())
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTabs()$",
                    "\n\tadd_tab(\"Pie chart\", Pie_Chart_1()$create())$",
                    "\n\tadd_tab(\"Tableau\", Table_1()$create())"
                )
            )
        }
    )
)

Tag_1 <- methods::setRefClass(
    
    Class = "Tag_1",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Tag("p")$
                    add_text(
                        base::paste0(
                            "But I must explain to you how all this mistaken idea of denouncing pleasure ",
                            "and praising pain was born and I will give you a complete account of the system, ",
                            "and expound the actual teachings of the great explorer of the truth, ",
                            "the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure ",
                            "itself, because it is pleasure, but because those who do not know how to pursue ",
                            "pleasure rationally encounter consequences that are extremely painful. Nor again ",
                            "is there anyone who loves or pursues or desires to obtain pain of itself, because it ",
                            "is pain, but because occasionally circumstances occur in which toil and pain can ",
                            "procure him some great pleasure. To take a trivial example, which of us ever ",
                            "undertakes laborious physical exercise, except to obtain some advantage from it? ",
                            "But who has any right to find fault with a man who chooses to enjoy a pleasure ",
                            "that has no annoying consequences, or one who avoids a pain that produces no ",
                            "resultant pleasure?"
                        )
                    )$
                    add_style("background-color", "rgb(240, 240, 240)")$
                    add_style("border", "solid rgb(200, 200, 200) 2px")$
                    add_style("padding", "20px")$
                    add_style("font", "1.1em Times New Roman")$
                    add_style("line-height", "2em")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTag(\"p\")$",
                    "\n\tadd_text(",
                    "\n\t\tbase::paste0(",
                    "\n\t\t\t\"But I must explain to you how all this mistaken idea of denouncing pleasure \",",
                    "\n\t\t\t\"and praising pain was born and I will give you a complete account of the system, \",",
                    "\n\t\t\t\"and expound the actual teachings of the great explorer of the truth, \",",
                    "\n\t\t\t\"the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure \",",
                    "\n\t\t\t\"itself, because it is pleasure, but because those who do not know how to pursue \",",
                    "\n\t\t\t\"pleasure rationally encounter consequences that are extremely painful. Nor again \",",
                    "\n\t\t\t\"is there anyone who loves or pursues or desires to obtain pain of itself, because it \",",
                    "\n\t\t\t\"is pain, but because occasionally circumstances occur in which toil and pain can \",",
                    "\n\t\t\t\"procure him some great pleasure. To take a trivial example, which of us ever \",",
                    "\n\t\t\t\"undertakes laborious physical exercise, except to obtain some advantage from it? \",",
                    "\n\t\t\t\"But who has any right to find fault with a man who chooses to enjoy a pleasure \",",
                    "\n\t\t\t\"that has no annoying consequences, or one who avoids a pain that produces no \",",
                    "\n\t\t\t\"resultant pleasure?\"",
                    "\n\t\t)",
                    "\n\t)$",
                    "\n\tadd_style(\"background-color\", \"rgb(240, 240, 240)\")$",
                    "\n\tadd_style(\"border\", \"solid rgb(200, 200, 200) 2px\")$",
                    "\n\tadd_style(\"padding\", \"20px\")$",
                    "\n\tadd_style(\"font\", \"1.1em Times New Roman\")$",
                    "\n\tadd_style(\"line-height\", \"2em\")"
                )
            )
        }
    )
)

Tag_2 <- methods::setRefClass(
    
    Class = "Tag_2",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Tag("p")$
                    add_text(
                        base::paste0("An inline formula ",
                                     inline_formula("\\int_{x = -\\pi}^{\\pi}(cos(x))dx"),
                                     " and",
                                     block_formula("\\sum_{i = 0}^{100}[\\frac{1}{i^2}]"),
                                     "a block formula !")
                    )$
                    add_style("background-color", "rgb(240, 240, 240)")$
                    add_style("border", "solid rgb(200, 200, 200) 2px")$
                    add_style("padding", "20px")$
                    add_style("font", "1.1em Times New Roman")$
                    add_style("line-height", "2em")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTag(\"p\")$",
                    "\n\tadd_text(",
                    "\n\t\tbase::paste0(\"An inline formula \",",
                    "\n\t\tinline_formula(\"/int_{x = -/pi}^{/pi}(cos(x))dx\"),",
                    "\n\t\t\" and\",",
                    "\n\t\tblock_formula(\"/sum_{i = 0}^{100}[/frac{1}{i^2}]\"),",
                    "\n\t\t\"a block formula !\")",
                    "\n\t)$",
                    "\n\tadd_style(\"background-color\", \"rgb(240, 240, 240)\")$",
                    "\n\tadd_style(\"border\", \"solid rgb(200, 200, 200) 2px\")$",
                    "\n\tadd_style(\"padding\", \"20px\")$",
                    "\n\tadd_style(\"font\", \"1.1em Times New Roman\")$",
                    "\n\tadd_style(\"line-height\", \"2em\")"
                )
            )
        }
    )
)

Tag_3 <- methods::setRefClass(
    
    Class = "Tag_3",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Tag("p")$
                    add_text(
                        Tag("a")$
                            add_attribute("href", "http://www.cplusplus.com/doc/tutorial/inheritance/")$
                            add_attribute("target", "_blank")$
                            add_text("cplusplus")$
                            render()
                    )$
                    add_style("background-color", "rgb(240, 240, 240)")$
                    add_style("border", "solid rgb(200, 200, 200) 2px")$
                    add_style("padding", "20px")$
                    add_style("font", "1.1em Times New Roman")$
                    add_style("line-height", "2em")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTag(\"p\")$",
                    "\n\tadd_text(",
                    "\n\t\tTag(\"a\")$",
                    "\n\t\tadd_attribute(\"href\", \"http://www.cplusplus.com/doc/tutorial/inheritance/\")$",
                    "\n\t\tadd_attribute(\"target\", \"_blank\")$",
                    "\n\t\tadd_text(\"cplusplus\")$",
                    "\n\t\trender()",
                    "\n\t)$",
                    "\n\tadd_style(\"background-color\", \"rgb(240, 240, 240)\")$",
                    "\n\tadd_style(\"border\", \"solid rgb(200, 200, 200) 2px\")$",
                    "\n\tadd_style(\"padding\", \"20px\")$",
                    "\n\tadd_style(\"font\", \"1.1em Times New Roman\")$",
                    "\n\tadd_style(\"line-height\", \"2em\")"
                )
            )
        }
    )
)

Tag_4 <- methods::setRefClass(
    
    Class = "Tag_4",
    
    methods = base::list(
        
        create = function()
        {
            return (
                Tag("p")$
                    add_text(
                        base::paste0(
                            "But I must explain to you how all this mistaken idea of denouncing pleasure ",
                            "and praising pain was born and I will give you a complete account of the system, ",
                            "and expound the actual teachings of the great explorer of the truth, ",
                            "the master-builder of human happiness. ",
                            inline_formula("\\int_{x = -\\pi}^{\\pi}(cos(x))dx"),
                            " No one rejects, dislikes, or avoids pleasure ",
                            "itself, because it is pleasure, but because those who do not know how to pursue ",
                            "pleasure rationally encounter consequences that are extremely painful. ",
                            Tag("a")$
                                add_attribute("href", "http://www.cplusplus.com/doc/tutorial/inheritance/")$
                                add_attribute("target", "_blank")$
                                add_text("cplusplus")$
                                render(),
                            " Nor again ",
                            "is there anyone who loves or pursues or desires to obtain pain of itself, because it ",
                            "is pain, but because occasionally circumstances occur in which toil and pain can ",
                            "procure him some great pleasure. To take a trivial example, which of us ever ",
                            "undertakes laborious physical exercise, except to obtain some advantage from it? ",
                            block_formula("\\sum_{i = 0}^{100}[\\frac{1}{i^2}]"),
                            "But who has any right to find fault with a man who chooses to enjoy a pleasure ",
                            "that has no annoying consequences, or one who avoids a pain that produces no ",
                            "resultant pleasure?"
                        )
                    )$
                    add_style("background-color", "rgb(240, 240, 240)")$
                    add_style("border", "solid rgb(200, 200, 200) 2px")$
                    add_style("padding", "20px")$
                    add_style("font", "1.1em Times New Roman")$
                    add_style("line-height", "2em")
            )
        },
        
        to_string = function()
        {
            return (
                base::paste0(
                    "\nTag(\"p\")$",
                    "\n\tadd_text(",
                    "\n\t\tbase::paste0(",
                    "\n\t\t\t\"But I must explain to you how all this mistaken idea of denouncing pleasure \",",
                    "\n\t\t\t\"and praising pain was born and I will give you a complete account of the system, \",",
                    "\n\t\t\t\"and expound the actual teachings of the great explorer of the truth, \",",
                    "\n\t\t\t\"the master-builder of human happiness. \",",
                    "\n\t\t\tinline_formula(\"/int_{x = -/pi}^{/pi}(cos(x))dx\"),",
                    "\n\t\t\t\" No one rejects, dislikes, or avoids pleasure \",",
                    "\n\t\t\t\"itself, because it is pleasure, but because those who do not know how to pursue \",",
                    "\n\t\t\t\"pleasure rationally encounter consequences that are extremely painful. \",",
                    "\n\t\t\tTag(\"a\")$",
                    "\n\t\t\t\tadd_attribute(\"href\", \"http://www.cplusplus.com/doc/tutorial/inheritance/\")$",
                    "\n\t\t\t\tadd_attribute(\"target\", \"_blank\")$",
                    "\n\t\t\t\tadd_text(\"cplusplus\")$",
                    "\n\t\t\t\trender(),",
                    "\n\t\t\t\" Nor again \",",
                    "\n\t\t\t\"is there anyone who loves or pursues or desires to obtain pain of itself, because it \",",
                    "\n\t\t\t\"is pain, but because occasionally circumstances occur in which toil and pain can \",",
                    "\n\t\t\t\"procure him some great pleasure. To take a trivial example, which of us ever \",",
                    "\n\t\t\t\"undertakes laborious physical exercise, except to obtain some advantage from it? \",",
                    "\n\t\t\tblock_formula(\"/sum_{i = 0}^{100}[/frac{1}{i^2}]\"),",
                    "\n\t\t\t\"But who has any right to find fault with a man who chooses to enjoy a pleasure \",",
                    "\n\t\t\t\"that has no annoying consequences, or one who avoids a pain that produces no \",",
                    "\n\t\t\t\"resultant pleasure?\"",
                    "\n\t\t)",
                    "\n\t)$",
                    "\n\tadd_style(\"background-color\", \"rgb(240, 240, 240)\")$",
                    "\n\tadd_style(\"border\", \"solid rgb(200, 200, 200) 2px\")$",
                    "\n\tadd_style(\"padding\", \"20px\")$",
                    "\n\tadd_style(\"font\", \"1.1em Times New Roman\")$",
                    "\n\tadd_style(\"line-height\", \"2em\")"
                )
            )
        }
    )
)

Example <- methods::setRefClass(
    
    Class = "Example",
    
    methods = base::list(
        
        create = function(output_file_path)
        {
            document <- Document()$
                css(get_css_path("chart.css"))$
                body(
                    Tag("div")$
                        add_style("max-width", "1200px")$
                        add_style("margin", "auto")$
                        add_style("padding", "20px 20px")$
                        append(
                            Tag("h1")$
                                add_text("Titre de la page")$
                                add_style("display", "block")$
                                add_style("text-align", "center")
                            ,
                            
                            Tag("br"),
                            
                            Tag_1()$create(),
                            Combo_Chart_1()$create(),
                            Code_1()$create(),
                            Map_Chart_1()$create(),
                            Combo_Chart_2()$create(),
                            Pie_Chart_1()$create(),
                            Table_1()$create(),
                            Map_Chart_2()$create(),
                            Map_Chart_3()$create(),
                            
                            Tag("table")$
                                append(
                                    Tag("tr")$
                                        append(
                                            Tag("td")$
                                                add_style("text-align", "right")$
                                                append(Combo_Chart_3()$create()),
                                            
                                            Tag("td")$
                                                add_style("text-align", "left")$
                                                append(Pie_Chart_2()$create())
                                        )
                                )
                            ,
                            
                            Combo_Chart_4()$create(),
                            Tabs_1()$create(),
                            Tag_2()$create(),
                            Tag_3()$create(),
                            Tag_4()$create()
                            
                        )
                )
            
            save_text_to_file(document$render(), output_file_path)
        }
    )
)
