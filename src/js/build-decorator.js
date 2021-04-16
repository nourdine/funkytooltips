var showUpStrategies = {
    basic: function (el) {
        el.css("display", "block");
    },
    fadeIn: function (el) {
        el.fadeIn(300);
    },
    slideDown: function (el) {
        el.slideDown(300);
    }
};

function buildDecorator(tooltip, settings) {

    var deco = {};

    deco.setDescription = function (description) {
        tooltip.setDescription(description);
    };

    deco.getDescription = function () {
        return tooltip.getDescription();
    };

    deco.setLocation = function (str) {
        if (str.length > settings.locationLength) {
            str = str.substr(0, settings.locationLength) + "...";
        }
        tooltip.setLocation(str);
    };

    deco.updatePosition = function (x, y) {
        tooltip.updatePosition(x + settings.deltaX, y + settings.deltaY);
    };

    deco.showUp = function () {
        tooltip.showUp(showUpStrategies[settings.displayMethod]);
    };

    deco.getLost = function () {
        tooltip.getLost();
    };

    return deco;
}

module.exports = buildDecorator;