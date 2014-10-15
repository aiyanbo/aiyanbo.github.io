String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

String.prototype.isBlank = function () {
    return this.trim().length == 0;
};

String.prototype.isNotBlank = function () {
    return !this.isBlank();
};

String.prototype.isEmpty = function () {
    return this == null || this == undefined;
};

String.prototype.isNotEmpty = function () {
    return !this.isEmpty();
};