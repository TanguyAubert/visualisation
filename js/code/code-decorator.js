"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
class Decorator_Factory {
    static To_Array(Code, Extension, Parameters = this.Default_Parameters) {
        return this.Decorate(Code, Extension, Parameters).To_Array();
    }
    static To_Table(Code, Extension, Parameters = this.Default_Parameters) {
        return this.Decorate(Code, Extension, Parameters).To_Table();
    }
    static Decorate(Code, Extension, Parameters = this.Default_Parameters) {
        if (Extension === "cpp" || Extension == "h" || Extension == "tcc") {
            return new CPP_Decorator(Code, Parameters);
        }
        else if (Extension === "java") {
            return new Java_Decorator(Code, Parameters);
        }
        else if (Extension === "ts") {
            return new TypeScript_Decorator(Code, Parameters);
        }
        else if (Extension === "js") {
            return new JavaScript_Decorator(Code, Parameters);
        }
        else if (Extension === "R") {
            return new R_Decorator(Code, Parameters);
        }
        else if (Extension === "css") {
            return new CSS_Decorator(Code, Parameters);
        }
        else if (Extension === "py") {
            return new Python_Decorator(Code, Parameters);
        }
        else if (Extension === "html" || Extension === "php") {
            return new HTML_Decorator(Code, Parameters);
        }
        else if (Extension === "bas" || Extension === "vba") {
            return new VBA_Decorator(Code, Parameters);
        }
        else {
            return new Unknown_Decorator(Code, Parameters);
        }
    }
}
Decorator_Factory.Default_Parameters = {
    String: "rgb(0, 164, 255)",
    Number: "rgb(0, 164, 255)",
    Boolean: "rgb(0, 164, 255)",
    Character: "rgb(0, 164, 255)",
    Regex: "rgb(0, 164, 255)",
    Primitive_Type: "rgb(230, 120, 0)",
    Standard: "rgb(0, 120, 80)",
    Keyword: "rgb(175, 0, 0)",
    Function: "rgb(27, 0, 255)",
    Class: "rgb(27, 0, 255)",
    Operator: "rgb(150, 0, 200)",
    Punctuation: "rgb(140, 140, 140)",
    Preprocessor_Directive: "rgb(140, 140, 140)",
    Comment: "rgb(0, 182, 134)",
    Tag: "rgb(230, 120, 0)",
    Identifier: "",
    CSS_Identifier: "rgb(27, 0, 255)"
};
;
;
;
;
;
/// <reference path = "C:/Externes/TypeScript/node_modules/@types/jquery/index.d.ts"/>
var _Container, _Container_Header, _Language_Selector, _Clipboard_Paste_Button, _Container_Body, _Raw_Code_Area, _Pretty_Code_Area, _HTML_Code_Area, _Raw_Code, _Pretty_Code;
class Decorator_UI {
    constructor() {
        _Container.set(this, document.createElement("div"));
        _Container_Header.set(this, document.createElement("div"));
        _Language_Selector.set(this, document.createElement("select"));
        _Clipboard_Paste_Button.set(this, document.createElement("input"));
        _Container_Body.set(this, document.createElement("div"));
        _Raw_Code_Area.set(this, document.createElement("div"));
        _Pretty_Code_Area.set(this, document.createElement("div"));
        _HTML_Code_Area.set(this, document.createElement("div"));
        _Raw_Code.set(this, "");
        _Pretty_Code.set(this, document.createElement("div"));
        this.Receive = () => {
            __classPrivateFieldSet(this, _Raw_Code, __classPrivateFieldGet(this, _Raw_Code_Area).innerText);
        };
        this.Render = () => {
            let Index = __classPrivateFieldGet(this, _Language_Selector).selectedIndex;
            let Extension = __classPrivateFieldGet(this, _Language_Selector).options[Index].value;
            __classPrivateFieldSet(this, _Pretty_Code, Decorator_Factory.To_Table(__classPrivateFieldGet(this, _Raw_Code), Extension));
            this.Reset();
            if (__classPrivateFieldGet(this, _Raw_Code) !== "") {
                __classPrivateFieldGet(this, _Pretty_Code_Area).appendChild(__classPrivateFieldGet(this, _Pretty_Code));
                __classPrivateFieldGet(this, _HTML_Code_Area).innerText = __classPrivateFieldGet(this, _Pretty_Code).outerHTML;
            }
        };
        this.Initialize_Container();
        this.Initialize_Container_Header();
        this.Initialize_Language_Selector();
        this.Initialize_Clipboard_Paste_Button();
        this.Initialize_Container_Body();
        this.Initialize_Raw_Code_Area();
    }
    Append_UI_To(Target) {
        Target.appendChild(__classPrivateFieldGet(this, _Container));
    }
    Initialize_Container() {
        $(__classPrivateFieldGet(this, _Container)).css({
            "position": "relative"
        });
        __classPrivateFieldGet(this, _Container).appendChild(__classPrivateFieldGet(this, _Container_Header));
        __classPrivateFieldGet(this, _Container).appendChild(__classPrivateFieldGet(this, _Container_Body));
    }
    Initialize_Container_Header() {
        $(__classPrivateFieldGet(this, _Container_Header)).css({});
        __classPrivateFieldGet(this, _Container_Header).appendChild(__classPrivateFieldGet(this, _Language_Selector));
        __classPrivateFieldGet(this, _Container_Header).appendChild(__classPrivateFieldGet(this, _Clipboard_Paste_Button));
    }
    Initialize_Language_Selector() {
        let Languages = {
            CPP: "cpp",
            Java: "java",
            TypeScript: "ts",
            JavaScript: "js",
            R: "R",
            CSS: "css",
            Python: "py",
            HTML: "html",
            VBA: "vba",
            Unknown: ""
        };
        for (let [Name, Value] of Object.entries(Languages)) {
            let Option = document.createElement("option");
            Option.text = Name;
            Option.value = Value;
            __classPrivateFieldGet(this, _Language_Selector).add(Option);
        }
        $(__classPrivateFieldGet(this, _Language_Selector)).css({
            "height": "40px",
            "line-height": "40px",
            "width": "200px",
            "margin": "10px 20px 10px 0"
        });
        $(__classPrivateFieldGet(this, _Language_Selector)).on("change", this.Render);
    }
    Initialize_Clipboard_Paste_Button() {
        __classPrivateFieldGet(this, _Clipboard_Paste_Button).type = "button";
        __classPrivateFieldGet(this, _Clipboard_Paste_Button).value = "Paste to clipboard";
        $(__classPrivateFieldGet(this, _Clipboard_Paste_Button)).css({
            "height": "40px",
            "line-height": "40px",
            "cursor": "pointer",
            "background": "-webkit-gradient( linear, left bottom, left top, color-stop(0.05, #303030), color-stop(1, #4b4b4b) )",
            "color": "#ffffff",
            "font-weight": "bold",
            "border": "solid 1px black",
            "width": "200px",
            "margin": "10px 20px 10px 0"
        });
        $(__classPrivateFieldGet(this, _Clipboard_Paste_Button)).hover(function () {
            $(this).css({
                "background": "-webkit-gradient( linear, left bottom, left top, color-stop(0.05, #000000), color-stop(1, #000000) )",
            });
        }, function () {
            $(this).css({
                "background": "-webkit-gradient( linear, left bottom, left top, color-stop(0.05, #303030), color-stop(1, #4b4b4b) )",
            });
        });
        $(__classPrivateFieldGet(this, _Clipboard_Paste_Button)).on("click", (e) => {
            navigator.clipboard.writeText(__classPrivateFieldGet(this, _HTML_Code_Area).innerText).then(function () {
                console.log("Successfully copied !");
            }, function () {
                console.log("Failed to copy !");
            });
        });
    }
    Initialize_Container_Body() {
        let Tabs = new Tab_Manager();
        Tabs.Add_Tab("Raw", __classPrivateFieldGet(this, _Raw_Code_Area));
        Tabs.Add_Tab("Pretty", __classPrivateFieldGet(this, _Pretty_Code_Area));
        Tabs.Add_Tab("HTML", __classPrivateFieldGet(this, _HTML_Code_Area));
        Tabs.Switch_To("Raw");
        __classPrivateFieldGet(this, _Container_Body).appendChild(Tabs.Get_Container());
        $(__classPrivateFieldGet(this, _Container_Body)).css({
            "text-align": "center"
        });
    }
    Initialize_Raw_Code_Area() {
        __classPrivateFieldGet(this, _Raw_Code_Area).setAttribute("contenteditable", "true");
        __classPrivateFieldGet(this, _Raw_Code_Area).setAttribute("spellcheck", "false");
        $(__classPrivateFieldGet(this, _Raw_Code_Area)).css({
            "margin": "auto 0",
            "padding": "10px",
            "overflow-wrap": "break-word",
            "resize": "none",
            "text-align": "left",
            "min-height": "100px",
            "font-family": "'Courier New'",
            "line-height": "1.2em"
        });
        let Previous = "";
        $(__classPrivateFieldGet(this, _Raw_Code_Area)).on("change keyup paste", (e) => {
            // Check to prevent multiple simultaneous triggers
            let Current = e.currentTarget.innerText;
            if (Current === Previous)
                return;
            Previous = Current;
            this.Receive();
            this.Render();
        });
    }
    Reset() {
        __classPrivateFieldGet(this, _Pretty_Code_Area).innerHTML = "";
        __classPrivateFieldGet(this, _HTML_Code_Area).innerHTML = "";
    }
}
_Container = new WeakMap(), _Container_Header = new WeakMap(), _Language_Selector = new WeakMap(), _Clipboard_Paste_Button = new WeakMap(), _Container_Body = new WeakMap(), _Raw_Code_Area = new WeakMap(), _Pretty_Code_Area = new WeakMap(), _HTML_Code_Area = new WeakMap(), _Raw_Code = new WeakMap(), _Pretty_Code = new WeakMap();
class Decorator {
    constructor() {
        this.Decorated = [];
    }
    To_Array() {
        return this.Decorated;
    }
    To_Table() {
        let Number_Style = [
            "-webkit-touch-callout:none",
            "-webkit-user-select:none",
            "-khtml-user-select:none",
            "-moz-user-select:none",
            "-ms-user-select:none",
            "-o-user-select:none",
            "user-select:none",
            "text-align:center",
            "width:" + (20 * Math.ceil(Math.log10(this.Decorated.length))) + "px"
        ].join(";");
        let Code_Style = [
            "word-wrap:break-word",
            "overflow-wrap:break-word"
        ].join(";");
        let Inner_HTML = "";
        for (let i = 0, I = this.Decorated.length; i < I; ++i) {
            Inner_HTML += "<tr><td style = '" + Number_Style + "'>" + (i + 1) + "</td><td style = '" + Code_Style + "'>" + this.Decorated[i] + "</td>";
        }
        let Table = document.createElement('table');
        Table.innerHTML = Inner_HTML;
        let Table_Style = [
            "width:100%",
            "font-family:'Courier New'",
            "text-align:justify",
            "table-layout:fixed",
            "line-height:1.2em"
        ].join(";");
        Table.setAttribute("style", Table_Style);
        let Container = document.createElement("div");
        Container.appendChild(Table);
        let Container_Style = [
            "margin:auto 0",
            "padding:20px 10px",
            "background-color:#f9f9f9",
            "border:#ccc solid 1px",
            "border-left: 10px solid #ccc"
        ].join(";");
        Container.setAttribute("style", Container_Style);
        return Container;
    }
    Create_Decorated_From_Tokens(Tokens, Parameters) {
        let Rows = [];
        let Children = "";
        let Styles = new Map(Object.entries(Parameters));
        for (let Token of Tokens) {
            if (Token.Word === "\n") {
                Rows.push(Children);
                Children = "";
            }
            else {
                let Child = this.Replace_HTML_Special_Characters(Token.Word);
                let Style = "";
                if (Styles.has(Token.Category)) {
                    Style = "color:" + Styles.get(Token.Category) + ";";
                    Style = " style = '" + Style + "'";
                }
                Children += "<span" + Style + ">" + Child + "</span>";
            }
        }
        if (Children.length > 0) {
            Rows.push(Children);
        }
        return Rows;
    }
    Replace_HTML_Special_Characters(Word) {
        Word = Word.replace(/\&/g, '&amp;');
        Word = Word.replace(/\</g, '&lt;');
        Word = Word.replace(/\>/g, '&gt;');
        Word = Word.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        Word = Word.replace(/\s/g, '&nbsp;');
        return Word;
    }
    Find_Language_Reserved_Words(Code, Words) {
        let Positions = {};
        for (let Category in Words) {
            for (let Word of Words[Category]) {
                let Index = -1;
                while (true) {
                    // Search for the word starting at 0 or the previous found position
                    Index = Code.indexOf(Word, Index + 1);
                    // If found
                    if (Index >= 0) {
                        // and no longer word has already been found
                        if (!(Index in Positions) || Word.length > Positions[Index].Word.length) {
                            Positions[Index] = { Word: Word, Category: Category };
                        }
                    }
                    else {
                        // No more matches
                        break;
                    }
                }
            }
        }
        return Positions;
    }
    Parse(Code, Positions) {
        let Tokens = [];
        for (let i = 0, I = Code.length; i < I; ++i) {
            // If index i corresponds to a reserved keyword, just retrieve the token without modification and increment
            if (i in Positions) {
                Tokens.push(Positions[i]);
                i += Positions[i].Word.length - 1;
            }
            else {
                let Character = Code.charAt(i);
                if (this.Is_Alpha(Character)) {
                    i = this.Parse_Alpha_Or_Number(Code, Tokens, i, "Alpha", this.Is_Alpha);
                }
                else if (this.Is_Digit(Character)) {
                    i = this.Parse_Alpha_Or_Number(Code, Tokens, i, "Number", this.Is_Digit);
                }
                else {
                    i = this.Parse_Other(Code, Tokens, i);
                }
            }
        }
        return Tokens;
    }
    Parse_Alpha_Or_Number(Code, Tokens, First_Index, Category, Is_Valid) {
        let Last_Index = First_Index + 1;
        while (Is_Valid(Code.charAt(Last_Index))) {
            ++Last_Index;
        }
        Tokens.push({ Word: Code.substring(First_Index, Last_Index), Category: Category });
        // Return penultimate index so that the outter for loop can proceed with the next index
        return (Last_Index - 1);
    }
    Parse_Other(Code, Tokens, First_Index) {
        let Character = Code.charAt(First_Index);
        let Last_Index = First_Index;
        if (Character == '\r') {
            Character = '\n';
            if (First_Index + 1 < Code.length && Code.charAt(First_Index + 1) == '\n') {
                ++Last_Index;
            }
        }
        Tokens.push({ Word: Character, Category: "" });
        return Last_Index;
    }
    Collapse(Tokens, Ranges) {
        // Tokens are collapse starting from the end to avoid index invalidation
        for (let i = Ranges.length - 1; i >= 0; --i) {
            let Indices = Ranges[i];
            let Number_Of_Tokens_To_Replace = Indices.Last - Indices.First + 1;
            let Replacement = "";
            for (let i = Indices.First; i <= Indices.Last; ++i) {
                Replacement += Tokens[i].Word;
            }
            // Replace tokens inside range by the concatenation of their word
            Tokens.splice(Indices.First, Number_Of_Tokens_To_Replace, { Word: Replacement, Category: Indices.Category });
        }
    }
    Collapse_Structure(Ranges, Tokens) {
        // Sort ranges by increasing first index
        Ranges.sort(function (x, y) {
            return x.First - y.First;
        });
        let Result = [];
        let k = 0; // Ranges index
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            // If enters next range
            if (k < Ranges.length && i === Ranges[k].First) {
                this.Collapse_Tokens_Inside_Range(Tokens, Ranges[k], Result);
                i = Ranges[k].Last;
                // Find next index k such that i (Tokens[i]) is not inside Ranges[k]
                do {
                    ++k;
                } while (k < Ranges.length && Ranges[k].First <= i);
            }
            else {
                // Nothing to do here, just take token as is
                Result.push(Tokens[i]);
            }
        }
        return Result;
    }
    Collapse_Tokens_Inside_Range(Tokens, Range, Result) {
        let Word = "";
        for (let i = Range.First; i <= Range.Last; ++i) {
            if (Tokens[i].Word === "\n") {
                Result.push({ Word: Word, Category: Range.Category });
                Result.push({ Word: "\n", Category: "" });
                Word = "";
            }
            else {
                Word += Tokens[i].Word;
            }
        }
        Result.push({ Word: Word, Category: Range.Category });
    }
    Find_Structure(Ranges, Tokens, Start_Words_Inclusive, Start_Words_Exclusive, End_Words_Inclusive, End_Words_Exclusive, Espace_Characters, Category) {
        let N = Tokens.length;
        let First = -1;
        let Last = 0;
        while (true) {
            // Search restarts on last matched token
            First = this.Find_First_Index(Tokens, Start_Words_Inclusive, Start_Words_Exclusive, Last);
            // If start word does not match, search is over
            if (First === -1)
                break;
            Last = this.Find_Last_Index(Tokens, End_Words_Inclusive, End_Words_Exclusive, Espace_Characters, First, Ranges, Category);
            // If last word does not match or if it matches on the last token, search is also over
            if (Last === N - 1)
                break;
            // To avoid infinite loops when the structure is one character long as in #\n
            if (First === Last) {
                ++Last;
            }
        }
    }
    Find_First_Index(Tokens, Start_Words_Inclusive, Start_Words_Exclusive, First_Token_Index) {
        let Word_Length = 0;
        for (let j = First_Token_Index, J = Tokens.length; j < J; ++j) {
            if ((Word_Length = this.Get_Length_Of_First_Matched_Word(Tokens, Start_Words_Inclusive, j)) >= 0) {
                return j;
            }
            else if ((Word_Length = this.Get_Length_Of_First_Matched_Word(Tokens, Start_Words_Exclusive, j)) >= 0) {
                return j + Word_Length;
            }
        }
        return -1;
    }
    Find_Last_Index(Tokens, End_Words_Inclusive, End_Words_Exclusive, Espace_Characters, First, Ranges, Category) {
        let N = Tokens.length;
        let Last = N - 1;
        let Word_Length;
        for (let j = First + 1; j < N; ++j) {
            if ((Word_Length = this.Get_Length_Of_First_Matched_Word(Tokens, Espace_Characters, j)) >= 0) {
                j += Word_Length;
            }
            else if ((Word_Length = this.Get_Length_Of_First_Matched_Word(Tokens, End_Words_Inclusive, j)) >= 0) {
                Last = j + Word_Length - 1;
                break;
            }
            else if ((Word_Length = this.Get_Length_Of_First_Matched_Word(Tokens, End_Words_Exclusive, j)) >= 0) {
                Last = j - 1;
                break;
            }
        }
        Ranges.push({ First: First, Last: Last, Category: Category });
        return Last;
    }
    Get_Length_Of_First_Matched_Word(Tokens, Words, Index) {
        for (let Word of Words) {
            if (this.Word_Matches_Tokens_At(Tokens, Word, Index)) {
                return Word.length;
            }
        }
        // No match
        return -1;
    }
    Word_Matches_Tokens_At(Tokens, Word, Index) {
        for (let i = 0; i < Word.length && Index + i < Tokens.length; ++i) {
            if (Word[i] !== Tokens[Index + i].Word) {
                return false;
            }
        }
        return true;
    }
    Collapse_Numbers(Tokens) {
        let Ranges = [];
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            if (Tokens[i].Category === "Number") {
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "e", "+", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "e", "-", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "e", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "E", "+", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "E", "-", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "E", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", ".", "Number", "Alpha"], i, Ranges);
                i = this.Match_Numbers(Tokens, ["Number", "Alpha"], i, Ranges);
            }
            else if (Tokens[i].Word === ".") {
                i = this.Match_Numbers(Tokens, [".", "Number", "e", "+", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "e", "-", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "e", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "E", "+", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "E", "-", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "E", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number"], i, Ranges);
                i = this.Match_Numbers(Tokens, [".", "Number", "Alpha"], i, Ranges);
            }
        }
        this.Collapse(Tokens, Ranges);
    }
    Match_Numbers(Tokens, Pattern, Index, Ranges) {
        for (let i = 0; i < Pattern.length && Index + i < Tokens.length; ++i) {
            if (Pattern[i] !== Tokens[Index + i].Category
                && Pattern[i] !== Tokens[Index + i].Word) {
                // Return start index to allow other patterns to match
                return Index;
            }
        }
        let Last = Index + Pattern.length - 1;
        Ranges.push({ First: Index, Last: Last, Category: "Number" });
        // Return the last matched index so that the outter for loop can proceed with the next index
        return Last;
    }
    Collapse_Identifiers(Tokens, Is_Valid) {
        let Ranges = [];
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            if (Tokens[i].Category === "Alpha" || Tokens[i].Word === "_") {
                let First = i;
                let Last = i;
                while (this.Is_A_Valid_Character_For_An_Identifier_To_Start(Tokens, First - 1, Is_Valid))
                    --First;
                while (this.Is_A_Valid_Character_For_An_Identifier_To_End(Tokens, Last + 1, Is_Valid))
                    ++Last;
                Ranges.push({ First: First, Last: Last, Category: "Identifier" });
                i = Last;
            }
        }
        this.Collapse(Tokens, Ranges);
    }
    Is_A_Valid_Character_For_An_Identifier_To_Start(Tokens, Index, Is_Valid) {
        if (Index < 0 || Index >= Tokens.length)
            return false;
        if (Is_Valid(Tokens[Index]))
            return true;
        if (Index - 1 < 0)
            return false;
        if (Tokens[Index].Category === "Number" && Is_Valid(Tokens[Index - 1]))
            return true;
        return false;
    }
    Is_A_Valid_Character_For_An_Identifier_To_End(Tokens, Index, Is_Valid) {
        if (Index < 0 || Index >= Tokens.length)
            return false;
        if (Is_Valid(Tokens[Index]))
            return true;
        if (Tokens[Index].Category === "Number")
            return true;
        return false;
    }
    Is_Extended_Alpha(Token) {
        return (Token.Category === "Alpha" || Token.Category === "Primitive_Type" || Token.Category === "Keyword" || Token.Category === "Boolean" || Token.Word === "_");
    }
    Mark_Functions(Tokens) {
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            if (Tokens[i].Category === "Identifier") {
                let Index = i + 1;
                // Skip spaces
                while (Index < I && Tokens[Index].Word === ' ') {
                    ++Index;
                }
                if (Index < I && Tokens[Index].Word === "(") {
                    Tokens[i].Category = "Function";
                }
            }
        }
    }
    Mark_Classes(Tokens) {
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            if (i + 2 < I
                && Tokens[i].Category === "Identifier"
                && Tokens[i + 1].Word === "::"
                && Tokens[i + 2].Category === "Function") {
                Tokens[i].Category = "Class";
            }
        }
    }
    Is_Alpha(Character) {
        let Ascii = Character.charCodeAt(0);
        return ((Ascii >= 65 && Ascii <= 90) || (Ascii >= 97 && Ascii <= 122));
    }
    Is_Digit(Character) {
        let Ascii = Character.charCodeAt(0);
        return (Ascii >= 48 && Ascii <= 57);
    }
}
var _Words;
class CPP_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["false", "true"],
            Primitive_Type: ["bool", "char", "char16_t", "char32_t", "double", "float", "int", "long", "nullptr", "short", "signed", "unsigned", "void", "wchar_t"],
            Operator: ['=', '+', '-', '*', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=', '!', '&&', '||', '~', '&', '|', '^', '<<', '>>', '[', ']', '->', '.', '->*', '.*', '?', ':', '::'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor", "break", "case", "catch", "class", "compl", "const", "constexpr", "const_cast", "continue",
                "decltype", "default", "delete", "do", "dynamic_cast", "else", "enum", "explicit", "export", "extern", "for", "friend", "goto", "if", "inline", "mutable", "namespace", "new",
                "noexcept", "not", "not_eq", "operator", "or", "or_eq", "private", "protected", "public", "register", "reinterpret_cast", "return", "sizeof", "static", "static_assert",
                "static_cast", "struct", "switch", "template", "this", "thread_local", "throw", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["#"]], [], [], [["\n"], ["/", "/"]], [], "Preprocessor_Directive"); // Must be before Comment
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        this.Mark_Standard_Library(Tokens);
        this.Mark_Classes(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
    Mark_Standard_Library(Tokens) {
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            if (i + 2 < I
                && Tokens[i].Word === "std"
                && Tokens[i + 1].Word === "::"
                && (Tokens[i + 2].Category === "Identifier"
                    || Tokens[i + 2].Category === "Function")) {
                Tokens[i].Category = "Standard";
                Tokens[i + 2].Category = "Standard";
            }
        }
    }
}
_Words = new WeakMap();
var _Words;
class CSS_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: [],
            Primitive_Type: [],
            Operator: ['=', '+', '-', '*', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=', '!', '&&', '||', '~', '&', '|', '^', '<<', '>>', '[', ']', '->', '.', '->*', '.*', '?', ':', '::'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode",
                "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode",
                "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color",
                "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat",
                "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color",
                "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width",
                "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "@charset", "clear", "clip", "color", "column-count",
                "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor",
                "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "@font-face", "font-family", "font-feature-settings",
                "@font-feature-values", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates",
                "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
                "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas",
                "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "image-rendering", "@import", "isolation", "justify-content", "@keyframes", "left", "letter-spacing", "line-break",
                "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "@media",
                "min-height", "min-width", "mix-blend-mode", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow",
                "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective",
                "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-behavior", "tab-size", "table-layout", "text-align", "text-align-last", "text-combine-upright", "text-decoration",
                "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-shadow", "text-transform", "text-underline-position",
                "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select",
                "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"],
        });
        Parameters = Object.assign({}, Parameters);
        Parameters.Identifier = Parameters.CSS_Identifier;
        let Tokens = this.Tokenize(Code);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
    Tokenize(Code) {
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, (Token) => {
            return (this.Is_Extended_Alpha(Token) || Token.Word === "." || Token.Word === "#");
        });
        return Tokens;
    }
}
_Words = new WeakMap();
var _Words;
class HTML_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: [],
            Primitive_Type: [],
            Operator: ['='],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: [],
        });
        let Tokens = this.Tokenize(Code);
        let Array_Of_Tokens = this.Split_Tokens(Tokens, ["Style", "Script"]);
        let Array_Of_Cells = [];
        for (let i = 0, I = Array_Of_Tokens.length; i < I; ++i) {
            if (Array_Of_Tokens[i].Category === "Script") {
                let Code = this.Get_Code_From_Tokens(Array_Of_Tokens[i].Tokens);
                let Cells = (new JavaScript_Decorator(Code, Parameters)).To_Array();
                Array_Of_Cells = Array_Of_Cells.concat(Cells);
            }
            else if (Array_Of_Tokens[i].Category === "Style") {
                let Code = this.Get_Code_From_Tokens(Array_Of_Tokens[i].Tokens);
                let Cells = (new CSS_Decorator(Code, Parameters)).To_Array();
                Array_Of_Cells = Array_Of_Cells.concat(Cells);
            }
            else {
                let Cells = this.Create_Decorated_From_Tokens(Array_Of_Tokens[i].Tokens, Parameters);
                Array_Of_Cells = Array_Of_Cells.concat(Cells);
            }
        }
        this.Decorated = Array_Of_Cells;
    }
    Tokenize(Code) {
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [], [["<", "style", ">"]], [], [["<", "/", "style", ">"]], [], "Style");
        this.Find_Structure(Ranges, Tokens, [], [["<", "script", ">"]], [], [["<", "/", "script", ">"]], [], "Script");
        this.Find_Structure(Ranges, Tokens, [["<", "!", "-", "-"]], [], [["-", "-", ">"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["<", "/"], ["/", ">"], [">"], ["<"]], [], [[">"]], [[" "], ["\n"], ["<"]], [], "Tag");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        return Tokens;
    }
    Split_Tokens(Tokens, Categories) {
        let Array_Of_Tokens = [];
        for (let i = 0, I = Tokens.length; i < I; ++i) {
            let Category = this.Get_Category(Tokens[i], Categories);
            let j = i;
            while (true) {
                if (j + 1 < I && this.Get_Category(Tokens[j + 1], Categories) === Category) {
                    ++j;
                }
                else if (j + 2 < I && Tokens[j + 1].Category === "" && this.Get_Category(Tokens[j + 2], Categories) === Category) {
                    j += 2;
                }
                else {
                    break;
                }
            }
            Array_Of_Tokens.push({ Category: Category, Tokens: Tokens.slice(i, j + 1) });
            i = j;
        }
        return Array_Of_Tokens;
    }
    Get_Category(Token, Categories) {
        for (let Category of Categories) {
            if (Token.Category === Category)
                return Category;
        }
        return "Other";
    }
    Get_Code_From_Tokens(Tokens) {
        let Code = "";
        for (let Token of Tokens) {
            Code += Token.Word;
        }
        return Code;
    }
}
_Words = new WeakMap();
var _Words;
class Java_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["false", "true"],
            Primitive_Type: ["boolean", "char", "byte", "short", "int", "long", "float", "double"],
            Operator: ['+', '-', '*', '/', '%', '++', '--', '=', '+=', '-=', '*=', '/=', '%=', '&=',
                '|=', '^=', '>>=', '<<=', '==', '!=', '>', '<', '>=', '<=', '&& ', '||', '!', '[', ']'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends",
                "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "package", "private", "protected", "public", "return",
                "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while", "null"],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "Character");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
var _Words;
class JavaScript_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["false", "true"],
            Primitive_Type: [],
            Operator: ['+', '-', '*', '/', '%', '++', '--', '=', '+=', '-=', '*=', '/=', '%=', '==', '===', '!=', '!==', '>', '<', '>=', '<=', '!', '&&', '||', '?', ':', '&', '|', '~', '^', '<<', '>>', '[', ']', '.'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["abstract", "break", "char", "debugger", "double", "public static", "finally", "goto", "in", "let", "null", "public", "super", "throw", "try", "volatile", "arguments", "byte",
                "class", "default", "else", "extends", "float", "if", "instanceof", "long", "package", "return", "switch", "throws", "typeof", "while", "await", "case", "const", "delete", "enum",
                "false", "for", "implements", "int", "native", "private", "short", "synchronized", "transient", "var", "with", "boolean", "catch", "continue", "do", "eval", "final", "function",
                "import", "interface", "new", "protected", "static", "this", "true", "void", "yield"],
        });
        let Tokens = this.Tokenize(Code);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
    Tokenize(Code) {
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["/"]], [], [["/"]], [], [["\\"]], "Regex");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        return Tokens;
    }
}
_Words = new WeakMap();
var _Words;
class Python_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["False", "True"],
            Primitive_Type: [],
            Operator: ["+", "-", "*", "/", "%", "**", "//", "=", "+=", "-=", "*=", "/=", "%=", "//=", "**=", "&=", "|=", "^=",
                ">>=", "<<=", "==", "!=", ">", "<", ">=", "<=", "and ", "or", "not", "is ", "is not", "in ", "not in", "& ", "|", " ^",
                "~ ", "<<", ">>"],
            Punctuation: [',', '(', ')', ';', '{', '}', '[', ']'],
            Keyword: ["and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from",
                "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["\"", "\"", "\""]], [], [["\"", "\"", "\""]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["#"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
var _Words;
class R_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["FALSE", "TRUE", "T", "F"],
            Primitive_Type: [],
            Operator: ['=', '+', '-', '*', '/', '%%', '%/%', '^', '>', '<', '==', '<=', '>=', '!=', '&', '|', '!', '&&', '||', '<-', '<<-', '->', '->>', ':', '%in%', '%*%', '[', ']'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ['if', 'else', 'repeat', 'while', 'function', 'for', 'in', 'next', 'break', 'NULL', 'Inf', 'NaN', 'NA', 'NA_integer_', 'NA_real_', 'NA_complex_', 'NA_character_'],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["#"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, (Token) => {
            return (this.Is_Extended_Alpha(Token) || Token.Word === ".");
        });
        this.Mark_Functions(Tokens);
        this.Mark_Classes(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
var _Main_Container, _Tab_Buttons_Container, _Tab_Contents_Container, _Tab_Details, _Inactive_Color, _Hovered_Color, _Active_Color, _Border_Color;
class Tab_Manager {
    constructor() {
        _Main_Container.set(this, document.createElement("div"));
        _Tab_Buttons_Container.set(this, document.createElement("div"));
        _Tab_Contents_Container.set(this, document.createElement("div"));
        _Tab_Details.set(this, new Map());
        _Inactive_Color.set(this, "rgb(241, 241, 241)");
        _Hovered_Color.set(this, "rgb(221, 221, 221)");
        _Active_Color.set(this, "rgb(204, 204, 204)");
        _Border_Color.set(this, __classPrivateFieldGet(this, _Active_Color));
        $(__classPrivateFieldGet(this, _Tab_Buttons_Container)).css({
            "overflow": "hidden",
            "border": "1px solid " + __classPrivateFieldGet(this, _Border_Color),
            "background-color": __classPrivateFieldGet(this, _Inactive_Color)
        });
        __classPrivateFieldGet(this, _Main_Container).appendChild(__classPrivateFieldGet(this, _Tab_Buttons_Container));
        __classPrivateFieldGet(this, _Main_Container).appendChild(__classPrivateFieldGet(this, _Tab_Contents_Container));
    }
    Get_Container() {
        return __classPrivateFieldGet(this, _Main_Container);
    }
    Add_Tab(Name, Child) {
        let Tab_Content = this.Create_Tab_Content(Child);
        let Tab_Button = this.Create_Tab_Button(Name);
        __classPrivateFieldGet(this, _Tab_Contents_Container).appendChild(Tab_Content);
        __classPrivateFieldGet(this, _Tab_Buttons_Container).appendChild(Tab_Button);
        let Tab_Details = {
            Button: Tab_Button,
            Content: Tab_Content,
            Active: false
        };
        __classPrivateFieldGet(this, _Tab_Details).set(Name, Tab_Details);
        $(Tab_Button).hover(() => this.Change_Button_Color(Tab_Details, __classPrivateFieldGet(this, _Hovered_Color)), () => this.Change_Button_Color(Tab_Details, __classPrivateFieldGet(this, _Inactive_Color)));
    }
    Change_Button_Color(Tab_Details, New_Color) {
        if (!Tab_Details.Active) {
            $(Tab_Details.Button).css({
                "background-color": New_Color
            });
        }
    }
    Create_Tab_Content(Child) {
        let Tab_Content = document.createElement("div");
        $(Tab_Content).css({
            "display": "none",
            "border": "1px solid " + __classPrivateFieldGet(this, _Border_Color),
            "border-top": "none"
        });
        Tab_Content.appendChild(Child);
        return Tab_Content;
    }
    Create_Tab_Button(Name) {
        let Tab_Button = document.createElement("button");
        Tab_Button.innerText = Name;
        $(Tab_Button).on("click", (e) => {
            this.Switch_To(Name);
        });
        $(Tab_Button).css({
            "background-color": __classPrivateFieldGet(this, _Inactive_Color),
            "float": "left",
            "border": "none",
            "outline": "none",
            "cursor": "pointer",
            "padding": "14px 16px",
            "transition": "0.3s"
        });
        return Tab_Button;
    }
    Switch_To(Name) {
        if (__classPrivateFieldGet(this, _Tab_Details).has(Name)) {
            for (let [Tab_Name, Tab_Details] of __classPrivateFieldGet(this, _Tab_Details)) {
                if (Tab_Name === Name) {
                    this.Activate_Tab(Tab_Details);
                }
                else {
                    this.Deactivate_Tab(Tab_Details);
                }
            }
        }
    }
    Activate_Tab(Tab_Details) {
        Tab_Details.Active = true;
        Tab_Details.Content.style.display = "block";
        $(Tab_Details.Button).css({
            "background-color": __classPrivateFieldGet(this, _Active_Color)
        });
    }
    Deactivate_Tab(Tab_Details) {
        Tab_Details.Active = false;
        Tab_Details.Content.style.display = "none";
        $(Tab_Details.Button).css({
            "background-color": __classPrivateFieldGet(this, _Inactive_Color)
        });
    }
}
_Main_Container = new WeakMap(), _Tab_Buttons_Container = new WeakMap(), _Tab_Contents_Container = new WeakMap(), _Tab_Details = new WeakMap(), _Inactive_Color = new WeakMap(), _Hovered_Color = new WeakMap(), _Active_Color = new WeakMap(), _Border_Color = new WeakMap();
var _Words;
class TypeScript_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["false", "true"],
            Primitive_Type: ["boolean", "number", "string", "Array", "enum", "any", "void"],
            Operator: ['+', '-', '*', '/', '%', '++', '--', '==', '===', '!=', '!==', '>', '>=', '<', '<=', '&&', '||', '!', '&', '|', '^', '~', '>>', '<<', '>>>', '=', '+=', '-=', '*=', '/=', '%=', '?', ':', '[', ']'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export",
                "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try",
                "typeof", "var", "void", "while", "with", "as", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "any", "boolean",
                "constructor", "declare", "get", "module", "require", "number", "set", "string", "symbol", "type", "from", "of"],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["/"]], [], [["/"]], [], [["\\"]], "Regex");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
var _Words;
class Unknown_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: [],
            Primitive_Type: [],
            Operator: ['=', '+', '-', '*', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=', '!', '&&', '||', '~', '&',
                '|', '^', '<<', '>>', '[', ']', '->', '.', '->*', '.*', '?', ':', '::'],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: [],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["\"", "\"", "\""]], [], [["\"", "\"", "\""]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "*"]], [], [["*", "/"]], [], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["/", "/"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["#"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [["\\"]], "String");
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [["'"]], [], [["\\"]], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, this.Is_Extended_Alpha);
        this.Mark_Functions(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
var _Words;
class VBA_Decorator extends Decorator {
    constructor(Code, Parameters) {
        super();
        _Words.set(this, {
            Boolean: ["False", "True"],
            Primitive_Type: ["Boolean", "Integer", "Long", "Object", "Byte", "Any", "Variant", "String", "Double", "Date"],
            Operator: ["+", "-", "*", "/", "%", "^", "=", "<>", ">", "<", ">=", "<=", "AND", "OR", "NOT", "XOR", "+", "&", "+", "&", "\\"],
            Punctuation: [',', '(', ')', ';', '{', '}'],
            Keyword: ["As", "Binary", "ByRef", "ByVal", "Else", "Empty", "Error", "For", "Friend", "Get", "Input", "Is", "Let",
                "Lock", "Me", "New", "Next", "Nothing", "Null", "On", "Option", "Optional", "ParamArray", "Print", "Private", "Property", "PtrSafe",
                "Public", "Resume", "Seek", "Set", "Static", "Step", "Then", "Time", "To", "WithEvents",
                "If", "Else", "Select", "Case", "End", "For", "While", "Do", "Loop", "Wend", "And", "Or", "Function", "Sub", "Exit", "GoTo", "Dim", "Explicit",
                "Declare", "With", "Call", "Close", "Open", "ReDim", "Line Input", "Not", "Preserve", "Alias"],
        });
        let Positions = this.Find_Language_Reserved_Words(Code, __classPrivateFieldGet(this, _Words));
        let Tokens = this.Parse(Code, Positions);
        let Ranges = [];
        this.Find_Structure(Ranges, Tokens, [["'"]], [], [], [["\n"]], [], "Comment");
        this.Find_Structure(Ranges, Tokens, [["\""]], [], [["\""]], [], [], "String");
        Tokens = this.Collapse_Structure(Ranges, Tokens);
        this.Collapse_Numbers(Tokens);
        this.Collapse_Identifiers(Tokens, (Token) => {
            return (this.Is_Extended_Alpha(Token) || Token.Word === "$");
        });
        this.Mark_Functions(Tokens);
        this.Decorated = this.Create_Decorated_From_Tokens(Tokens, Parameters);
    }
}
_Words = new WeakMap();
