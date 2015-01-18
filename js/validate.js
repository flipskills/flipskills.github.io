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
        errorPlacement: function(error, element) {
        },
        submitHandler: function(form) {
        $.ajax({
            dataType: "jsonp",
            url: "http://getsimpleform.com/messages/ajax?form_api_token=4c8d34126c52221ab241246ba0712e3e",
            data: $(".ajax-form").serialize()
        }).done(function() {
            //callback which can be used to show a thank you message
            //and reset the form
            alert("Thank you, for contacting us");
        });
            return false; //to stop the form from submitting
        }
    });

})();