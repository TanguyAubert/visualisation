#ifndef CODE_H
#define CODE_H

#include <string>
#include "node.h"
#include "tag.h"
#include "utils.h"

class Code : public Node
{
    private:

        std::string id;
        std::string text;
        std::string language;

    public:

        Code() : id(Utils::generate_unique_id()) {}

        Code & set_text(const std::string & value)
        {
            text = value;

            return *this;
        }

        Code & set_language(const std::string & value)
        {
            language = value;
            
            return *this;
        }

        std::string render() const
        {
            auto hidden_id = std::string("code-hidden-") + id;
            auto visible_id = std::string("code-visible-") + id;

            std::string code = "document.getElementById(";
            code += Utils::single_quote(visible_id);
            code += ").appendChild(";
            code += "Decorator_Factory.To_Table(";
            code += "document.getElementById(";
            code += Utils::single_quote(hidden_id);
            code += ").innerHTML, ";
            code += Utils::single_quote(language);
            code += "));";

            auto hidden = Tag("div")
            .add_attribute("id", hidden_id)
            .add_style("display", "none")
            .add_text(text)
            .render();

            auto visible = Tag("div")
            .add_style("margin-top", "10px")
            .add_attribute("id", visible_id)
            .render();

            auto script = Tag("script")
            .add_text(code)
            .render();

            return hidden + "\n" + visible + "\n" + script;
        }
};

#endif // CODE_H
