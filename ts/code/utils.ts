
/// <reference path = "C:/Externes/TypeScript/node_modules/@types/d3/index.d.ts"/>
/// <reference path = "C:/Externes/TypeScript/node_modules/@types/jquery/index.d.ts"/>

module Utils
{
    export type Gradient = {value : number, index : number, color : string}[];

    export function map_values_to_colors(values : number[], min_color : string, middle_color : string, max_color : string, middle_value : number)
    {
        let mappings : Gradient = [];
		let number_of_negative = 0;
		let number_of_positive = 0;

        for (let i = 0, I = values.length ; i < I ; ++i)
        {
            let value = values[i];

            mappings.push({value : values[i], index : i, color : ""});

            if      (value < middle_value) ++number_of_negative;
            else if (value > middle_value) ++number_of_positive;
        }

        // Create one additional color...
		let negative_colors = create_color_gradient(min_color, middle_color, number_of_negative + 1);
        let positive_colors = create_color_gradient(middle_color, max_color, number_of_positive + 1);

        // ... and then remove the middle color (= limit the presence of white)
        negative_colors.pop();
        positive_colors.shift();
        
        mappings.sort(function(x, y)
        {
            return x.value - y.value;
        });

        let i = 0;
        let j = 0;

        for (let mapping of mappings)
        {
            if      (mapping.value < middle_value) mapping.color = negative_colors[i++];
            else if (mapping.value > middle_value) mapping.color = positive_colors[j++];
            else                                   mapping.color = middle_color;
        }

        return mappings;
    }

    export function create_color_gradient(first : string, last : string, number_of_colors : number) : string[]
	{
        let Interpolator = d3.interpolateRgb(first, last);
        
        let start = 0;
        let end = 1 + 1 / number_of_colors;
        let step = 1 / (number_of_colors - 1);

		let colors = d3.range(start, end, step).map(d => Interpolator(d));
		
		return colors;
    }
    
    export function order_values(values : string[], desired_order : string[], append_dots = true)
    {
        // Ne conserve que les valeurs qui existent dans x_values
        desired_order = desired_order.filter(x => values.includes(x) || x === "...");

        // Ne conserve que les valeurs qui ne sont pas déjà dans desired_order
        values = values.filter(x => !desired_order.includes(x));

        // Ajoute ... à la fin du vector s'il n'existe pas déjà
        if (append_dots && !desired_order.includes("...")) desired_order.push("...");

        let order : string[] = [];
        
        for (let desired_x_value of desired_order)
        {
            if (desired_x_value === "...")
            {
                order = order.concat(values);
            }
            else
            {
                order.push(desired_x_value);
            }
        }

        return order;
    }

    export function get_uniques<T>(x : Iterable<T>)
    {
        let values = new Set<T>();

        for (let value of x)
        {
            values.add(value);
        }

        return Array.from(values);
    }

    export function to_number<T>(value : T)
    {
        if      (typeof value === "string")  return Number.parseFloat(value);
        else if (typeof value === "number")  return value;
        else if (typeof value === "boolean") return (value ? 1 : 0);

        return NaN;
    }
    
    export function to_string<T>(value : T)
    {
        if      (typeof value === "string")  return value;
        else if (typeof value === "number")  return value.toString();
        else if (typeof value === "boolean") return value.toString();
        else if (value === null)             return "null";

		return "";
    }

    export function create_empty_array<T>(length : number, value : T)
    {
        let output = new Array<T>(length);

        output.fill(value);

        return output;
    }

    export function is_a_color(value : string)
    {
        let integer = "\\d+";
        let double = "\\d+(\\.\\d+)?";

		let regex_1 = RegExp( ["^", "rgb", "\\(", integer, ",", integer, ",", integer, "\\)", "$"].join("\\s*") );
		let regex_2 = RegExp( ["^", "rgba", "\\(", integer, ",", integer, ",", integer, ",", double, "\\)", "$"].join("\\s*") );
		let regex_3 = RegExp( ["^", "(#[0-9A-Fa-f]{3})|(#[0-9A-Fa-f]{6})", "$"].join("\\s*") );

		return regex_1.test(value) || regex_2.test(value) || regex_3.test(value);
    }
}