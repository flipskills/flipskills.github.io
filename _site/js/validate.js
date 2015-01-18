/***********************************************
*   VALIDATE.js
*	Description: Email and form validation
************************************************/
(function() {
    'use strict'

    $(".ajax-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        errorPlacement: function(error, element) {;
            $(".form-error").fadeIn("400");
        },
        submitHandler: function(form) {
        $.ajax({
            dataType: "jsonp",
            url: "http://getsimpleform.com/messages/ajax?form_api_token=4c8d34126c52221ab241246ba0712e3e",
            data: $(".ajax-form").serialize()
        }).done(function() {
            $(".form-error").hide();
            $(".ajax-form").hide();
            $(".form-thank-you").fadeIn("400");
        });
            return false; //to stop the form from submitting
        }
    });

    $(".subscribe-form").validate({
        rules: {
            emailSubscribe: {
                required: true,
                email: true
            },
        },
        errorPlacement: function(error, element) {;
            $(".subscribe-error").fadeIn("400");
        },
        submitHandler: function(form) {
        $.ajax({
            dataType: "jsonp",
            url: "http://getsimpleform.com/messages/ajax?form_api_token=4c8d34126c52221ab241246ba0712e3e",
            data: $(".ajax-form").serialize()
        }).done(function() {
            $(".subscribe-error").hide();
            $(".subscribe-form").hide();
            $(".subscribe-thank-you").fadeIn("400");
        });
            return false; //to stop the form from submitting
        }
    });

})();