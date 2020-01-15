$(document).ready(function() {
    //Floating label
    $(".login-form .login_formfield input").focus(function() {
        $(this).parent().find(".form__label--floating").addClass("form-label_after");
    });
    $(".login-form .login_formfield input").focusout(function() {
        if (!$(this).val()) {
            $(this).parent().find(".form__label--floating").removeClass("form-label_after");
        }
    });

    //Login Form valdation
    $('#user-login').submit(function(e) {
        e.preventDefault();
        var email = $('#user_name').val();
        var password = $('#pwd').val();

        //To remove previous error messages for every submit 
        $('.error').remove();
        $('.login_formfield').removeClass('form-error');

        //Checks if the field is empty
        if (email.length < 1) {
            $('#user_name').after('<span class="error">Please enter an email address</span>');
            $('.formfield-username').addClass('form-error');
        } else {
            // incorrect e-mail format validation
            var regEX = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            var validEmail = regEX.test(email);
            if (!validEmail) {
                $('#user_name').after('<span class="error">Please enter a valid email address</span>');
                $('.formfield-username').addClass('form-error');
            }
        }
        // Checks if the field is empty
        if (password.length < 1) {
            $('#pwd').after('<span class="error">Please enter a password</span>');
            $('.formfield-password').addClass('form-error');
        } else if (password.length < 6) {
            //password length validation
            $('#pwd').after('<span class="error">The password you provided must have at least 6 characters.</span>');
            $('.formfield-password').addClass('form-error');
        }
    });

    // Password show hide toggle
    $('.show-hide').click(function() {
        var inputpwd = $($('.show-hide').attr("input"));
        if (inputpwd.attr("type") === "password") {
            inputpwd.attr("type", "text");
        } else {
            inputpwd.attr("type", "password");
        }
    });
});