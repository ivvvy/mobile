$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('.swiper-slide').css("height",h+"px");

    var common_h=w*0.303125;
    $("#box_3_1").css("height",common_h+"px");
    $("#box_3_2").css("height",common_h+"px");
    $("#box_3_3").css("height",common_h+"px");

    var box_one=w*0.684375;
    $("#box_3_1").css("top",box_one+"px");
    var box_two=w*0.996875;
    $("#box_3_2").css("top",box_two+"px");
    var box_three=w*1.309375;
    $("#box_3_3").css("top",box_three+"px");



})