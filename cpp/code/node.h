#ifndef NODE_H
#define NODE_H

#include <string>

class Node
{
    public:

        virtual std::string render() const = 0;
};

#endif // NODE_H
