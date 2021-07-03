"use strict";
var Highcharts_Map_Chart;
(function (Highcharts_Map_Chart) {
    function draw(chart, structure) {
        let data = structure.get_filtered_data();
        let series = convert_data_to_series(chart, data);
        let options = get_options(chart, structure);
        options.series[0].data = series;
        options.colorAxis.dataClasses = compute_colors_classes(series, chart);
        // @ts-ignore
        Highcharts.mapChart(structure.get_plot_area(), options);
    }
    Highcharts_Map_Chart.draw = draw;
    function convert_data_to_series(chart, data) {
        let location_variable = chart.get_location_variable();
        let value_variable = chart.get_value_variable();
        let output = [];
        let location = "";
        let value = 0;
        let mapping = get_mapping(chart.get_map_area());
        for (let i = 0, I = data.get_length(); i < I; ++i) {
            location = data.get_text_at(i, location_variable);
            value = data.get_number_at(i, value_variable);
            if (!Number.isNaN(value) && Number.isFinite(value)) {
                location = location.toLowerCase();
                if (mapping.hasOwnProperty(location)) {
                    location = mapping[location];
                }
                output.push([location, value]);
            }
        }
        return output;
    }
    function compute_colors_classes(series, chart) {
        let values = series.map(x => x[1]);
        let colors = Utils.map_values_to_colors(values, chart.get_min_color(), chart.get_middle_color(), chart.get_max_color(), chart.get_middle_value());
        colors = colors.filter(x => !isNaN(x.value) && x.value !== null);
        colors.sort(function (x, y) {
            return x.value - y.value;
        });
        let classes = [];
        let I = colors.length;
        if (I > 0) {
            for (let i = 0; i < I - 1; ++i) {
                classes.push({ color: colors[i].color, from: colors[i].value, to: colors[i + 1].value });
            }
            classes.push({ color: colors[I - 1].color, from: colors[I - 1].value });
        }
        return classes;
    }
    function get_options(chart, structure) {
        return {
            title: { text: "" },
            subtitle: { text: "" },
            credits: { enabled: false },
            chart: get_chart_options(chart, structure),
            mapNavigation: { enabled: true },
            colorAxis: { dataClasses: {} },
            legend: { enabled: false },
            series: get_series_options(chart),
            tooltip: get_tooltip_options(chart)
        };
    }
    function get_chart_options(chart, structure) {
        let map_area = chart.get_map_area();
        let map_area_code = "custom/europe";
        if (map_area === "FR-DEP")
            map_area_code = "countries/fr/fr-all-all";
        if (map_area === "FR-REG")
            map_area_code = "countries/fr/fr-all";
        let width = structure.get_plot_area_width();
        if (width < chart.get_minimum_width())
            width = chart.get_minimum_width();
        if (width > chart.get_maximum_width())
            width = chart.get_maximum_width();
        let height = width * chart.get_height_width_ratio();
        if (height < chart.get_minimum_height())
            height = chart.get_minimum_height();
        if (height > chart.get_maximum_height())
            height = chart.get_maximum_height();
        return {
            backgroundColor: "rgba(0,0,0,0)",
            map: map_area_code,
            width: width,
            height: height,
            plotBackgroundColor: chart.get_water_color()
        };
    }
    function get_series_options(chart) {
        return [{
                data: {},
                name: "Name",
                borderColor: 'black',
                borderWidth: 0.7,
                nullColor: chart.get_null_color(),
                states: {
                    hover: {
                        color: '#FFFFFF'
                    }
                },
                dataLabels: {
                    enabled: true,
                    // @ts-ignore
                    formatter: function () {
                        // @ts-ignore
                        let label = (chart.get_visible_names() ? this.point.name : "");
                        // @ts-ignore
                        if (this.point.value !== null) {
                            label += '<br/>';
                            // @ts-ignore
                            label += this.point.value.toFixed(chart.get_digits());
                        }
                        return label;
                    }
                }
            }];
    }
    function get_tooltip_options(chart) {
        return {
            valueDecimals: chart.get_digits() !== null ? chart.get_digits() : undefined,
            animation: true,
            shared: true
        };
    }
    function get_mapping(map_area) {
        if (map_area === "UE")
            return get_EU_mapping();
        if (map_area === "FR-DEP")
            return get_FR_DEP_mapping();
        if (map_area === "FR-REG")
            return get_FR_REG_mapping();
        return {};
    }
    function get_EU_mapping() {
        return {
            "austria": "at",
            "autriche": "at",
            "belgium": "be",
            "belgique": "be",
            "cyprus": "cy",
            "chypre": "cy",
            "germany": "de",
            "allemagne": "de",
            "estonia": "ee",
            "estonie": "ee",
            "spain": "es",
            "espagne": "es",
            "finland": "fi",
            "finlande": "fi",
            "france": "fr",
            "greece": "gr",
            "grèce": "gr",
            "grece": "gr",
            "ireland": "ie",
            "irlande": "ie",
            "italy": "it",
            "italie": "it",
            "lithuania": "lt",
            "lituanie": "lt",
            "luxembourg": "lu",
            "latvia": "lv",
            "lettonie": "lv",
            "malta": "mt",
            "malte": "mt",
            "netherlands": "nl",
            "pays-bas": "nl",
            "paysbas": "nl",
            "hollande": "nl",
            "portugal": "pt",
            "slovenia": "si",
            "slovenie": "si",
            "slovakia": "sk",
            "slovaquie": "sk"
        };
    }
    function get_FR_REG_mapping() {
        return {
            "11": "fr-idf",
            "24": "fr-cvl",
            "27": "fr-bfc",
            "28": "fr-nor",
            "32": "fr-hdf",
            "44": "fr-ges",
            "52": "fr-pdl",
            "53": "fr-bre",
            "75": "fr-naq",
            "76": "fr-occ",
            "84": "fr-ara",
            "93": "fr-pac",
            "94": "fr-cor",
            "971": "fr-gua",
            "972": "fr-mq",
            "973": "fr-gf",
            "974": "fr-lre",
            "976": "fr-may"
        };
    }
    function get_FR_DEP_mapping() {
        return {
            "1": "fr-ara-ai",
            "2": "fr-hdf-as",
            "3": "fr-ara-al",
            "4": "fr-pac-ap",
            "5": "fr-pac-ha",
            "6": "fr-pac-am",
            "7": "fr-ara-ah",
            "8": "fr-ges-an",
            "9": "fr-occ-ag",
            "01": "fr-ara-ai",
            "02": "fr-hdf-as",
            "03": "fr-ara-al",
            "04": "fr-pac-ap",
            "05": "fr-pac-ha",
            "06": "fr-pac-am",
            "07": "fr-ara-ah",
            "08": "fr-ges-an",
            "09": "fr-occ-ag",
            "10": "fr-ges-ab",
            "11": "fr-occ-ad",
            "12": "fr-occ-av",
            "13": "fr-pac-bd",
            "14": "fr-nor-cv",
            "15": "fr-ara-cl",
            "16": "fr-naq-ct",
            "17": "fr-naq-cm",
            "18": "fr-cvl-ch",
            "19": "fr-naq-cz",
            "21": "fr-bfc-co",
            "22": "fr-bre-ca",
            "23": "fr-naq-cr",
            "24": "fr-naq-dd",
            "25": "fr-bfc-db",
            "26": "fr-ara-dm",
            "27": "fr-nor-eu",
            "28": "fr-cvl-el",
            "29": "fr-bre-fi",
            "30": "fr-occ-ga",
            "31": "fr-occ-hg",
            "32": "fr-occ-ge",
            "33": "fr-naq-gi",
            "34": "fr-occ-he",
            "35": "fr-bre-iv",
            "36": "fr-cvl-in",
            "37": "fr-cvl-il",
            "38": "fr-ara-is",
            "39": "fr-bfc-ju",
            "40": "fr-naq-ld",
            "41": "fr-cvl-lc",
            "42": "fr-ara-lr",
            "43": "fr-ara-hl",
            "44": "fr-pdl-la",
            "45": "fr-cvl-lt",
            "46": "fr-occ-lo",
            "47": "fr-naq-lg",
            "48": "fr-occ-lz",
            "49": "fr-pdl-ml",
            "50": "fr-nor-mh",
            "51": "fr-ges-mr",
            "52": "fr-ges-hm",
            "53": "fr-pdl-my",
            "54": "fr-ges-mm",
            "55": "fr-ges-ms",
            "56": "fr-bre-mb",
            "57": "fr-ges-mo",
            "58": "fr-bfc-ni",
            "59": "fr-hdf-no",
            "60": "fr-hdf-oi",
            "61": "fr-nor-or",
            "62": "fr-hdf-pc",
            "63": "fr-ara-pd",
            "64": "fr-naq-pa",
            "65": "fr-occ-hp",
            "66": "fr-occ-po",
            "67": "fr-ges-br",
            "68": "fr-ges-hr",
            "69": "fr-ara-rh",
            "70": "fr-bfc-hn",
            "71": "fr-bfc-sl",
            "72": "fr-pdl-st",
            "73": "fr-ara-sv",
            "74": "fr-ara-hs",
            "75": "fr-idf-vp",
            "76": "fr-nor-sm",
            "77": "fr-idf-se",
            "78": "fr-idf-yv",
            "79": "fr-naq-ds",
            "80": "fr-hdf-so",
            "81": "fr-occ-ta",
            "82": "fr-occ-tg",
            "83": "fr-pac-vr",
            "84": "fr-pac-vc",
            "85": "fr-pdl-vd",
            "86": "fr-naq-vn",
            "87": "fr-naq-hv",
            "88": "fr-ges-vg",
            "89": "fr-bfc-yo",
            "90": "fr-bfc-tb",
            "91": "fr-idf-es",
            "92": "fr-idf-hd",
            "93": "fr-idf-ss",
            "94": "fr-idf-vm",
            "95": "fr-idf-vo",
            "971": "fr-gua-gp",
            "972": "fr-mq-mq",
            "973": "fr-gf-gf",
            "974": "fr-lre-re",
            "976": "fr-may-yt",
            "2a": "fr-cor-cs",
            "2b": "fr-cor-hc"
        };
    }
})(Highcharts_Map_Chart || (Highcharts_Map_Chart = {}));
