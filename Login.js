

$(document).ready(function () {
   
    const showHiddenPass = (loginPass, loginEye) => {
      const input = $('#' + loginPass);
      const iconEye = $('#' + loginEye);

      iconEye.on('click', () => {
        
        if (input.attr('type') === 'password') {
          input.attr('type', 'text');
          iconEye.removeClass('ri-eye-line').addClass('ri-eye-off-line');
        } else {
          input.attr('type', 'password');
          iconEye.removeClass('ri-eye-off-line ').addClass('ri-eye-line');
        }
      });
    };

    
    showHiddenPass('login-pass', 'login-eye');

  
    function Register() {
      window.location.href = "Register.html";
    }

   
    $('#registerButton').on('click', Register);
  });


