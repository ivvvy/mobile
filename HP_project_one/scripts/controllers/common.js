$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('.swiper-slide').css("height",h+"px");

    var arrow=w*1.515625;
    $(".bottom_arrow").css("top",arrow+"px");

    var music_icon=w*0.09375;
    $(".music-icon").css("top",music_icon+"px");



})


$(".music-trigger").click(function(document){
    if($(this).hasClass("play")){
        $('#stop-btn').click();
        $(this).removeClass("play").addClass("stop");
    }
    else
    {
        $('#play-btn').click();
        $(this).removeClass("stop").addClass("play");
    }
})


function open(){
    if($(".music-trigger").hasClass("play")){
        $('#stop-btn').click();
        $(this).removeClass("play").addClass("stop");
    }else{
        $('#play-btn').click();
        $(this).removeClass("play").addClass("stop");
    }
}
