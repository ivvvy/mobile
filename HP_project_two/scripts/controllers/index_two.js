$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('.swiper-slide').css("height",h+"px");

    var common_h=w*0.459375;
    $("#box_3_1").css("height",common_h+"px");
    $("#box_3_2").css("height",common_h+"px");

    var box_one=w*0.684375;
    $("#box_3_1").css("top",box_one+"px");
    var box_two=w*1.153125;
    $("#box_3_2").css("top",box_two+"px");


});