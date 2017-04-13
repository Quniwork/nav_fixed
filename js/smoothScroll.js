$(function() {

	var $wrap   = $('#manBody');
    var $navBar = $('.page-header-link');
    var showNavBarMinimum = $('#page-header').height() - $navBar.height();

    var wasNavBarVisible = true;
    // change nav bar visibility on scroll
    function onScroll() {
    	var y = window.pageYOffset;
        var isNavBarVisible = window.pageYOffset >= showNavBarMinimum;

        if (isNavBarVisible != wasNavBarVisible) {
            $wrap.removeClass('is-fixed');
        } else {
        	$wrap.addClass('is-fixed');
        }
    }
    // initial check
    onScroll();

    // http://davidwalsh.name/function-debounce
    function debounce(fn, wait) {
        var timeout;
        return function() {
            var _this = this;
            var args = arguments;
            var later = function() {
                timeout = null;
                fn.apply(_this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait || 100);
        };
    }

    $(window).scroll(debounce(onScroll, 30));

    // Scroll Animations
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});
