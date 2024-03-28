function validate() {
    var returnValue = true;

    //---------------------------------------------------Validation for name

    var name = document.forms['myForm']['name'].value;
    var correctWay = /^[a-z A-Z]+$/; // only letters (and empty)
    if (name.match(correctWay)) returnValue = true;
    else {
        document.getElementById("nameError").innerHTML = "Name must only contain upper and lower case letter.";
        document.getElementById("name").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";

    }

    //----------------------------------------------------Validation for Password

    var password = document.forms['myForm']['password'].value;
    var confirmPassword = document.forms['myForm']['conpassword'].value;
    if (password != confirmPassword) {
        document.getElementById("passwordError").innerHTML = "Password didnot matched.";
        document.getElementById("repassword").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";
    }
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!password.match(lowerCase)) {
        document.getElementById("errorPassword").innerHTML = "At least one Lowercase letter required.";
        document.getElementById("password").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";
    }

    if (!password.match(upperCase)) {
        document.getElementById("errorPassword").innerHTML = "At least one Uppercase letter required.";
        document.getElementById("password").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";
    }

    if (!password.match(numbers)) {
        document.getElementById("errorPassword").innerHTML = "At least one Digit required.";
        document.getElementById("password").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";
    }

    if (!password.match(specialCharacters)) {
        document.getElementById("errorPassword").innerHTML = "At least one Special Charater required.";
        document.getElementById("password").style.border = "2px solid red";
        returnValue = false;
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form";
    }

    //----------------------------------------Number validation

    var number = document.forms['myForm']['phonenumber'].value;
    if (isNaN(number)) {
        document.getElementById("numberError").innerHTML = "Invalid phone number.";
        document.getElementById("number").style.border = "2px solid red";
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form.";
        returnValue = false;
    }
    if (number.charAt(0) != 9 && number.charAt(0) != 8 && number.charAt(0) != 7) {
        document.getElementById("numberError").innerHTML = "Invalid phone number.";
        document.getElementById("number").style.border = "2px solid red";
        document.getElementById("error").innerHTML = "Correct all the wrong entry then submit the form.";
        returnValue = false;
    }

    return returnValue;
}