$(document).ready(function () {
    $("#nav-inicio").click(function () {
        $('#nav-inicio').addClass('active');
        $('#nav-quienes').removeClass('active');
        $('#nav-zumos').removeClass('active');
        $('#nav-blog').removeClass('active');
        $('#nav-contacto').removeClass('active');
    });
    $("#nav-quienes").click(function () {
        $('#nav-quienes').addClass('active');
        $('#nav-inicio').removeClass('active');
        $('#nav-zumos').removeClass('active');
        $('#nav-blog').removeClass('active');
        $('#nav-contacto').removeClass('active');
    });
    $("#nav-zumos").click(function () {
        $('#nav-zumos').addClass('active');
        $('#nav-inicio').removeClass('active');
        $('#nav-quienes').removeClass('active');
        $('#nav-blog').removeClass('active');
        $('#nav-contacto').removeClass('active');
    });
    $("#nav-blog").click(function () {
        $('#nav-blog').addClass('active');
        $('#nav-inicio').removeClass('active');
        $('#nav-quienes').removeClass('active');
        $('#nav-zumos').removeClass('active');
        $('#nav-contacto').removeClass('active');
    });
    $("#nav-contacto").click(function () {
        $('#nav-contacto').addClass('active');
        $('#nav-inicio').removeClass('active');
        $('#nav-quienes').removeClass('active');
        $('#nav-zumos').removeClass('active');
        $('#nav-blog').removeClass('active');
    });

    window.addEventListener('scroll', function () {
        let elements = document.getElementsByClassName('scroll-content');
        let screenSize = window.innerHeight;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.getBoundingClientRect().top < screenSize) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    });
});


