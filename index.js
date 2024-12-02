$(document).ready(function() {
        $('#confirm-password').change(function() {
            var pass = $("#reg-password").val();
            var pass_rep = $("#confirm-password").val();

            if (reg-password != confirm-password) {
                $("#confirm-password").css('border', 'red 1px solid');
                $('#errorBlock').html('Пароли не совпадают');
            }
        });
    });
