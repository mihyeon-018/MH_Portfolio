$(window).scroll(function () {
    let curScroll = $(this).scrollTop();
    $('.scroll-text').text(curScroll)

    // header bar on/off

    if (curScroll >= 600) {
        $('.nav-bar').css({ 'opacity': '1' })
    } else if (curScroll <= 600) {
        $('.nav-bar').css({ 'opacity': '0' })
    }

    // ===================================

    let winH = $(window).height();
    let baseLine = curScroll + winH * 0.2;

    if (baseLine >= $('#contact').offset().top) {
        $('#contact').addClass('on').siblings().removeClass('on');
        $('.nav-bar a').eq(4).addClass('on').siblings().removeClass('on');
        $('.nav-scroll a').eq(4).addClass('on').siblings().removeClass('on');

    } else if (baseLine >= $('#design').offset().top) {
        $('#design').addClass('on').siblings().removeClass('on');
        $('.nav-bar a ').eq(3).addClass('on').siblings().removeClass('on');
        $('.nav-scroll a').eq(3).addClass('on').siblings().removeClass('on');

    } else if (baseLine >= $('#web').offset().top) {
        $('#web').addClass('on').siblings().removeClass('on');
        $('.nav-bar a').eq(2).addClass('on').siblings().removeClass('on');
        $('.nav-scroll a').eq(2).addClass('on').siblings().removeClass('on');

    } else if (baseLine >= $('#profile').offset().top) {
        $('#profile').addClass('on').siblings().removeClass('on');
        $('.nav-bar a').eq(1).addClass('on').siblings().removeClass('on');
        $('.nav-scroll a').eq(1).addClass('on').siblings().removeClass('on');

    } else {
        $('#intro').addClass('on').siblings().removeClass('on');
        $('.nav-bar a').eq(0).addClass('on').siblings().removeClass('on');
        $('.nav-scroll a').eq(0).addClass('on').siblings().removeClass('on');
    }

    // ======================

    if (baseLine >= $('#contact').offset().top) {
        $('#contact div').addClass('on')
    } else $('#contact div').removeClass('on')

    // ======================
    // 타겟을 설정하고 해당 구간의 총 높이를 구한 후 그 안에 들어오면 on 붙음
    let $web = $('.web-saluty');
    let webTop = $web.offset().top;
    let webBottom = webTop + $web.outerHeight();

    if (baseLine >= webTop && baseLine <= webBottom) {
        $web.addClass('on');
    } else {
        $web.removeClass('on');
    }

    // =========================
    let WidHei = curScroll + winH

    let $design = $('#design');
    let designTop = $design.offset().top;
    let designBottom = designTop + $design.outerHeight();

    // if (WidHei >= designTop && WidHei <= designBottom) {
    //     $design.addClass('on');
    // } else { $design.removeClass('on') }

})

// ==== slider ====
$('.icon-slide').bxSlider({
    minSlides: 4,
    maxSlides: 9,
    slideWidth: 170,
    slideMargin: 100,
    ticker: true,
    speed: 90000
});
// 모바일에서 slideMargin 조절 하는 기f 더 알아보기


// 개인적인