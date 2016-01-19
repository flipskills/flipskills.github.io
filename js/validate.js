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
            url: "http://getsimpleform.com/messages/ajax?form_api_token=2f66b7bf00b68a27709726a7bbe419d7",
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
            email: {
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
            url: "http://getsimpleform.com/messages/ajax?form_api_token=2f66b7bf00b68a27709726a7bbe419d7",
            data: $(".subscribe-form").serialize()
        }).done(function() {
            $(".subscribe-error").hide();
            $(".subscribe-form").hide();
            $(".subscribe-thank-you").fadeIn("400");
        });
            return false; //to stop the form from submitting
        }
    });

})();