//Al click mostra il menu'
$('.fa-bars').click(function () {
    $('.hamburger-menu').show();
});

//Al click nasconde il menu'
$('.fa-times').click(function () {
    $('.hamburger-menu').hide();
});

//Cambia il colore del testo nel menu'
$('.hamburger-menu > ul > li > a').css({
    "color" : "white"
});

//Cambia colore con quando il mouse ci passa sopra
$('.hamburger-menu > ul > li > a').mouseenter(function () {
    $(this).css("color", "red");
});

//Cambia colore quando il mouse non è più sopra
$('.hamburger-menu > ul > li > a').mouseleave(function () {
    $(this).css("color", "white");
});