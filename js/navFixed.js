$(function() {
    var warp, top, nav;
    warp       = $('html, body'),
    container  = $('#manBody'),
    top        = $('.page-header-link').offset().top;

    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();

        pos = getScrollTopPos($id);

        $('html, body').animate({scrollTop: pos});
    });

    $(window).scroll(function(e) {
        var y   = $(this).scrollTop();

        if (y >= top) {
            container.addClass('is-fixed');
        } else {
            container.removeClass('is-fixed');
        }
        e.preventDefault();
    });

    function getScrollTopPos(id)
    {
        var pos = id.offset().top;
        var nowY = window.pageYOffset;
        var topMenu = $('.page-header-link').height();
        var headerTtl = $('.page-header-ttl').height();


        if (nowY < headerTtl) {
            pos = pos - topMenu * 2;
        } else {
            pos = pos - topMenu;
        }

        return pos;
    }
});