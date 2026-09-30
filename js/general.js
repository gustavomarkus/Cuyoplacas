//validación del formulario
//leer el código, cuando la página alla cargado completamente
$(document).ready(function () {
    $("#contacto").submit(function () {
        if ($("#nombre").val() == "") {
            alert("por favor ingrese su nombre");
            $("#nombre").focus();
            return false;
        }//validación del contacto
        if ($("#email").val() == "") {
            alert("por favor ingrese su email");
            $("#email").focus();
            return false;
        }//validación del email
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test($("#email").val())) {
            alert("La dirección de correo es incorrecta.");
            $("#email").focus();
            return false;
        }//para que los datos del correo esten correctos se utiliza este código (arriba)
        if ($("#telefono").val() == "") {
            alert("por favor ingrese su teléfono");
            $("#telefono").focus();
            return false;
        }//validaci´n del teléfono
        if (!$("#politica").not(":checked")) {
            alert("por favor  acepte las políticas y condiciones del sitio");
            $("#politica").focus();
            return false;
        }//para que este el checked tildado se utiliza la lógica con negación, la orden es que este tildado, entonces al negar con el símbolo ! sale la ventana de tildar por favor
        return true;
    });
});
//este es plugin nivoslider
$(window).load(function () {
    $('#slider').nivoSlider({
        effect : "sliceDown",
        animSpeed: 500,
        pauseTime: 8000
    });
});
//tener en cuenta los controles que nos brinda la página, como por ejemplo el tiempo que permanece la imagen hasta el efecto y su consecutiva imagen...
