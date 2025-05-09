(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  //tech stack smooth scrolling
  $(document).ready(function () {
    let techStack = $(".tech-stack");
    let items = techStack.children();

    items.each(function () {
      $(this).clone().appendTo(techStack);
    });

    function scrollLoop() {
      techStack.animate({ left: "-=5px" }, 100, "linear", function () {
        scrollLoop(); // Recursively keep it scrolling
      });
    }

    scrollLoop();
  });

})(jQuery);
