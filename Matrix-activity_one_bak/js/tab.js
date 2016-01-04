$(function(){
    var x = 0;
    $(".swiper-button-prev").bind('click', function () {
        //tab()
        if (x != 0) {
            x--;
        }
        $('.slide--img  .slider').eq(x).show().siblings('.slider').hide();
        $('.pagination .title').eq(x).addClass('title--select').siblings('').removeClass('title--select');
    });
    $(".swiper-button-next").bind('click', function () {
        tab();
    });
    function tab() {
        if (x > 2) {
           return false;
        }
        $('.slide--img  .slider').eq(x).show().siblings('.slider').hide();
        $('.pagination .title').eq(x).addClass('title--select').siblings('').removeClass('title--select');
        x++;
    }
})