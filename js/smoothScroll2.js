$(function() {
    var warp       = $('html, body');
    var container  = $('#manBody');
    var top        = $('.page-header-link').offset().top;
    var topHeader  = $('#page-header').height();
    var topMenu    = $('.page-header-link').height();

    $(window).scroll(function(e) {
        var y   = $(this).scrollTop();

        if (y >= top) {
            container.addClass('is-fixed');
        } else {
            container.removeClass('is-fixed');
        }
    });

    $(document).on('click', 'a', function(event){
        var pos = $( $.attr(this, 'href') ).offset().top;

        if (container.hasClass("is-fixed")) {
            warp.animate({scrollTop: pos - topMenu});
        } else {
            warp.animate({scrollTop: pos - (topHeader - topMenu)});
        }
    });
});