
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.slider').slider();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
});


//On click, will scroll down
$(".research").click(function () {
    $('html,body').animate({
        scrollTop: $("#overview").offset().top
    },
        'slow');
});

//On click, will scroll down
$(".designs").click(function () {
    $('html,body').animate({
        scrollTop: $("#sketches").offset().top
    },
        'slow');
});

//On click, will scroll down
$(".market").click(function () {
    $('html,body').animate({
        scrollTop: $("#marketing").offset().top
    },
        'slow');
});

