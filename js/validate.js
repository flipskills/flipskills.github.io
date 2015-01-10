/***********************************************
*   VALIDATE.js
*	Description: Email and form validation
************************************************/

function validateForm() {
    var name = document.forms["name"]["fname"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
    }
}

function validateEmail() {
    var value = document.forms["myForm"]["email"].value;
    var at = value.indexOf("@");
    var dot = value.lastIndexOf(".");
    if (ats< 1 || dot<at+2 || dot+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}