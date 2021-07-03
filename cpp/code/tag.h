#ifndef TAG_H
#define TAG_H

#include <vector>
#include <string>
#include <map>
#include <memory>
#include "node.h"
#include "text.h"
#include "utils.h"

class Tag : public Node
{
    private:

        std::string name;
        std::map<std::string, std::string> attributes;
        std::map<std::string, std::string> styles;
        std::vector< std::shared_ptr<Node> > children;
        bool self_closing = false;

    public:

        Tag(const std::string & name) : name(name)
        {
            self_closing = Utils::is_a_common_self_closing_tag(name);
        }

        Tag & add_attribute(const std::string & name, const std::string & value)
        {
            attributes.insert_or_assign(name, value);
            return *this;
        }

        Tag & add_style(const std::string & name, const std::string & value)
        {
            styles.insert_or_assign(name, value);
            return *this;
        }

        Tag & add_text(const std::string & value)
        {
            push(Text(value));
            return *this;
        }

        Tag & is_self_closing(bool flag)
        {
            this->self_closing = flag;
            return *this;
        }

        std::string render() const
        {
            std::string output = "";

            output += "<";
            output += name;
            output += render_attributes();
            output += render_styles();

            if (self_closing)
            {
                output += "/>";
            }
            else
            {
                output += ">";
                output += render_children();
                output += "</";
                output += name;
                output += ">";
            }

            return output;
        }

        template <typename... Args>
        Tag & operator()(Args... args)
        {
            append(args...);
            return *this;
        }

    private:

        template <typename T, typename... Args>
        Tag & append(const T & node, Args... args)
        {
            push(node);
            return append(args...);
        }

        template <typename T>
        Tag & append(const T & node)
        {
            push(node);
            return *this;
        }

        template <typename T>
        void push(const T & node)
        {
            children.emplace_back(std::make_shared<T>(node));
        }

        std::string render_children() const
        {
            std::string output = "";

            for (auto && child : children)
            {
                output += child->render();
            }

            return output;
        }

        std::string render_attributes() const
        {
            std::string output = "";

            for (auto && attribute : attributes)
            {
                output += " ";
                output += attribute.first;
                output += " = ";
                output += Utils::single_quote(attribute.second);
            }

            return output;
        }

        std::string render_styles() const
        {
            std::string output = "";

            if (!styles.empty())
            {
                for (auto && style : styles)
                {
                    output += style.first;
                    output += ":";
                    output += style.second;
                    output += ";";
                }

                output = std::string(" style = ") + Utils::double_quote(output);
            }

            return output;
        }

};

#endif // TAG_H
