$('.toggle, .separator').click(function () {
    $('.sidenav').toggleClass('closed');
    $('.toggle').fadeToggle(100);
});

$(function () {
    $('.image-link, .close').click(function (e) {
        e.preventDefault();
        $('#modal').toggleClass("active");
    });

    $('.image-link').click(function () {
        var img = $(this).find('img').attr('src');
        var imgModal = $('.image-modal');

        imgModal.attr('src', img);
    });
});

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true
    })
});