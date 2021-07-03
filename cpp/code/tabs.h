#ifndef TABS_H
#define TABS_H

#include "node.h"
#include "tag.h"
#include "utils.h"
#include <string>

class Tabs : public Node
{
    private:

        std::size_t tab_counter = 0;

        struct Tab
        {
            std::string id;
            std::string title;
            Tag content;

            Tab(const std::string & id, const std::string & title, const Tag & content) : id(id), title(title), content(content)
            {
                // NOTHING TO DO
            }
        };

        std::string id;
        std::vector<Tab> tabs;
        
    public:

        Tabs() : id(Utils::generate_unique_id())
        {
            // NOTHING TO DO
        }

        std::string render() const
        {
            return Tag("div")
            .add_attribute("class", "visualisation-tabs")
            .add_text(render_titles())
            .add_text(render_contents())
            .add_text(render_script())
            .render();
        }

        template <typename... Args>
        Tabs & add_tab(const std::string & title, Args... contents)
        {
            std::string tab_id = Utils::to_string(++tab_counter);

            tabs.emplace_back(tab_id, title, Tag("div")(contents...));

            return *this;
        }

    private:
    
        std::string render_titles() const
        {
            std::string output;

            output += "\n";

            for (auto && tab : tabs)
            {
                output += Tag("td")
                .add_text(tab.title)
                .add_attribute("id", get_title_id(tab))
                .add_attribute("class", "visualisation-tab-title")
                .render()
                ;

                output += "\n";
            }

            output = Tag("tr").add_text(output).render();
            output = Tag("table").add_text(output).render();

            return Tag("div")
            .add_attribute("class", "visualisation-tabs-titles")
            .add_text(output)
            .render() + "\n";
        }

        std::string render_contents() const
        {
            std::string output;

            output += "\n";

            for (auto && tab : tabs)
            {
                output += Tag(tab.content)
                .add_attribute("id", get_content_id(tab))
                .add_attribute("class", "visualisation-tab-content")
                .render()
                ;
                
                output += "\n";
            }

            return Tag("div")
            .add_attribute("class", "visualisation-tabs-contents")
            .add_text(output)
            .render() + "\n";
        }

        std::string render_script() const
        {
            std::string output;

            output += "\nnew Tabs()";

            for (auto && tab : tabs)
            {
                output += "\n.add_tab(";
                output += Utils::single_quote(get_title_id(tab));
                output += ", ";
                output += Utils::single_quote(get_content_id(tab));
                output += ")";
            }

            output += "\n.draw()\n;\n";

            return Tag("script")
            .add_text(output)
            .render() + "\n";
        }

        std::string get_title_id(const Tab & tab) const
        {
            return std::string("tabs-") + id + "-title-" + tab.id;
        }

        std::string get_content_id(const Tab & tab) const
        {
            return std::string("tabs-") + id + "-content-" + tab.id;
        }
};

#endif // TABS_H
