#ifndef TEXT_H
#define TEXT_H

#include <string>
#include "node.h"

class Text : public Node
{
    private:

        std::string value;

    public:

        Text(const std::string & value) : value(value) { };

        std::string render() const
        {
            return value;
        }
};

#endif // TEXT_H
