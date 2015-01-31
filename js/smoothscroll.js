/***********************************************
*   SMOOTH SCROLL
*   Description: Smooth scroll
************************************************/

$(document).ready(function() {
	!function ($) {
        $('a[href^="#"]:not([data-toggle])').bind('click.smoothscroll',function (e) {
            
            e.preventDefault();
            var target = this.hash;
                $target = $(target);

            if (window.innerWidth <= 768) {
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top-70
                }, 800, 'swing', function () {
                    window.location.hash = target;
                });
            } else {
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top-25
                }, 800, 'swing', function () {
                    window.location.hash = target;
                });
            }
        });
      }(window.jQuery)
});