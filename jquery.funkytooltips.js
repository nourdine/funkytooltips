/**
 * funkytooltips jQuery plugin
 *
 * License GPL http://www.gnu.org/licenses/gpl.html
 */
(function($) {

   var timer = null;

   var fly = new function() {

      var description = null;
      var location = null;

      var el = null;
      var descriptionBox = null;
      var locationBox = null;

      function showLocationBox() {
         locationBox.css("display", "block");
      }

      function hideLocationBox() {
         locationBox.css("display", "none");
      }

      this.setDescription = function(str) {
         description = str;
         descriptionBox.text(str);
      };

      this.getDescription = function() {
         return description;
      };

      this.setLocation = function(str) {
         location = str;
         locationBox.text(str);
      };

      this.updatePosition = function(x, y) {
         el.css("left", x);
         el.css("top", y);
      };

      this.showUp = function(cssClass, displayTooltipMethod, displayLocation) {
         el.addClass(cssClass);
         if (displayLocation) {
            showLocationBox();
         } else {
            hideLocationBox();
         }
         if (typeof displayTooltipMethod === "function") {
            displayTooltipMethod.call(window, el)
         }
      };

      this.getLost = function() {
         el.css("display", "none");
         description = null;
         descriptionBox.text("");
         location = null;
         locationBox.text("");
      };

      var uid = "ftt-uid-" + new Date().getTime();

      // initialization
      $("<div id='" + uid + "'><span class='description'></span><span class='location'></span></div>").appendTo("body");
      el = $("#" + uid);
      el.css("display", "none");
      descriptionBox = el.find(".description");
      locationBox = el.find(".location");
   };

   function getFlyDecorator(settings) {

      var deco = {};

      deco.setDescription = function(t) {
         fly.setDescription(t);
      };

      deco.getDescription = function() {
         return fly.getDescription();
      };

      deco.setLocation = function(str) {
         if (str.length > settings.locationLength) {
            str = str.substr(0, settings.locationLength) + "...";
         }
         fly.setLocation(str);
      };

      deco.updatePosition = function(x, y) {
         fly.updatePosition(x + settings.deltaX, y + settings.deltaY);
      };

      deco.showUp = function(cssClass, displayTooltipMethod) {
         fly.showUp(cssClass, displayTooltipMethod, settings.displayLocation);
      };

      deco.getLost = function() {
         fly.getLost();
      };

      return deco;
   }

   function showIt(e, settings, flyDecorator) {
      timer = setTimeout(function() {
         flyDecorator.updatePosition(e.pageX, e.pageY);
         flyDecorator.showUp(settings.cssClass, showUpStrategies[settings.displayMethod]);
      }, settings.delay);
   }

   var showUpStrategies = {
      basic: function(el) {
         el.css("display", "block");
      },
      fadeIn: function(el) {
         el.fadeIn(300);
      },
      slideDown: function(el) {
         el.slideDown(300);
      }
   };

   $.fn.funkytooltips = function(conf) {

      var settings = {
         cssClass: "funky-tt",
         delay: 300,
         deltaX: 15,
         deltaY: 15,
         displayLocation: true,
         locationLength: 30,
         displayMethod: "basic"
      };

      conf && $.extend(settings, conf);

      var flyDecorator = getFlyDecorator(settings);

      return this.each(function() {

         var el = $(this);
         var links = el.find("a, acronym, img");

         links.each(function() {

            $(this).bind("mouseover", function(e) {

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

               flyDecorator.setDescription(description);
               flyDecorator.setLocation(location);
               showIt(e, settings, flyDecorator);
            });

            $(this).bind("mouseout", function(e) {
               clearTimeout(timer);
               var trg = $(e.target);
               if (trg.is("a, acronym")) {
                  trg.attr("title", flyDecorator.getDescription());
               } else if (trg.is("img")) {
                  trg.attr("alt", flyDecorator.getDescription());
               }
               flyDecorator.getLost();
            });

            $(this).bind("mousemove", function(e) {
               flyDecorator.updatePosition(e.pageX, e.pageY);
            });
         });
      });
   };

})(jQuery);