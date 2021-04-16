var jQuery = require("jquery");
var Tooltip = require("./tooltip");
var buildDecorator = require("./build-decorator");
var defaultValues = require("./default-values");

$.fn.funkytooltips = function (conf) {

   var timer = null;
   var mergedConf = conf ? $.extend(defaultValues, conf) : defaultValues;
   var tooltipDecorator = buildDecorator(new Tooltip(mergedConf.cssClass, mergedConf.displayLocation), mergedConf);

   return this.each(function () {

      var el = $(this);
      var links = el.find("a, acronym, img");

      links.each(function () {

         $(this).on("mouseover", function (e) {

            var trg = $(e.target);
            var description, location;

            if (trg.is("a")) {
               description = trg.attr("title");
               location = trg.attr("href");
               trg.attr("title", "");
            } else if (trg.is("acronym")) {
               description = trg.attr("title");
               location = "";
               trg.attr("title", "");
            } else if (trg.is("img")) {
               description = trg.attr("alt");
               location = trg.attr("src");
               trg.attr("alt", "");
            }

            tooltipDecorator.setDescription(description);
            tooltipDecorator.setLocation(location);
            timer = setTimeout(function () {
               tooltipDecorator.updatePosition(e.pageX, e.pageY);
               tooltipDecorator.showUp();
            }, mergedConf.delay);
         });

         $(this).on("mouseout", function (e) {

            var trg = $(e.target);

            clearTimeout(timer);

            if (trg.is("a, acronym")) {
               trg.attr("title", tooltipDecorator.getDescription());
            } else if (trg.is("img")) {
               trg.attr("alt", tooltipDecorator.getDescription());
            }

            tooltipDecorator.getLost();
         });

         $(this).on("mousemove", function (e) {
            tooltipDecorator.updatePosition(e.pageX, e.pageY);
         });
      });
   });
};