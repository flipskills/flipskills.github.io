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
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
      }(window.jQuery)
});