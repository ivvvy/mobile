$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('.swiper-share').css("height",h+"px");

    var wishword=w*0.125;
    $(".wish--word").css("top",wishword+"px");

    var slogan=w*1.01875;
    $(".slogan").css("top",slogan+"px");

    var arrow=w*1.5;
    $(".u--arrow--one").css("top",arrow+"px");

    var options=w*0.228125;
    $(".options").css("top",options+"px");/*12.30*/

    var photo=w*0.253125;
    $(".photo").css("top",photo+"px");/*12.30*/
    $("#file").css("top",photo+"px");/*12.30*/

    var file_h=w*0.3125;
    $(".photo").css("height",file_h+"px");/*12.30*/
    $("#file").css("height",file_h+"px");/*12.30*/

    var input_edit=w*0.59375;
    $(".input--edit").css("top",input_edit+"px");/*12.30*/

    var input_edit_h=w*0.40625;
    $(".input--edit").css("height",input_edit_h+"px");/*12.30*/

    var txt_input=w*0.06875;
    $(".txt--input").css("top",txt_input+"px");/*12.30*/

    var send_gift=w*0.984375;
    $(".send--gift").css("top",send_gift+"px");/*12.30*/

    var tips=w*1.2125;
    $(".tips").css("top",tips+"px");/*12.30*/

    var receive_inner=w*0.3375;
    $(".receive--inner").css("top",receive_inner+"px");/*12.30*/

    var receive_inner_h=w*0.44375;
    $(".receive--inner").css("height",receive_inner_h+"px");/*12.30*/

    var input_finish=w*0.053125;
    $(".input--finish").css("top",input_finish+"px");/*12.30*/


    /* var name_finish=w*0.325;
     $(".name--finish").css("top",name_finish+"px");*//*12.30*/

    var tabbox=w*0.21875;
    $(".tab--box").css("top",tabbox+"px");

    var given=w*1.4375;
    $(".given").css("top",given+"px");

  /*  var share_area=w*0.125;
    $(".share--area").css("top",share_area+"px");*/

    var gift_card=w*0.140625;
    $(".gift--card").css("top",gift_card+"px");

    var card_inner=w*0.33125;
    $(".card--inner").css("top",card_inner+"px");/*12.29*/

    var view=w*1.421875;
    $(".view").css("top",view+"px");/*12.24 16:39*/

    var slider_box=w*0.125;
    $(".slider--box").css("top",slider_box+"px");

    var slider_box_two=w*0.1267;
    $(".slider--box--two").css("top",slider_box_two+"px");

    var book=w*1.459375;
    $(".book").css("top",book+"px");

    var video=w*0.54375;
    $(".video").css("top",video+"px");

    var video_two=w*0.678125;
    $(".video--two").css("top",video_two+"px");

    var tips_box = w * 0.3125
    $(".tips--box").css("margin-top",tips_box+"px");

    var slide_img = w * 0.015625;
    $(".slide--img").css("margin-top",slide_img+"px");

    var slide_img = w * 1.171875;
    $(".slide--img").css("height",slide_img+"px");
    $(".swiper-slide-one").css("height",slide_img+"px");

    var slide_one_h = w * 1.15625;
    $(".swiper-slide-one").css("height",slide_one_h+"px");
    var slide_one = w *0.296875;
    $(".swiper-slide-one").css("top",slide_one+"px");

    var product = w * 0.2;
    $(".product").css("margin-top",product+"px");

    var slider=w*1.15;
    $(".slider").css("height",slider+"px");

    var slider_box=w*1.015625;
    $(".slider--box").css("height",slider_box+"px");

    var product_word=w*0.18125;
    $(".product--word").css("top",product_word+"px");

    var tips_box_two = w * 0.284375;
    $(".tips--box--two").css("margin-top",tips_box_two+"px");

    var contact=w*0.79375;
    $(".contact").css("top",contact+"px");

    var contact_again=w*0.759375;
    $(".contact--again").css("top",contact_again+"px");

    var people=w*0.765625;
    $(".people").css("height",people+"px");

    var slider_box_t=w*0.99375;
    $(".slider--box--two").css("height",slider_box_t+"px");

    var tips_box_two_h=w*0.521875;
    $(".tips--box--two").css("height",tips_box_two_h+"px");

    var send_tips=w* 1.125
    $(".send--tip").css("top",send_tips+"px");

    var video_h=w*0.5;
    $(".video").css("height",video_h+"px");

    var video_two_h=w*0.375;
    $(".video--two").css("height",video_two_h+"px");

    var video_w=w* 1;
    $(".video").css("width",video_w+"px");

    var music_icon=w*0.2293;
    $(".music-icon").css("top",music_icon+"px");


    $(".close").bind("click",function(){
        $(".alert--page").hide();
        $(".modal").hide();
    })
    $(".given").bind("click",function(){
        $(".swiper-share").css("display","block");
        $(".send--tip").fadeIn(1000);
        $(".tvp_button_play").css("display","none");
    })
    $(".book").bind("click",function(){
        $(".alert--page").show();
        $(".modal").show();
    })

    var gift_bg=w*1.25;
    $(".gift--bg").css("height",gift_bg+"px");

    var gift_bg_h=w*1.240625;
    $(".gift--card").css("height",gift_bg_h+"px");

    var teacher_finish=w*0.3375;
    $(".teacher--finish").css("top",teacher_finish+"px");

    var send_wish_finish=w*0.340625;
    $(".send--wish--finish").css("top",send_wish_finish+"px");
})

 /*$(".tvp_overlay_play").bind("click",function(){
     if($(".music-trigger").hasClass("play")){
         $('#stop-btn').click();
         $(".music-trigger").removeClass("play").addClass("stop");
     }else{
         $('#play-btn').click();
         $(".music-trigger").removeClass("stop").addClass("play");
     }
 });*/
/*$("#WxMomentVideo .tvp_overlay_play").bind("click",function(){
    alert("2");
    *//* if($(".music-trigger").hasClass("play")){
     $('#stop-btn').click();
     $(".music-trigger").removeClass("play").addClass("stop");
     }else{
     $('#play-btn').click();
     $(".music-trigger").removeClass("stop").addClass("play");
     }*//*
});*/
