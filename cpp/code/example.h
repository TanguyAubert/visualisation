#ifndef EXAMPLE_H
#define EXAMPLE_H

#include "visualisation.h"

namespace Example
{
    namespace Data_1
    {
        Data create()
        {
            return Data()
            .set_name("data_1")
            .set_source(Visualisation::get_data_path("data-1.csv"))
            .set_headers(0)
            .set_column_separator(";")
            .set_line_separator("\r\n")
            .keep_column(0, Data::Type::TEXT, "X")
            .keep_column(3, Data::Type::TEXT, "Name")
            .keep_column("Y", Data::Type::NUMBER, "Y")
            .keep_column("Type", Data::Type::TEXT, "Type")
            .keep_column("Y2", Data::Type::NUMBER, "Y2")
            .keep_column("Type2", Data::Type::TEXT, "Type2")
            .keep_column("axis-2", Data::Type::TEXT, "axis")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"data_1\")"
            "\n.set_source(\"data/data-1.csv\")"
            "\n.set_headers(0)"
            "\n.set_column_separator(\";\")"
            "\n.set_line_separator(\"\r\n\")"
            "\n.keep_column(0, Data::Type::TEXT, \"X\")"
            "\n.keep_column(3, Data::Type::TEXT, \"Name\")"
            "\n.keep_column(\"Y\", Data::Type::NUMBER, \"Y\")"
            "\n.keep_column(\"Type\", Data::Type::TEXT, \"Type\")"
            "\n.keep_column(\"Y2\", Data::Type::NUMBER, \"Y2\")"
            "\n.keep_column(\"Type2\", Data::Type::TEXT, \"Type2\")"
            "\n.keep_column(\"axis-2\", Data::Type::TEXT, \"axis\")"
            "\n;"
            ;
        }
    };

    namespace Data_2
    {
        Data create()
        {
            return Data()
            .set_name("data_2")
            .set_source(Visualisation::get_data_path("data-2.csv"))
            .set_headers(0)
            .set_column_separator(";")
            .set_line_separator("\r\n")
            .keep_column("dates", Data::Type::TEXT, "dates")
            .keep_column("pays", Data::Type::TEXT, "pays")
            .keep_column("valeur", Data::Type::NUMBER, "valeur")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"data_2\")"
            "\n.set_source(\"data/data-2.csv\")"
            "\n.set_headers(0)"
            "\n.set_column_separator(\";\")"
            "\n.set_line_separator(\"\r\n\")"
            "\n.keep_column(\"dates\", Data::Type::TEXT, \"dates\")"
            "\n.keep_column(\"pays\", Data::Type::TEXT, \"pays\")"
            "\n.keep_column(\"valeur\", Data::Type::NUMBER, \"valeur\")"
            "\n;"
            ;
        }
    };

    namespace Data_3
    {
        Data create()
        {
            return Data()
            .set_name("data_3")
            .set_source(Visualisation::get_data_path("data-3.csv"))
            .set_headers(0)
            .keep_column("Variable", Data::Type::TEXT, "Variable")
            .keep_column("X", Data::Type::TEXT, "X")
            .keep_column("Name", Data::Type::TEXT, "Name")
            .keep_column("Y", Data::Type::NUMBER, "Y")
            .keep_column("Type", Data::Type::TEXT, "Type")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"data_3\")"
            "\n.set_source(\"data/data-3.csv\")"
            "\n.set_headers(0)"
            "\n.keep_column(\"Variable\", Data::Type::TEXT, \"Variable\")"
            "\n.keep_column(\"X\", Data::Type::TEXT, \"X\")"
            "\n.keep_column(\"Name\", Data::Type::TEXT, \"Name\")"
            "\n.keep_column(\"Y\", Data::Type::NUMBER, \"Y\")"
            "\n.keep_column(\"Type\", Data::Type::TEXT, \"Type\")"
            "\n;"
            ;
        }
    };

    namespace Data_4
    {
        Data create()
        {
            return Data()
            .set_name("data_4")
            .set_source(Visualisation::get_data_path("data-4.csv"))
            .set_headers(0)
            .keep_column("Variable", Data::Type::TEXT, "Variable")
            .keep_column("X", Data::Type::TEXT, "X")
            .keep_column("Name", Data::Type::TEXT, "Name")
            .keep_column("Y", Data::Type::NUMBER, "Y")
            .keep_column("Type", Data::Type::TEXT, "Type")
            .keep_column("color", Data::Type::TEXT, "color")
            .keep_column("color_2", Data::Type::TEXT, "color_2")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"data_4\")"
            "\n.set_source(\"data/data-4.csv\")"
            "\n.set_headers(0)"
            "\n.keep_column(\"Variable\", Data::Type::TEXT, \"Variable\")"
            "\n.keep_column(\"X\", Data::Type::TEXT, \"X\")"
            "\n.keep_column(\"Name\", Data::Type::TEXT, \"Name\")"
            "\n.keep_column(\"Y\", Data::Type::NUMBER, \"Y\")"
            "\n.keep_column(\"Type\", Data::Type::TEXT, \"Type\")"
            "\n.keep_column(\"color\", Data::Type::TEXT, \"color\")"
            "\n.keep_column(\"color_2\", Data::Type::TEXT, \"color_2\")"
            "\n;"
            ;
        }

    };

    namespace Data_5
    {
        Data create()
        {
            return Data()
            .set_name("departements")
            .set_source(Visualisation::get_data_path("departements.csv"))
            .keep_column("Zone", Data::Type::TEXT, "Zone")
            .keep_column("Valeur", Data::Type::NUMBER, "Valeur")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"departements\")"
            "\n.set_source(\"data/departements.csv\")"
            "\n.keep_column(\"Zone\", Data::Type::TEXT, \"Zone\")"
            "\n.keep_column(\"Valeur\", Data::Type::NUMBER, \"Valeur\")"
            "\n;"
            ;
        }
    };

    namespace Data_6
    {
        Data create()
        {
            return Data()
            .set_name("regions")
            .set_source(Visualisation::get_data_path("regions.csv"))
            .keep_column("Zone", Data::Type::TEXT, "Zone")
            .keep_column("Valeur", Data::Type::NUMBER, "Valeur")
            ;
        }

        std::string to_string()
        {
            return "\nData()"
            "\n.set_name(\"regions\")"
            "\n.set_source(\"data/regions.csv\")"
            "\n.keep_column(\"Zone\", Data::Type::TEXT, \"Zone\")"
            "\n.keep_column(\"Valeur\", Data::Type::NUMBER, \"Valeur\")"
            "\n;"
            ;
        }
    };

    namespace Combo_Chart_1
    {
        Combo_Chart create()
        {
            return Combo_Chart()
            .set_data(Data_1::create())
            .set_title("Titre du graphique")
            .set_sub_title("Sous-titre du graphique")
            .set_x_variable("X")
            .set_x_label("Dates")
            .set_y_variable("Y2")
            .set_y_label_1("Random values (1)")
            .set_y_label_2("Random values (2)")
            .set_by_variable("Name")
            .set_type_variable("Type2")
            .set_legend_position("right")
            .set_y_axis_variable("axis")
            .set_stacking_type("stacked")
            .set_line_width(5)
            .set_marker_radius(15)
            .set_footnote("Note : ce graphique utilise la librarie Javascript Highcharts.")
            .set_by_order("F", "G", "H", "...", "B", "A")
            .set_y_min_value_1(10)
            .set_y_max_value_1(50)
            .set_y_min_value_2(0)
            .set_y_max_value_2(20)
            .set_download_enabled(true)
            .set_download_line_feed("\\r\\n")
            .set_download_separator(",")
            .set_digits(2)
            ;
        }

        std::string to_string()
        {
            return "\nCombo_Chart()"
            "\n.set_data(Data_1::create())"
            "\n.set_title(\"Titre du graphique\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_x_variable(\"X\")"
            "\n.set_x_label(\"Dates\")"
            "\n.set_y_variable(\"Y2\")"
            "\n.set_y_label_1(\"Random values (1)\")"
            "\n.set_y_label_2(\"Random values (2)\")"
            "\n.set_by_variable(\"Name\")"
            "\n.set_type_variable(\"Type2\")"
            "\n.set_legend_position(\"right\")"
            "\n.set_y_axis_variable(\"axis\")"
            "\n.set_stacking_type(\"stacked\")"
            "\n.set_line_width(5)"
            "\n.set_marker_radius(15)"
            "\n.set_footnote(\"Note : ce graphique utilise la librarie Javascript Highcharts.\")"
            "\n.set_by_order(\"F\", \"G\", \"H\", \"...\", \"B\", \"A\")"
            "\n.set_y_min_value_1(10)"
            "\n.set_y_max_value_1(50)"
            "\n.set_y_min_value_2(0)"
            "\n.set_y_max_value_2(20)"
            "\n.set_download_enabled(true)"
            "\n.set_download_line_feed(\"\\r\\n\")"
            "\n.set_download_separator(\",\")"
            "\n.set_digits(2)"
            "\n;"
            ;
        }
    }
    namespace Combo_Chart_2
    {
        Combo_Chart create()
        {
            return Combo_Chart()
            .set_data(Data_3::create())
            .set_title("Combo chart")
            .set_sub_title("Sous-titre du graphique")
            .set_x_variable("X")
            .set_y_variable("Y")
            .set_by_variable("Name")
            .set_type_variable("Type")
            .set_legend_position("bottom")
            .set_stacking_type("stacked")
            .add_filter("Variable", "Sélectionner une variable :", "SELECTOR")
            .add_filter("Name", "Sélectionner une série :", "CURSOR")
            .set_x_order("--INCREASING--")
            ;
        }

        std::string to_string()
        {
            return "\nCombo_Chart()"
            "\n.set_data(Data_3::create())"
            "\n.set_title(\"Combo chart\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_x_variable(\"X\")"
            "\n.set_y_variable(\"Y\")"
            "\n.set_by_variable(\"Name\")"
            "\n.set_type_variable(\"Type\")"
            "\n.set_legend_position(\"bottom\")"
            "\n.set_stacking_type(\"stacked\")"
            "\n.add_filter(\"Variable\", \"Sélectionner une variable :\", \"SELECTOR\")"
            "\n.add_filter(\"Name\", \"Sélectionner une série :\", \"CURSOR\")"
            "\n.set_x_order(\"--INCREASING--\")"
            "\n;"
            ;
        }
    }

    namespace Combo_Chart_3
    {
        Combo_Chart create()
        {
            return Combo_Chart()
            .set_data(Data_3::create())
            .set_title("Combo chart")
            .set_sub_title("Sous-titre du graphique")
            .set_x_variable("X")
            .set_y_variable("Y")
            .set_by_variable("Name")
            .set_type_variable("Type")
            .set_legend_position("bottom")
            .set_stacking_type("stacked")
            .add_filter("Variable", "Sélectionner une variable :", "SELECTOR")
            .add_filter("Name", "Sélectionner une série :", "CURSOR")
            .set_x_order("--DECREASING--", "--ALPHABETIC--")
            ;
        }

        std::string to_string()
        {
            return "\nCombo_Chart()"
            "\n.set_data(Data_3::create())"
            "\n.set_title(\"Combo chart\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_x_variable(\"X\")"
            "\n.set_y_variable(\"Y\")"
            "\n.set_by_variable(\"Name\")"
            "\n.set_type_variable(\"Type\")"
            "\n.set_legend_position(\"bottom\")"
            "\n.set_stacking_type(\"stacked\")"
            "\n.add_filter(\"Variable\", \"Sélectionner une variable :\", \"SELECTOR\")"
            "\n.add_filter(\"Name\", \"Sélectionner une série :\", \"CURSOR\")"
            "\n.set_x_order(\"--DECREASING--\", \"--ALPHABETIC--\")"
            "\n;"
            ;
        }
    }

    namespace Combo_Chart_4
    {
        Combo_Chart create()
        {
            return Combo_Chart()
            .set_data(Data_1::create())
            .set_title("Titre du graphique")
            .set_sub_title("Sous-titre du graphique")
            .set_x_variable("X")
            .set_y_variable("Y2")
            .set_by_variable("Name")
            .set_type_variable("Type2")
            .set_x_order("--DECREASING--", "B")
            .set_stacking_type("percent")
            ;
        }

        std::string to_string()
        {
            return "\nCombo_Chart()"
            "\n.set_data(Data_1::create())"
            "\n.set_title(\"Titre du graphique\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_x_variable(\"X\")"
            "\n.set_y_variable(\"Y2\")"
            "\n.set_by_variable(\"Name\")"
            "\n.set_type_variable(\"Type2\")"
            "\n.set_x_order(\"--DECREASING--\", \"B\")"
            "\n.set_stacking_type(\"percent\")"
            "\n;"
            ;
        }
    }
    
    namespace Map_Chart_1
    {
        Map_Chart create()
        {
            return Map_Chart()
            .set_data(Data_2::create())
            .set_location_variable("pays")
            .set_value_variable("valeur")
            .set_title("Carte de la zone euro")
            .set_sub_title("Valeur aléatoire entre -1 et 1")
            .set_footnote("Note : ce graphique utilise la librarie Javascript Highmaps.")
            .set_digits(3)
            .set_min_color("rgb(255, 127, 0)")
            .set_max_color("#7F00FF")
            .set_water_color("rgb(200, 230, 255)")
            .add_filter("dates", "Échéance :", "CURSOR", "03/10/2020")
            .set_maximum_width(800)
            .set_visible_names(false)
            .set_null_color("rgb(255, 245, 230)")
            ;
        }

        std::string to_string()
        {
            return "\nMap_Chart()"
            "\n.set_data(Data_2::create())"
            "\n.set_location_variable(\"pays\")"
            "\n.set_value_variable(\"valeur\")"
            "\n.set_title(\"Carte de la zone euro\")"
            "\n.set_sub_title(\"Valeur aléatoire entre -1 et 1\")"
            "\n.set_footnote(\"Note : ce graphique utilise la librarie Javascript Highmaps.\")"
            "\n.set_digits(3)"
            "\n.set_min_color(\"rgb(255, 127, 0)\")"
            "\n.set_max_color(\"#7F00FF\")"
            "\n.set_water_color(\"rgb(200, 230, 255)\")"
            "\n.add_filter(\"dates\", \"Échéance :\", \"CURSOR\", \"03/10/2020\")"
            "\n.set_maximum_width(800)"
            "\n.set_visible_names(false)"
            "\n.set_null_color(\"rgb(255, 245, 230)\")"
            "\n;"
            ;
        }
    };

    namespace Map_Chart_2
    {
        Map_Chart create()
        {
            return Map_Chart()
            .set_data(Data_5::create())
            .set_map_area("FR-DEP")
            .set_location_variable("Zone")
            .set_value_variable("Valeur")
            .set_title("Carte de la France")
            .set_sub_title("Cosinus")
            .set_digits(3)
            .set_visible_names(true)
            ;
        }

        std::string to_string()
        {
            return "\nMap_Chart()"
            "\n.set_data(Data_5::create())"
            "\n.set_map_area(\"FR-DEP\")"
            "\n.set_location_variable(\"Zone\")"
            "\n.set_value_variable(\"Valeur\")"
            "\n.set_title(\"Carte de la France\")"
            "\n.set_sub_title(\"Cosinus\")"
            "\n.set_digits(3)"
            "\n.set_visible_names(true)"
            "\n;"
            ;
        }
    };

    namespace Map_Chart_3
    {
        Map_Chart create()
        {
            return Map_Chart()
            .set_data(Data_6::create())
            .set_map_area("FR-REG")
            .set_location_variable("Zone")
            .set_value_variable("Valeur")
            .set_title("Carte de la France")
            .set_sub_title("Cosinus")
            .set_digits(2)
            .set_visible_names(true)
            .set_download_enabled(false)
            ;
        }

        std::string to_string()
        {
            return "\nMap_Chart()"
            "\n.set_data(Data_6::create())"
            "\n.set_map_area(\"FR-REG\")"
            "\n.set_location_variable(\"Zone\")"
            "\n.set_value_variable(\"Valeur\")"
            "\n.set_title(\"Carte de la France\")"
            "\n.set_sub_title(\"Cosinus\")"
            "\n.set_digits(2)"
            "\n.set_visible_names(true)"
            "\n.set_download_enabled(false)"
            "\n;"
            ;
        }
    };

    namespace Pie_Chart_1
    {
        Pie_Chart create()
        {
            return Pie_Chart()
            .set_data(Data_4::create())
            .set_title("Pie chart")
            .set_sub_title("Sous-titre du graphique")
            .set_y_variable("Y")
            .set_by_variable("Name")
            .set_color_variable("color_2")
            .set_digits(2)
            .add_filter("Variable", "Sélectionner une variable :", "SELECTOR")
            .add_filter("X", "Sélectionner une date :", "CURSOR")
            .set_by_order("H", "...", "A", "D")
            ;
        }

        std::string to_string()
        {
            return "\nPie_Chart()"
            "\n.set_data(Data_4::create())"
            "\n.set_title(\"Pie chart\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_y_variable(\"Y\")"
            "\n.set_by_variable(\"Name\")"
            "\n.set_color_variable(\"color_2\")"
            "\n.set_digits(2)"
            "\n.add_filter(\"Variable\", \"Sélectionner une variable :\", \"SELECTOR\")"
            "\n.add_filter(\"X\", \"Sélectionner une date :\", \"CURSOR\")"
            "\n.set_by_order(\"H\", \"...\", \"A\", \"D\")"
            "\n;"
            ;
        }
    };

    namespace Pie_Chart_2
    {
        Pie_Chart create()
        {
            return Pie_Chart()
            .set_data(Data_4::create())
            .set_title("Pie chart")
            .set_sub_title("Sous-titre du graphique")
            .set_y_variable("Y")
            .set_by_variable("Name")
            .add_filter("Variable", "Sélectionner une variable :", "SELECTOR")
            .add_filter("X", "Sélectionner une date :", "CURSOR")
            .set_by_order("--DECREASING--")
            ;
        }

        std::string to_string()
        {
            return "\nPie_Chart()"
            "\n.set_data(Data_4::create())"
            "\n.set_title(\"Pie chart\")"
            "\n.set_sub_title(\"Sous-titre du graphique\")"
            "\n.set_y_variable(\"Y\")"
            "\n.set_by_variable(\"Name\")"
            "\n.add_filter(\"Variable\", \"Sélectionner une variable :\", \"SELECTOR\")"
            "\n.add_filter(\"X\", \"Sélectionner une date :\", \"CURSOR\")"
            "\n.set_by_order(\"--DECREASING--\")"
            "\n;"
            ;
        }
    };

    namespace Code_1
    {
        Code create()
        {
            return Code()
            .set_language("cpp")
            .set_text(
                "\n#ifndef ZERO_COUPON_BOND_H"
                "\n#define ZERO_COUPON_BOND_H"
                "\nnamespace Zero_Coupon_Bond"
                "\n{"
                "\n    // r : initial interest rate"
                "\n    // Theta : long-term mean"
                "\n    // Kappa : speed reversion toward long-term mean"
                "\n    // Sigma : volatility"
                "\n    // T : time at which the price is computed"
                "\n    // S : time at which the bond matures S > T"
                "\n    // Drift : a function with the signature double (*Drift)(double)"
                "\n    // N : the number of steps for integrating the drift N > 0"
                "\n    double Price_Vasicek(double T, double S, double Theta, double Kappa, double Sigma, double r);"
                "\n    double Price_CIR(double T, double S, double Theta, double Kappa, double Sigma, double r);"
                "\n    double Price_Ho_Lee(double T, double S, double (*Drift)(double), double Sigma, double r, long N);"
                "\n    double Price_Hull_White(double T, double S, double (*Theta)(double), double Kappa, double Sigma, double r, long N);"
                "\n};"
                "\n#endif // ZERO_COUPON_BOND_H"
            )
            ;
        }

        std::string to_string()
        {
            return "\nCode()"
            "\n.set_language(\"cpp\")"
            "\n.set_text("
            "\n\t\"\n#ifndef ZERO_COUPON_BOND_H\""
            "\n\t\"\n#define ZERO_COUPON_BOND_H\""
            "\n\t\"\nnamespace Zero_Coupon_Bond\""
            "\n\t\"\n{\""
            "\n\t\"\n    // r : initial interest rate\""
            "\n\t\"\n    // Theta : long-term mean\""
            "\n\t\"\n    // Kappa : speed reversion toward long-term mean\""
            "\n\t\"\n    // Sigma : volatility\""
            "\n\t\"\n    // T : time at which the price is computed\""
            "\n\t\"\n    // S : time at which the bond matures S > T\""
            "\n\t\"\n    // Drift : a function with the signature double (*Drift)(double)\""
            "\n\t\"\n    // N : the number of steps for integrating the drift N > 0\""
            "\n\t\"\n    double Price_Vasicek(double T, double S, double Theta, double Kappa, double Sigma, double r);\""
            "\n\t\"\n    double Price_CIR(double T, double S, double Theta, double Kappa, double Sigma, double r);\""
            "\n\t\"\n    double Price_Ho_Lee(double T, double S, double (*Drift)(double), double Sigma, double r, long N);\""
            "\n\t\"\n    double Price_Hull_White(double T, double S, double (*Theta)(double), double Kappa, double Sigma, double r, long N);\""
            "\n\t\"\n};\""
            "\n\t\"\n#endif // ZERO_COUPON_BOND_H\""
            "\n)"
            "\n;"
            ;
        }
    };

    namespace Table_1
    {
        Table create()
        {
            return Table()
            .set_title("Un tableau")
            .set_sub_title("Sous-titre")
            .set_data(Data_4::create())
            .add_filter("Variable", "Sélectionner une variable :", "SELECTOR", "V2")
            .add_filter("X", "Sélectionner une date :", "CURSOR")
            .set_columns_order("Name", "Y", "Type")
            .add_header("Noms", "Valeurs", "Type de données")
            .add_header("Name", "Y", "Type")
            .set_color_variable("Name", "color")
            .set_color_gradient("Y", "rgb(255, 127, 127)", "rgb(255, 255, 255)", "rgb(127, 127, 255)", 0)
            .set_color_uniform("Type", "rgb(240, 255, 240)")
            ;
        }

        std::string to_string()
        {
            return "\nTable()"
            "\n.set_title(\"Un tableau\")"
            "\n.set_sub_title(\"Sous-titre\")"
            "\n.set_data(Data_4::create())"
            "\n.add_filter(\"Variable\", \"Sélectionner une variable :\", \"SELECTOR\", \"V2\")"
            "\n.add_filter(\"X\", \"Sélectionner une date :\", \"CURSOR\")"
            "\n.set_columns_order(\"Name\", \"Y\", \"Type\")"
            "\n.add_header(\"Noms\", \"Valeurs\", \"Type de données\")"
            "\n.add_header(\"Name\", \"Y\", \"Type\")"
            "\n.set_color_variable(\"Name\", \"color\")"
            "\n.set_color_gradient(\"Y\", \"rgb(255, 127, 127)\", \"rgb(255, 255, 255)\", \"rgb(127, 127, 255)\", 0)"
            "\n.set_color_uniform(\"Type\", \"rgb(240, 255, 240)\")"
            "\n;"
            ;
        }
    };

    namespace Tag_1
    {
        Tag create()
        {
            return Tag("p")
            .add_text(
                "But I must explain to you how all this mistaken idea of denouncing pleasure "
                "and praising pain was born and I will give you a complete account of the system, "
                "and expound the actual teachings of the great explorer of the truth, "
                "the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure "
                "itself, because it is pleasure, but because those who do not know how to pursue "
                "pleasure rationally encounter consequences that are extremely painful. Nor again "
                "is there anyone who loves or pursues or desires to obtain pain of itself, because it "
                "is pain, but because occasionally circumstances occur in which toil and pain can "
                "procure him some great pleasure. To take a trivial example, which of us ever "
                "undertakes laborious physical exercise, except to obtain some advantage from it? "
                "But who has any right to find fault with a man who chooses to enjoy a pleasure "
                "that has no annoying consequences, or one who avoids a pain that produces no "
                "resultant pleasure?"
            )
            .add_style("background-color", "rgb(240, 240, 240)")
            .add_style("border", "solid rgb(200, 200, 200) 2px")
            .add_style("padding", "20px")
            .add_style("font", "1.1em Times New Roman")
            .add_style("line-height", "2em")
            ;
        }

        std::string to_string()
        {
            return "\nTag(\"p\")"
            "\n.add_text("
            "\n\t\"But I must explain to you how all this mistaken idea of denouncing pleasure \""
            "\n\t\"and praising pain was born and I will give you a complete account of the system, \""
            "\n\t\"and expound the actual teachings of the great explorer of the truth, \""
            "\n\t\"the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure \""
            "\n\t\"itself, because it is pleasure, but because those who do not know how to pursue \""
            "\n\t\"pleasure rationally encounter consequences that are extremely painful. Nor again \""
            "\n\t\"is there anyone who loves or pursues or desires to obtain pain of itself, because it \""
            "\n\t\"is pain, but because occasionally circumstances occur in which toil and pain can \""
            "\n\t\"procure him some great pleasure. To take a trivial example, which of us ever \""
            "\n\t\"undertakes laborious physical exercise, except to obtain some advantage from it? \""
            "\n\t\"But who has any right to find fault with a man who chooses to enjoy a pleasure \""
            "\n\t\"that has no annoying consequences, or one who avoids a pain that produces no \""
            "\n\t\"resultant pleasure?\""
            "\n)"
            "\n.add_style(\"background-color\", \"rgb(240, 240, 240)\")"
            "\n.add_style(\"border\", \"solid rgb(200, 200, 200) 2px\")"
            "\n.add_style(\"padding\", \"20px\")"
            "\n.add_style(\"font\", \"1.1em Times New Roman\")"
            "\n.add_style(\"line-height\", \"2em\")"
            "\n;"
            ;
        }
    };

    namespace Tag_2
    {
        Tag create()
        {
            return Tag("p")
            .add_text(
                std::string("An inline formula ")
                + Formula::inline_formula("\\int_{x = -\\pi}^{\\pi}(cos(x))dx")
                + " and"
                + Formula::block_formula("\\sum_{i = 0}^{100}[\\frac{1}{i^2}]")
                + "a block formula !"
            )
            .add_style("background-color", "rgb(240, 240, 240)")
            .add_style("border", "solid rgb(200, 200, 200) 2px")
            .add_style("padding", "20px")
            .add_style("font", "1.1em Times New Roman")
            .add_style("line-height", "2em")
            ;
        }

        std::string to_string()
        {
            return "\nTag(\"p\")"
            "\n.add_text("
            "\n\tstd::string(\"An inline formula \")"
            "\n\t+ Formula::inline_formula(\"/int_{x = -/pi}^{/pi}(cos(x))dx\")"
            "\n\t+ \" and\""
            "\n\t+ Formula::block_formula(\"/sum_{i = 0}^{100}[/frac{1}{i^2}]\")"
            "\n\t+ \"a block formula !\""
            "\n)"
            "\n.add_style(\"background-color\", \"rgb(240, 240, 240)\")"
            "\n.add_style(\"border\", \"solid rgb(200, 200, 200) 2px\")"
            "\n.add_style(\"padding\", \"20px\")"
            "\n.add_style(\"font\", \"1.1em Times New Roman\")"
            "\n.add_style(\"line-height\", \"2em\")"
            "\n;"
            ;
        }
    };

    namespace Tag_3
    {
        Tag create()
        {
            return Tag("p")
            .add_text(
                Tag("a")
                .add_attribute("href", "http://www.cplusplus.com/doc/tutorial/inheritance/")
                .add_attribute("target", "_blank")
                .add_text("cplusplus")
                .render()
            )
            .add_style("background-color", "rgb(240, 240, 240)")
            .add_style("border", "solid rgb(200, 200, 200) 2px")
            .add_style("padding", "20px")
            .add_style("font", "1.1em Times New Roman")
            .add_style("line-height", "2em")
            ;
        }

        std::string to_string()
        {
            return "\nTag(\"p\")"
            "\n.add_text("
            "\n\tTag(\"a\")"
            "\n\t.add_attribute(\"href\", \"http://www.cplusplus.com/doc/tutorial/inheritance/\")"
            "\n\t.add_attribute(\"target\", \"_blank\")"
            "\n\t.add_text(\"cplusplus\")"
            "\n\t.render()"
            "\n)"
            "\n.add_style(\"background-color\", \"rgb(240, 240, 240)\")"
            "\n.add_style(\"border\", \"solid rgb(200, 200, 200) 2px\")"
            "\n.add_style(\"padding\", \"20px\")"
            "\n.add_style(\"font\", \"1.1em Times New Roman\")"
            "\n.add_style(\"line-height\", \"2em\")"
            "\n;";
        }
    };

    namespace Tag_4
    {
        Tag create()
        {
            return Tag("p")
            .add_text(
                std::string("But I must explain to you how all this mistaken idea of denouncing pleasure "
                "and praising pain was born and I will give you a complete account of the system, "
                "and expound the actual teachings of the great explorer of the truth, "
                "the master-builder of human happiness. ")
                +
                Formula::inline_formula("\\int_{x = -\\pi}^{\\pi}(cos(x))dx")
                +
                std::string(" No one rejects, dislikes, or avoids pleasure "
                "itself, because it is pleasure, but because those who do not know how to pursue "
                "pleasure rationally encounter consequences that are extremely painful. ")
                +
                Tag("a")
                .add_attribute("href", "http://www.cplusplus.com/doc/tutorial/inheritance/")
                .add_attribute("target", "_blank")
                .add_text("cplusplus")
                .render()
                +
                std::string(" Nor again "
                "is there anyone who loves or pursues or desires to obtain pain of itself, because it "
                "is pain, but because occasionally circumstances occur in which toil and pain can "
                "procure him some great pleasure. To take a trivial example, which of us ever "
                "undertakes laborious physical exercise, except to obtain some advantage from it? "
                +
                Formula::block_formula("\\sum_{i = 0}^{100}[\\frac{1}{i^2}]")
                +
                "But who has any right to find fault with a man who chooses to enjoy a pleasure "
                "that has no annoying consequences, or one who avoids a pain that produces no "
                "resultant pleasure?")
            )
            .add_style("background-color", "rgb(240, 240, 240)")
            .add_style("border", "solid rgb(200, 200, 200) 2px")
            .add_style("padding", "20px")
            .add_style("font", "1.1em Times New Roman")
            .add_style("line-height", "2em")
            ;
        }

        std::string to_string()
        {
            return "\nTag(\"p\")"
            "\n.add_text("
            "\n\tstd::string(\"But I must explain to you how all this mistaken idea of denouncing pleasure \""
            "\n\t\"and praising pain was born and I will give you a complete account of the system, \""
            "\n\t\"and expound the actual teachings of the great explorer of the truth, \""
            "\n\t\"the master-builder of human happiness. \")"
            "\n\t+"
            "\n\tFormula::inline_formula(\"\\int_{x = -\\pi}^{\\pi}(cos(x))dx\")"
            "\n\t+"
            "\n\tstd::string(\" No one rejects, dislikes, or avoids pleasure \""
            "\n\t\"itself, because it is pleasure, but because those who do not know how to pursue \""
            "\n\t\"pleasure rationally encounter consequences that are extremely painful. \")"
            "\n\t+"
            "\n\tTag(\"a\")"
            "\n\t.add_attribute(\"href\", \"http://www.cplusplus.com/doc/tutorial/inheritance/\")"
            "\n\t.add_attribute(\"target\", \"_blank\")"
            "\n\t.add_text(\"cplusplus\")"
            "\n\t.render()"
            "\n\t+"
            "\n\tstd::string(\" Nor again \""
            "\n\t\"is there anyone who loves or pursues or desires to obtain pain of itself, because it \""
            "\n\t\"is pain, but because occasionally circumstances occur in which toil and pain can \""
            "\n\t\"procure him some great pleasure. To take a trivial example, which of us ever \""
            "\n\t\"undertakes laborious physical exercise, except to obtain some advantage from it? \""
            "\n\t+"
            "\n\tFormula::block_formula(\"\\sum_{i = 0}^{100}[\\frac{1}{i^2}]\")"
            "\n\t+"
            "\n\t\"But who has any right to find fault with a man who chooses to enjoy a pleasure \""
            "\n\t\"that has no annoying consequences, or one who avoids a pain that produces no \""
            "\n\t\"resultant pleasure?\")"
            "\n)"
            "\n.add_style(\"background-color\", \"rgb(240, 240, 240)\")"
            "\n.add_style(\"border\", \"solid rgb(200, 200, 200) 2px\")"
            "\n.add_style(\"padding\", \"20px\")"
            "\n.add_style(\"font\", \"1.1em Times New Roman\")"
            "\n.add_style(\"line-height\", \"2em\")"
            "\n;"
            ;
        }
    };

    namespace Tabs_1
    {
        Tabs create()
        {
            return Tabs()
            .add_tab("Pie chart", Pie_Chart_1::create())
            .add_tab("Tableau", Table_1::create())
            ;
        }

        std::string to_string()
        {
            return "\nTabs()"
            "\n.add_tab(\"Pie chart\", Pie_Chart_1::create())"
            "\n.add_tab(\"Tableau\", Table_1::create())"
            "\n;"
            ;
        }
    };

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
                Tag("h1")
                .add_text("Titre de la page")
                .add_style("display", "block")
                .add_style("text-align", "center")
                ,
                
                Tag("br"),

                Tag_1::create(),
                Combo_Chart_1::create(),
                Code_1::create(),
                Map_Chart_1::create(),
                Combo_Chart_2::create(),
                Pie_Chart_1::create(),
                Table_1::create(),
                Map_Chart_2::create(),
                Map_Chart_3::create(),

                Tag("table")
                (
                    Tag("tr")
                    (
                        Tag("td")
                        .add_style("text-align", "right")
                        (
                            Combo_Chart_3::create()
                        ),
                        Tag("td")
                        .add_style("text-align", "left")
                        (
                            Pie_Chart_2::create()
                        )
                    )
                )
                ,

                Combo_Chart_4::create(),
                Tabs_1::create(),
                Tag_2::create(),
                Tag_3::create(),
                Tag_4::create()
            )
        );

        Utils::save_text_to_file(output_file_path, document.render());
    }
}

#endif // EXAMPLE_H