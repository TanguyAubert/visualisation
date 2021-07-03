#ifndef DATA_H
#define DATA_H

#include <iostream>
#include <string>
#include <sstream>
#include "node.h"
#include "utils.h"
#include "tag.h"

class Data : public Node
{
    public:
    
        enum class Type {NUMBER, TEXT, BOOLEAN};

        struct Column
        {
            std::size_t index;
            std::string old_name;
            Type type;
            std::string new_name;
        };

    private:

        std::string name;
        std::string source;
        std::size_t headers = 0;
        std::vector<std::size_t> lines_to_skip;
        std::string column_separator = ";";
        std::string line_separator = "\r\n";
        std::vector<Column> columns;

    public:

        Data & set_name(const std::string & name)
        {
            this->name = name;
            return *this;
        }

        Data & set_source(const std::string & source)
        {
            this->source = source;
            return *this;
        }

        Data & set_headers(std::size_t number)
        {
            headers = number;
            return *this;
        }

        Data & set_lines_to_skip(const std::vector<std::size_t> & numbers)
        {
            lines_to_skip = numbers;
            return *this;
        }

        Data & keep_column(const std::string & current_name, Type type, const std::string & new_name = "")
        {
            columns.emplace_back(Column{std::string::npos, current_name, type, new_name});
            return *this;
        }

        Data & keep_column(std::size_t index, Type type, const std::string & new_name = "")
        {
            columns.emplace_back(Column{index, "", type, new_name});
            return *this;
        }

        Data & set_column_separator(const std::string & column_separator)
        {
            this->column_separator = column_separator;
            return *this;
        }

        Data & set_line_separator(const std::string & line_separator)
        {
            this->line_separator = line_separator;
            return *this;
        }

        std::string render() const
        {   
            std::string output;

            output += "let ";
            output += name;
            output += " = {\n";
            output += render_all_columns();
            output += "\n};\n";

            return Tag("script")
            .add_text(output)
            .render();
        }

    private:

        std::string render_all_columns() const
        {
            auto data = Utils::parse_file_content(source, line_separator, column_separator);

            std::string output;
            auto number_of_columns = data[0].size();

            for (auto && column : columns)
            {
                auto index = find_index(data, column);

                if (index_is_not_valid(index, number_of_columns, column.old_name)) continue;

                output += (output.empty() ? "" : ",\n");
                output += "\"";
                output += column.new_name;
                output += "\": [";
                output += render_column(data, index, column.type);
                output += "]";
            }

            return output;
        }

        std::size_t find_index(const std::vector< std::vector<std::string> > & data, Column column) const
        {
            auto index = column.index;
            auto number_of_columns = data[0].size();

            if (index == std::string::npos)
            {
                for (std::size_t j = 0 ; j < number_of_columns ; ++j)
                {
                    if (data[headers][j] == column.old_name)
                    {
                        return j;
                    }
                }
            }

            return index;
        }

        bool index_is_not_valid(std::size_t index, std::size_t number_of_columns, const std::string & column_name) const
        {
            if (index == std::string::npos)
            {
                std::cerr << "Could not find column " << column_name << " !" << std::endl;
                return true;
            }
            else if (index >= number_of_columns)
            {
                std::cerr << index << " is not a valid index !" << std::endl;
                return true;
            }

            return false;
        }
        
        std::string render_column(const std::vector< std::vector<std::string> > & data, std::size_t index, Type type) const
        {
            std::string output;
            auto number_of_rows = data.size();

            for (std::size_t i = 0 ; i < number_of_rows ; ++i)
            {
                if (i != headers)
                {
                    if (!output.empty())
                    {
                        output += ",";
                    }

                    auto value = data[i][index];

                    output += render_value(type, value);
                }
            }

            return output;
        }

        std::string render_value(Type type, const std::string & value) const
        {
            if (type == Type::TEXT)
            {
                return render_text(value);
            }
            else if (type == Type::NUMBER)
            {
                return render_number(value);
            }
            else if (type == Type::BOOLEAN)
            {
                return render_boolean(value);
            }

            return "";
        }

        std::string render_text(const std::string & value) const
        {
            return Utils::single_quote(value);
        }

        std::string render_number(const std::string & value) const
        {
            double number;
            bool is_numeric = Utils::to_double(value, number);

            return (is_numeric ? Utils::to_string(number) : "null");
        }
        
        std::string render_boolean(const std::string & value) const
        {
            if (value == "true" | value == "TRUE" | value == "True" | value == "1")
            {
                return "true";
            }
            else
            {
                return "false";
            }
        }

};

#endif // DATA_H
