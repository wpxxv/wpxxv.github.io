/* --------------------------------------------------
   Template by espace（https://espace.monbalcon.net/）
   Copyright: 2020 espace.

   利用規約を遵守の上、ご利用ください。
   二次配布、販売は禁止しています。
   --------------------------------------------------*/

const animateTime   = 500;

$('a[href^="#"]').click(function() {
    var href        = $(this).attr('href'),
        target      = $(href == "#" || href == "" ? 'html' : href),
        position    = target.offset().top;

    $('body,html').animate({scrollTop:position}, animateTime, 'swing');
    return false;
});

$('#pageTop').on('click', function () {
    scrollPosition(0);
});

function scrollPosition(position) {
    $('body,html').animate({
        scrollTop: position
    });
}