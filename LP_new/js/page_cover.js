$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;
    /*var div_f_open_height = w * 0.28125;
    $('.div_f_open').css("height",div_f_open_height+"px");*/

    var div_f_close_height = w * 0.1875;
    $('.div_f_close').css("height",div_f_close_height+"px");



    var special=w*0.1125;
    document.getElementById('special').style.height = special+"px";
    document.getElementById('hair_tool').style.height = special+"px";
    document.getElementById('promote').style.height = special+"px";
    document.getElementById('customer').style.height = special+"px";
    document.getElementById('colors').style.height = special+"px";
    document.getElementById('user_center').style.height = special+"px";

    var special=w*0.9115;
    document.getElementById('special').style.top = special+"px";
    var hair_tool=w*1.1413;
    document.getElementById('hair_tool').style.top = hair_tool+"px";
    var promote=w*1.2586;
    document.getElementById('promote').style.top = promote+"px";
    var customer=w*1.376;
    document.getElementById('customer').style.top = customer+"px";
    var colors=w*1.493;
    document.getElementById('colors').style.top = colors+"px";
    var user_center=w*1.610;
    document.getElementById('user_center').style.top = user_center+"px";
})