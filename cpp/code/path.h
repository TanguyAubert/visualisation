#ifndef PATH_H
#define PATH_H

#include <string>

namespace Visualisation
{
    std::string get_externals_path(const std::string & name)
    {
        return std::string("C:/Tanguy/Programs/externals/") + name;
    }

    std::string get_js_path(const std::string & name)
    {
        return std::string("C:/Tanguy/Programs/projects/visualisation/js/code/") + name;
    }

    std::string get_css_path(const std::string & name)
    {
        return std::string("C:/Tanguy/Programs/projects/visualisation/css/") + name;
    }
    
    std::string get_data_path(const std::string & name)
    {
        return std::string("C:/Tanguy/Programs/projects/visualisation/data/") + name;
    }
}

#endif // PATH_H