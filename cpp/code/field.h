#ifndef FIELD_H
#define FIELD_H

#include <sstream>
#include <ostream>

template <typename T>
class Field
{
    private:
    
        T value;
        bool empty;
    
    public:
    
        Field() : empty(true)
    	{
    		
    	}
    	
    	template <typename U>
    	Field(U&& value) : value(value), empty(false)
    	{
    		
    	}
    
    	template <typename U>
        void set_value(U&& value)
    	{
    		this->value = value; 
    		empty = false;
    	}
    	
    	T get_value() const
    	{
    		return value;
    	}
    	
    	bool is_empty() const
    	{
    	    return empty;
    	}
        
		std::string to_string() const
		{
			std::stringstream out;
            out << std::boolalpha;  
			out << value;
			return out.str();
		}
		
		template <typename U>
		friend std::ostream & operator<<(std::ostream & out, const Field<U> & field);
};

template <typename U>
std::ostream & operator<<(std::ostream & out, const Field<U> & field)
{
	out << field.get_value();
	return out;
}

#endif // FIELD_H
