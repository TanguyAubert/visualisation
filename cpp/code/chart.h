#ifndef CHART_H
#define CHART_H

#include "graphic.h"

template <typename U>
class Chart : public Graphic<U>
{
    protected:

        Field<double> minimum_width;
        Field<double> maximum_width;
        Field<double> minimum_height;
        Field<double> maximum_height;
        Field<double> height_width_ratio;
        Field<std::size_t> digits;

    public:

        U & set_minimum_width      (double value)       { minimum_width = value;      return derived(); }
        U & set_maximum_width      (double value)       { maximum_width = value;      return derived(); }
        U & set_minimum_height     (double value)       { minimum_height = value;     return derived(); }
        U & set_maximum_height     (double value)       { maximum_height = value;     return derived(); }
        U & set_height_width_ratio (double value)       { height_width_ratio = value; return derived(); }
        U & set_digits             (std::size_t value)  { digits = value;             return derived(); }
        
    protected:

        std::string render_chart_options() const
        {
            std::string code;

            code += render_option("minimum_width", minimum_width, false);
            code += render_option("maximum_width", maximum_width, false);
            code += render_option("minimum_height", minimum_height, false);
            code += render_option("maximum_height", maximum_height, false);
            code += render_option("height_width_ratio", height_width_ratio, false);
            code += render_option("digits", digits, false);
            
            return code;
        }
        
    private:

        U & derived()
        {
            return static_cast<U &>(*this);
        }

        const U & derived() const
        {
            return static_cast<const U &>(*this);
        }
};

#endif // CHART_H
