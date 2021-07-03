#ifndef DOCUMENT_H
#define DOCUMENT_H

#include "node.h"
#include "tag.h"
#include "utils.h"
#include "path.h"

class Document : public Node
{
    private:

        Tag _head;
        Tag _body;

    public:

        Document::Document() : _head("head"), _body("body")
        {
            _head(

                Tag("title"),

                Tag("meta")
                .add_attribute("http-equiv", "Content-Type")
                .add_attribute("content", "text/html; charset=utf-8"),

                Tag("meta")
                .add_attribute("http-equiv", "X-UA-Compatible")
                .add_attribute("content", "IE=edge"),

                Tag("meta")
                .add_attribute("name", "viewport")
                .add_attribute("content", "width=device-width, initial-scale=1"),

                Tag("link")
                .add_attribute("rel", "stylesheet")
                .add_attribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),

                Tag("script")
                .add_attribute("id", "MathJax-script")
                .add_attribute("src", "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")
                .add_attribute("async", "async")
            );
            
            script(Visualisation::get_externals_path("jquery-3.1.1.min.js"));
            script(Visualisation::get_externals_path("proj4.js"));
            script(Visualisation::get_externals_path("highcharts.js"));
            script(Visualisation::get_externals_path("highcharts-more.js"));
            script(Visualisation::get_externals_path("map.js"));
            script(Visualisation::get_externals_path("d3.v4.min.js"));
            script(Visualisation::get_externals_path("world-highres.js"));
            script(Visualisation::get_externals_path("europe.js"));
            script(Visualisation::get_externals_path("fr-all-all.js"));
            script(Visualisation::get_externals_path("fr-all-all-mainland.js"));
            script(Visualisation::get_externals_path("fr-all.js"));
            script(Visualisation::get_externals_path("fr-all-mainland.js"));
            //script(Visualisation::get_externals_path("tex-mml-chtml.js"));

            script(Visualisation::get_js_path("code-decorator.js"));

            script(Visualisation::get_js_path("utils.js"));
            script(Visualisation::get_js_path("color.js"));
            script(Visualisation::get_js_path("data.js"));
            script(Visualisation::get_js_path("checker.js"));
            script(Visualisation::get_js_path("graphic.js"));
            script(Visualisation::get_js_path("chart.js"));
            script(Visualisation::get_js_path("filter.js"));
            script(Visualisation::get_js_path("selector.js"));
            script(Visualisation::get_js_path("cursor.js"));
            script(Visualisation::get_js_path("structure.js"));
            script(Visualisation::get_js_path("combo-chart.js"));
            script(Visualisation::get_js_path("map-chart.js"));
            script(Visualisation::get_js_path("pie-chart.js"));
            script(Visualisation::get_js_path("bubble-chart.js"));
            script(Visualisation::get_js_path("table.js"));
            script(Visualisation::get_js_path("tabs.js"));
            script(Visualisation::get_js_path("highcharts-combo-chart.js"));
            script(Visualisation::get_js_path("highcharts-map-chart.js"));
            script(Visualisation::get_js_path("highcharts-pie-chart.js"));
            script(Visualisation::get_js_path("highcharts-bubble-chart.js"));
        }

        template <typename... Args>
        Document & head(Args... args)
        {
            _head(args...);
            return *this;
        }

        template <typename... Args>
        Document & body(Args... args)
        {
            _body(args...);
            return *this;
        }

        Document & Document::css(const std::string & path)
        {
            _head(Tag("style").add_text(Utils::read_text_from_file(path)));
            return *this;
        }

        Document & Document::script(const std::string & path)
        {
            _head(Tag("script").add_text(Utils::read_text_from_file(path)));
            return *this;
        }

        std::string Document::render() const
        {
            std::string output = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">";
            
            output += Tag("html")
            .add_attribute("xmlns", "http://www.w3.org/1999/xhtml")
            .add_attribute("xml:lang", "fr")
            (
                _head, 
                _body
            )
            .render();

            return output;
        }
};

#endif // DOCUMENT_H
