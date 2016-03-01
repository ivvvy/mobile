$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    /*$('.box_inner--button').css("height",h+"px");*/

    var select=w*0.30625;
    $(".select").css("height",select+"px");

    var select=w*1.028125;
    $(".select").css("top",select+"px");

    var little=w*0.10625;
    $(".little").css("height",little+"px");
    $(".middle").css("height",little+"px");

    var alittle=w*0.009375;
    $(".little").css("top",alittle+"px");

    var middle=w*0.2;
    $(".middle").css("top",middle+"px");

    var process=w*1;
    $(".process--one").css("height",process+"px");

    /*var alittle=w*1.034375;
    $(".little").css("top",alittle+"px");

    var middle=w*1.221875;
    $(".middle").css("top",middle+"px");*/

})



