function Help() {
    this.functions = this.enroll();
}
Help.prototype.show = function () {
    var lines = "";
    for (var key in this.functions) {
        var line = key;
        for (var j = 20; j > key.length; j--) {
            line += "&nbsp;";
        }
        line += this.functions[key] + "<br>";
        lines += line;
    }
    return "<pre>" + lines + "</pre>"
};
Help.prototype.enroll = function () {
    return {
        "E":"Returns Euler's number (approx. 2.718)",
        "LN2":"Returns the natural logarithm of 2 (approx. 0.693)",
        "LN10":"Returns the natural logarithm of 10 (approx. 2.302)",
        "LOG2E":"Returns the base-2 logarithm of E (approx. 1.442)",
        "LOG10E":"Returns the base-10 logarithm of E (approx. 0.434)",
        "PI":"Returns PI (approx. 3.14159)",
        "SQRT1_2":"Returns the square root of 1/2 (approx. 0.707)",
        "abs(x)":"Returns the absolute value of x",
        "acos(x)":"Returns the arccosine of x, in radians",
        "asin(x)":"Returns the arcsine of x, in radians",
        "atan(x)":"Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians",
        "atan2(y,x)":"Returns the arctangent of the quotient of its arguments",
        "ceil(x)":"Returns x, rounded upwards to the nearest integer",
        "cos(x)":"Returns the cosine of x (x is in radians)",
        "exp(x)":"Returns the value of E<sup>x</sup>",
        "floor(x)":"Returns x, rounded downwards to the nearest integer",
        "log(x)":"Returns the natural logarithm (base E) of x",
        "max(x,y,z,...,n)":"Returns the number with the highest value",
        "min(x,y,z,...,n)":"Returns the number with the lowest value",
        "pow(x,y)":"Returns the value of x to the power of y",
        "random()":"Returns a random number between 0 and 1",
        "round(x)":"Rounds x to the nearest integer",
        "sin(x)":"Returns the sine of x (x is in radians)",
        "sqrt(x)":"Returns the square root of x",
        "tan(x)":"Returns the tangent of an angle",
        "showCurrDate":"Show localhost current date",
        "eval(x)":"Ex. eval (3+1)*2 = 8",
        "plus(x,y,z,...,n)":"Plus",
        "start(x)":"Open a url",
        "history":"Have performed commands",
        "exit":"Close windows or close shell console",
        "heart":"Show a heart!"
    };
};