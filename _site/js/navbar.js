(function() {
    'use strict'

    var $window = $(window);

    function resize() {
        if ($window.width() < 992) {
            return $('.navbar').addClass('navbar-fixed-top');
        }

        $('.navbar').removeClass('navbar-fixed-top');
    }

    $window
        .resize(resize)
        .trigger('resize');

})();