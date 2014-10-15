function CoreLib() {

}

CoreLib.helper = new Help();

CoreLib.showCurrDate = function() {
    return new Date().toLocaleDateString();
};

CoreLib.start = function(url) {
    window.open(url);
};

CoreLib.plus = function() {
    var result = 0;
    for (var i in arguments) {
        if (arguments[i] == undefined || arguments[i] == null) {
            continue;
        }
        result += parseFloat(arguments[i]);
    }
    return result;
};

CoreLib.eval = function(statement) {
    return eval(statement);
};

CoreLib.heart = function() {
    window.open("http://www.aicooc.com/heart/heart.html");
};

CoreLib.help = function() {
    return CoreLib.helper.show();
};