"use strict";
class Filter {
    constructor(label, variable, values) {
        this.container = document.createElement("div");
        this.label = document.createElement("label");
        this.variable = variable;
        this.values = values;
        this.create_container();
        this.create_label(label);
    }
    create_label(label) {
        this.label.innerHTML = label;
        this.label.className = "chart-filter-label";
        this.container.appendChild(this.label);
    }
    create_container() {
        this.container.className = "chart-filter-container";
    }
    get_variable() { return this.variable; }
    get_container() { return this.container; }
}
