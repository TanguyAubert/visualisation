"use strict";
const Libraries = ["HIGHCHARTS"];
const Filter_Types = ["SELECTOR", "CURSOR"];
class Graphic {
    constructor(columns) {
        this.structures = [];
        this.title = "";
        this.sub_title = "";
        this.x_label = "";
        this.y_label_1 = "";
        this.y_label_2 = "";
        this.library = "HIGHCHARTS";
        this.footnote = "";
        this.filters = [];
        this.download_enabled = true;
        this.download_separator = ";";
        this.download_line_feed = "\n";
        this.checker = new Checker();
        const variable = "data";
        if (this.checker.is_not_null_nor_undefined(variable, columns)) {
            this.data = new Data(columns);
        }
        else {
            this.data = new Data({});
        }
    }
    //// Setters ////
    set_title(value) {
        const variable = "title";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_sub_title(value) {
        const variable = "sub_title";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_x_label(value) {
        const variable = "x_label";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_label_1(value) {
        const variable = "y_label_1";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_y_label_2(value) {
        const variable = "y_label_2";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_library(value) {
        const variable = "library";
        if (this.checker.is_string_and_belong_to(variable, value, Libraries.map(x => x))) {
            this[variable] = value;
        }
        return this;
    }
    set_footnote(value) {
        const variable = "footnote";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    add_filter(variable, label, type, default_value = null) {
        if (this.checker.is_string("filter-variable", variable)
            && this.checker.is_string("filter-label", label)
            && this.checker.is_string_and_belong_to("filter-type", type, Filter_Types.map(x => x))) {
            this.filters.push({ variable, label, type, default_value });
        }
        return this;
    }
    set_download_enabled(value) {
        const variable = "download_enabled";
        if (this.checker.is_boolean(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_download_separator(value) {
        const variable = "download_separator";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    set_download_line_feed(value) {
        const variable = "download_line_feed";
        if (this.checker.is_string(variable, value)) {
            this[variable] = value;
        }
        return this;
    }
    disable_checker() {
        this.checker.disable();
        return this;
    }
    //// Getters ////
    get_data() { return this.data; }
    get_title() { return this.title; }
    get_sub_title() { return this.sub_title; }
    get_x_label() { return this.x_label; }
    get_y_label_1() { return this.y_label_1; }
    get_y_label_2() { return this.y_label_2; }
    get_library() { return this.library; }
    get_footnote() { return this.footnote; }
    get_filters() { return this.filters; }
    get_download_enabled() { return this.download_enabled; }
    get_download_separator() { return this.download_separator; }
    get_download_line_feed() { return this.download_line_feed; }
    //// Others ////
    draw(destination) {
        let container = this.get_target_container(destination);
        let structure = this.insert_structure_into(container);
        this.structures.push(structure);
        this.check_absence_of_duplicates();
        structure.display_warnings(this.checker.to_html());
        this.draw_inside(structure);
    }
    get_target_container(destination) {
        if (typeof destination === "string") {
            return document.getElementById(destination);
        }
        else {
            return destination;
        }
    }
    insert_structure_into(container) {
        container.innerHTML = "";
        let structure = new Structure(this);
        structure.append_to(container);
        return structure;
    }
    redraw_all() {
        for (let structure of this.structures) {
            structure.redraw();
        }
    }
}
let charts = {};
function draw_all_charts() {
    for (let id in charts) {
        charts[id].redraw_all();
    }
}
function redraw_all_charts_within(container) {
    for (let id in charts) {
        let target = document.getElementById(id);
        if (target !== null && container.contains(target)) {
            charts[id].redraw_all();
        }
    }
}
var resizing = 0;
window.onresize = function () {
    clearTimeout(resizing);
    resizing = setTimeout(draw_all_charts, 100);
};
