$(document).ready(function() {
    AOS.init();
    var inicio = $('#home').offset().top,
        sobreNosotros = $('#aboutme').offset().top,
        servicios = $('#services').offset().top,
        portafolio = $('#portfolio').offset().top,
        contacto = $('#contact').offset().top;

    $('#btn-home').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500);
    });

    $('#btn-aboutme').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreNosotros
        }, 500);
    });

    $('#btn-services').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 500);
    });

    $('#btn-portfolio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portafolio
        }, 500);
    });
    $('#btn-contact').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });
   
});
