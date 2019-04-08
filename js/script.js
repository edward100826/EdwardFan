$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
});

$("[data-toggle=popover]").popover();

$('.fa.fa-chevron-down.fa-5x').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});