$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    var select=w*0.3253;
    $(".select").css("height",select+"px");

    var select=w*1.01867;
    $(".select").css("top",select+"px");

    var little=w*0.108;
    $(".little").css("height",little+"px");
    $(".middle").css("height",little+"px");

    var alittle=w*0.0125;
    $(".little").css("top",alittle+"px");

    var middle=w*0.2;
    $(".middle").css("top",middle+"px");
});