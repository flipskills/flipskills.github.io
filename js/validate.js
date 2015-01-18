/***********************************************
*   VALIDATE.js
*	Description: Email and form validation
************************************************/
// (function() {
//     'use strict'

    function validateForm() {

        var name = document.forms["conversation"]["name"].value;

        var email = document.forms["conversation"]["email"].value;
        var at = email.indexOf("@");
        var dot = email.lastIndexOf(".");

        if (x == null || x == "") {
            alert("First name must be filled out");
            return false;
        }

        if (ats< 1 || dot<at+2 || dot+2>=x.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }

// })();