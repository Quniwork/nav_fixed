$(function() {
    var warp       = $('html, body');
    var container  = $('#manBody');
    var top        = $('.page-header-link').offset().top;
    var topHeader    = $('#page-header').height();
    var topMenu    = $('.page-header-link').height();

    $(window).scroll(function(e) {
        var y   = $(this).scrollTop();

        if (y >= top) {
            container.addClass('is-fixed');
        } else {
            container.removeClass('is-fixed');
        }
    });

    // $(document).on('click', 'a', function(event){
    //     var pos = $($.attr(this, 'href')).offset().top;
    //     event.preventDefault();

    //     if (!container.hasClass('is-fixed')) {
    //         console.log('1',window.pageYOffset, topMenu * 2);
    //         console.log('1', topHeader);
    //         warp.animate({
    //             scrollTop: pos - topHeader
    //         }, 500);
    //     } else {
    //         console.log('2',window.pageYOffset, topMenu);
    //         warp.animate({
    //             scrollTop: pos - topMenu
    //         }, 500);
    //     }
    // });
});