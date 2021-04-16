const $ = require("jquery");

function Tooltip(cssClass, displayLocation) {

    var uid;

    var description = null;
    var location = null;

    var el = null;
    var descriptionBox = null;
    var locationBox = null;

    var cssClass, displayLocation;

    function showLocationBox() {
        locationBox.css("display", "block");
    }

    function hideLocationBox() {
        locationBox.css("display", "none");
    }

    this.setDescription = function (str) {
        description = str;
        descriptionBox.text(str);
    };

    this.getDescription = function () {
        return description;
    };

    this.setLocation = function (str) {
        location = str;
        locationBox.text(str);
    };

    this.updatePosition = function (x, y) {
        el.css("left", x);
        el.css("top", y);
    };

    this.showUp = function (show) {
        el.addClass(cssClass);

        if (displayLocation) {
            showLocationBox();
        } else {
            hideLocationBox();
        }

        if (typeof show === "function") {
            show.call(window, el);
        }
    };

    this.getLost = function () {
        el.css("display", "none");
        description = null;
        descriptionBox.text("");
        location = null;
        locationBox.text("");
    };
    
    // initialization
    uid = "ftt-uid-" + new Date().getTime();
    $("<div id='" + uid + "'><span class='description'></span><span class='location'></span></div>").appendTo("body");
    el = $("#" + uid);
    el.css("display", "none");
    descriptionBox = el.find(".description");
    locationBox = el.find(".location");
};

module.exports = Tooltip;