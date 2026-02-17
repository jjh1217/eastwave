//scroll down
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('on');
    } else {
        if(!$('header').hasClass('no_change')) {
            $('header').removeClass('on');
        }
    }
});