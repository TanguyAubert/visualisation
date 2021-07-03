#ifndef FORMULA_H
#define FORMULA_H

#include <string>
#include "utils.h"

class Formula
{
    public:
        
        static std::string inline_formula(const std::string & text)
        {
            return std::string("\\(") + sanitize(text) + "\\)";
        }

        static std::string block_formula(const std::string & text)
        {
            return std::string("\\[") + sanitize(text) + "\\]";
        }

        static std::string sanitize(const std::string & text)
        {
            std::string copy = text;

            Utils::replace_all(copy, " ", "\\text{ }");
            Utils::replace_all(copy, "%", "\\%");
            Utils::replace_all(copy, "(", "\\left(");
            Utils::replace_all(copy, ")", "\\right)");
            Utils::replace_all(copy, "[", "\\left[");
            Utils::replace_all(copy, "]", "\\right]");

            return copy;
        }
};

#endif // FORMULA_H
