#ifndef UTILS_H
#define UTILS_H

#include <string>
#include <vector>
#include <set>
#include <sstream>
#include <iostream>
#include <fstream>

namespace Utils
{
    inline void save_text_to_file(const std::string & path, const std::string & text)
    {
        std::ofstream out;

        out.open(path.c_str(), std::ios::binary | std::ios::out);

        if (out.fail())
        {
            std::cerr << "Cannot write to file \"" << path << "\" !" << std::endl;
        }
        else
        {
            out << text;
        }

        out.close();
    }

    inline std::string read_text_from_file(const std::string & path)
    {
        std::stringstream text;
        std::ifstream in;

        in.open(path.c_str(), std::ios::binary | std::ios::in);

        if (in.fail())
        {
            std::cerr << "Cannot read file \"" << path << "\" !" << std::endl;
        }
        else
        {
            text << in.rdbuf();
        }

        in.close();

        return text.str();
    }
    
    inline std::vector<std::string> split(const std::string & text, const std::string & separator)
    {
        std::size_t i = 0;
        std::size_t j = 0;
        std::size_t offset = separator.size();
        std::vector<std::string> result;

        if(offset <= 0)
        {
            result.push_back(text);

            return result;
        }
        while((j = text.find(separator, i)) != std::string::npos)
        {
            result.push_back(text.substr(i, j - i));

            i = j + offset;
        }

        result.push_back(text.substr(i));

        return result;
    }
    
    inline std::vector< std::vector<std::string> > parse(
        const std::string & raw, 
        const std::string & line_separator, 
        const std::string & column_separator
    )
    {
        auto lines = split(raw, line_separator);
        auto values = split(lines[0], column_separator);

        std::vector< std::vector<std::string> > output;
        std::size_t number_of_columns = 0;
        
        for (auto && line : lines)
        {
            if (!line.empty())
            {
                values = split(line, column_separator);
                
                if (number_of_columns < values.size())
                {
                    number_of_columns = values.size();
                }

                output.push_back(values);
            }
        }

        for (auto && line : output)
        {
            if (line.size() != number_of_columns)
            {
                line.resize(number_of_columns);
            }
        }

        return output;
    }

    inline std::vector< std::vector<std::string> > parse_file_content(
        const std::string & path, 
        const std::string & line_separator, 
        const std::string & column_separator
    )
    {
        auto raw = read_text_from_file(path);

        return parse(raw, line_separator, column_separator);
    }

    inline std::string & replace_all(std::string & text, const std::string & from, const std::string & to)
    {
        if(from.empty())
        {
            return text;
        }

        std::size_t index = 0;

        while ((index = text.find(from, index)) != std::string::npos)
        {
            text.replace(index, from.size(), to);

            index += to.size();
        }

        return text;
    }

    inline bool to_double(std::string text, double & number)
    {
        replace_all(text, ",", ".");

        char* p;
        
        number = strtod(text.c_str(), &p);

        return (*p == 0 && !text.empty());
    }
    
    inline std::string single_quote(const std::string & text)
    {
        std::string output = text;

        replace_all(output, "'", "\\'");

        return std::string("'") + output + "'";
    }
    
    inline std::string double_quote(const std::string & text)
    {
        std::string output = text;

        replace_all(output, "\"", "\\\"");

        return std::string("\"") + output + "\"";
    }
    
    template<typename T>
    std::string to_string(T number)
    {
        std::stringstream out;
        out << number;
        return out.str();
    }
    
    template<typename T, typename... Args>
    std::vector<T> to_vector(Args... args)
    {
        std::vector<T> container;

        to_vector(container, args...);

        return container;
    }

    template<typename T, typename... Args>
    void to_vector(std::vector<std::string> & container, T && x, Args... args)
    {
        to_vector(container, x);
        to_vector(container, args...);
    }

    template<typename T>
    void to_vector(std::vector<std::string> & container, T && x)
    {
        container.emplace_back(x);
    }
    
    inline std::string generate_unique_id()
    {
        static int id = 0;

        return to_string(++id);
    }
    
    static std::set<std::string> common_self_closing_tags = {
        "area","base","br","col","embed","hr","img","input",
        "link","meta","param","source","track","wbr","command",
        "keygen","menuitem"
    };

    inline bool is_a_common_self_closing_tag(const std::string & name)
    {
        return common_self_closing_tags.find(name) != common_self_closing_tags.end();
    }
}

#endif // UTILS_H