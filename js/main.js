$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.nav').toggleClass('open');
        $(this).toggleClass('none');

    });
    $(".nav__item").click(function(e) {
        $('.nav').removeClass('open');
        $('.hamburger').removeClass('none');
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:true
    });
});   