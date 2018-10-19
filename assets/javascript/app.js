
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.slider').slider();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tabs').tabs();
});

//On click, will scroll down
$(".research").click(function () {
    $('html,body').animate({
        scrollTop: $("#overview").offset().top
    },
        'slow');
});

//On click, will scroll down
$("#about-me-button").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-content").offset().top
    },
        'slow');
});

