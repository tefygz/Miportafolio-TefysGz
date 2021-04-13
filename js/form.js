(function() {
    let form = document.getElementById('form'),
        name = form.names,
        email = form.emails,
        message = form.messages,
        error1 = document.getElementById('error1');
        error2 = document.getElementById('error2');
        error3 = document.getElementById('error3');
        
      
    function validarName(e) {
        if (name.value == '' || name.value == null) {
            error1.style.display = 'block';
            error1.innerHTML = error1.innerHTML + '<i class="fas fa-times-circle"></i>Por favor, ingresá un Nombre';

            e.preventDefault();
        } else {
            error1.style.display = 'none';
        }
    }

    function validarEmail(e) {
        if (email.value == '' || email.value == null) {
            error2.style.display = 'block';
            error2.innerHTML = error2.innerHTML + '<i class="fas fa-times-circle"></i>Por favor, ingresá un Correo';

            e.preventDefault();
        } else {
            error2.style.display = 'none';
        }
    }

    function validarMessage(e) {
        if (message.value == '' || message.value == null) {
            error3.style.display = 'block';
            error3.innerHTML = error3.innerHTML + '<i class="fas fa-times-circle"></i>Por favor, ingresá un Mensaje';

            e.preventDefault();
        } else {
            error3.style.display = 'none';
            form.reset();
            /* alert('Mensaje enviado con exito!'); */
            document.getElementById('form__mnj-exito').classList.add('form__mnj-exito-activo');
            setTimeout(() => {
                document.getElementById('form__mnj-exitoo').classList.remove('form__mnj-exito-activo');
            }, 90000);
        }
    }

    function validarFormulario(e) {

        error1.innerHTML = '';
        error2.innerHTML = '';
        error3.innerHTML = '';

        validarName(e);
        validarEmail(e);
        validarMessage(e);
    }
    form.addEventListener('submit', validarFormulario);
   
    

}());

