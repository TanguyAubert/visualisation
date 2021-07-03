"use strict";
class Tabs {
    constructor() {
        this.tabs = [];
    }
    add_tab(title_id, content_id) {
        let title = document.getElementById(title_id);
        let content = document.getElementById(content_id);
        if (title !== null && content !== null) {
            this.tabs.push({ title: title, content: content });
        }
        return this;
    }
    add_events() {
        for (let tab of this.tabs) {
            tab.title.addEventListener("click", () => {
                this.select(tab.title);
                // This function call prevents an indesirable effect :
                // when the window is resized, all charts are redrawn but charts inside hidden tabs get a width of 0
                redraw_all_charts_within(tab.content);
            }, false);
        }
    }
    select(title) {
        for (let tab of this.tabs) {
            if (tab.title === title) {
                tab.title.classList.add("visualisation-tab-title-selected");
                tab.content.style.display = "block";
            }
            else {
                tab.title.classList.remove("visualisation-tab-title-selected");
                tab.content.style.display = "none";
            }
        }
    }
    draw() {
        this.add_events();
        if (this.tabs.length > 0) {
            this.tabs[0].title.click();
        }
        return this;
    }
}
