/**
 * Template Name: MyResume - v2.1.0
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
  $(document).ready(function () {
    // Header scroll class
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
      }
    });

    if ($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    }

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");

      $(".mobile-nav-toggle i").toggleClass("fa fa-bars");
      $(".mobile-nav-toggle i").toggleClass("fa fa-times");
    });
    $(document).click(function (e) {
      var container = $(".mobile-nav-toggle");
      if (container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa fa-bars");
          $(".mobile-nav-toggle i").toggleClass("fa fa-times");
        }
      }
    });

    $(document).on("click", "#portfolio-filters", function (e) {
      $("#portfolio-filters li").removeClass("filter-active");

      $(event.target).addClass("filter-active");
      var x = $(e.target).attr("data-filter");

      if (x === "all") {
        $("div[data-filter]").show(0);
      } else {
        $("div[ data-filter]").hide(0);
        $('div[data-filter="' + x + '"]').show(0);
      }
    });
    var nav_offset_top = $("header").height() + 50;
    // Hero typed
    if ($(".typed").length) {
      var typed_strings = $(".typed").data("typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
    });
  });
})(jQuery);
