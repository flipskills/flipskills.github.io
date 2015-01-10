$(document).ready(function () {
    var media = window.matchMedia("(max-width: 992)") 

    var bsEnv = findBootstrapEnvironment();    
    if(bsEnv === 'sm' || bsEnv === 'xs' ) {
        $('.navbar').addClass('navbar-fixed-top');
     }
});

$(document).ready(function () {    
    var bsEnv = findBootstrapEnvironment();    
    if(bsEnv === 'md' || bsEnv === 'lg' ) {
        $('.navbar').removeClass('navbar-fixed-top');
     }
});

function findBootstrapEnvironment() {    
    var envs = ['xs', 'sm', 'md', 'lg'];
    $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env
        }
    };
}