$(document).ready(function () {
    // Ocultar el botón al cargar la página
    $("#btn-top").hide();

    // Mostrar el botón al hacer scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#btn-top").fadeIn();
        } else {
            $("#btn-top").fadeOut();
        }
    });

    // Hacer scroll hacia arriba al hacer clic en el botón
    $("#btn-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "medium");
        return false;
    });
});