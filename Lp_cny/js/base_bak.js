$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('.modal').css("height",h+"px");
    $('#red--show').css("height",h+"px");
    $('#slider--ten').css("height",h+"px");
    $('#red--receive').css("height",h+"px");

    var slider_one=w*0.046875;
    $("#slider--one").css("top",slider_one+"px");
    $("#slider--two").css("top",slider_one+"px");
    $("#slider--three").css("top",slider_one+"px");
    $("#slider--four").css("top",slider_one+"px");
    $("#slider--five").css("top",slider_one+"px");
    $("#slider--eight").css("top",slider_one+"px");
    $(".img--one").css("top",slider_one+"px");

    var select=w*0.82;
    $(".select").css("height",select+"px");
    $(".confident").css("height",select+"px");
    $(".elegant").css("height",select+"px");
    $(".cool").css("height",select+"px");

    var button=w*0.07866;
    $(".know--btn").css("height",button+"px");
    $(".button").css("height",button+"px");

    var button_top=w*1.159375;
    $(".know--btn").css("top",button_top+"px");

    var select=w*0.45625;
    $(".select").css("top",select+"px");

    var step_one=w*0.109375;
    $("#step--one").css("top",step_one+"px");
    $("#step--two").css("top",step_one+"px");
    $("#step--three").css("top",step_one+"px");
    $("#step--four").css("top",step_one+"px");
    $("#step--five").css("top",step_one+"px");
    $("#step--six").css("top",step_one+"px");

    var close=w*0.03125;
    $(".close").css("top",close+"px");

    var input_box=w*0.4375;
    $(".input--box").css("top",input_box+"px");

    var input_box_h=w*0.34375;
    $(".input--box").css("height",input_box_h+"px");

    var send_gift=w*0.08125;
    $(".send--gift").css("height",send_gift+"px");

    var send_gift_t=w*1.253125;
    $(".send--gift").css("top",send_gift_t+"px");

    var view_gift=w*0.09375;
    $(".view--gift").css("height",view_gift+"px");

    var view_gift_t=w*1.159375;
    $(".view--gift").css("top",view_gift_t+"px");

    var gift_one=w*0.03125;
    $(".gift--one").css("top",gift_one+"px");

    var button_t=w*1.14375;
    $(".button").css("top",button_t+"px");

    var contact_tip=w*0.1875;
    $(".contact--tip").css("height",contact_tip+"px");

    var contact_tip_t=w*0.946875;
    $(".contact--tip").css("top",contact_tip_t+"px");

    var call=w*1.2375;
    $(".call").css("top",call+"px");

    var call_h=w*0.103125;
    $(".call").css("height",call_h+"px");

    var more=w*1.2875;
    $(".more").css("top",more+"px");
    $(".get--gift").css("top",more+"px");

    var more_h=w*0.084375;
    $(".more").css("height",more_h+"px");
    $(".get--gift").css("height",more_h+"px");


   /* $(".more").bind("click",function(){
        $(".alert--box").css({"display":"block","z-index":999});
    })*/
   /* $(".get--gift").bind("click",function(){
        alert("gift");
    })*/


    $(".know--btn").bind("click",function(){
        $(".modal").css({"display":"block"});
    })

    $(".close").bind("click",function(){
        $(".modal").css({"display":"none","z-index":"98"});
    })


    $(".button").bind("click",function(){
        $(".modal").css({"display":"block"});
    })


});