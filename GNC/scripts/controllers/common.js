$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    window.addEventListener('orientationchange', function(event){
        if ( window.orientation == 180 || window.orientation==0 ) {
            $('#touchPortrait').fadeOut(200);
        }
        if( window.orientation == 90 || window.orientation == -90 ) {
            $('#touchPortrait').show();
        }
    });



    $('body').css("height",h+"px");
    $('.swiper-container').css({"height":h+"px","width":w+"px"});
    $('.info_data').css({"height":h+"px"});
    $(".adcode").css("height",h +"px");
    //$(".txt").css("height",h +"px");


    var input_edit_h=w*0.546875;
    $(".input_edit").css("height",input_edit_h+"px");

    var input_edit=w*0.453125;
    $(".input_edit").css("top",input_edit+"px");

    var txt_input_f=w*0.04375;
    $(".txt_input").css("font-size",txt_input_f+"px");

    var name=w*0.175;
    $(".name").css("top",name+"px");

    var phone=w*0.4;
    $(".phone").css("top",phone+"px");

    var w_h = $(window).height();
    $(".detail-overlay").css("height",w_h +"px");
    $(".modal").css("height",w_h +"px");

    var radio_h=w*0.06875;
    $(".radiobox").css("height",radio_h+"px");
    $(".choice").css("height",radio_h+"px");
    $(".checked").css("height",radio_h+"px");
    $(".radioclass").css("height",radio_h+"px");

    var link=w*0.0875;
    $(".link").css("height",link+"px");


    $(".submit2_button").off().on('touchend',function(){
        $(".detail-overlay").fadeIn();
    });
    $(".detail-overlay").off().on("touchend",function() {
        $(".detail-overlay").fadeOut();
    });

    $(".submit3_button").off().on('touchend',function(){
        $(".detail-overlay.activity").fadeIn();
    });

    $(".close").off().on("touchend",function() {
        $(".modal").fadeOut();
    });

    $(".submit_button").on('touchend',function(){
        var name=$("#username").val();
        var phone=$("#phone").val();
        if(name ==''&& phone ==''){
            alert("请填写名字和手机号码");
            return false;
        }else{
            swiper.slideTo(2);
        }

    });

    $(".choice.name_show_one").bind("click",function(){
        if($(this).attr("id")=="checked") {
            $(this).attr("id", "");
            $(".name_show_two").attr("id", "");
            $(".name_show_three").attr("id", "");
        }else{
            $(this).attr("id", "checked");
            $(".name_show_two").attr("id", "");
            $(".name_show_three").attr("id", "");
        }

    });

    $(".choice.name_show_two").bind("click",function(){
        if($(this).attr("id")=="checked") {
            $(this).attr("id", "");
            $(".name_show_one").attr("id", "");
            $(".name_show_three").attr("id", "");
        }else{
            $(this).attr("id", "checked");
            $(".name_show_one").attr("id", "");
            $(".name_show_three").attr("id", "");
        }

    });

    $(".choice.name_show_three").bind("click",function(){
        if($(this).attr("id")=="checked") {
            $(this).attr("id", "");
            $(".name_show_one").attr("id", "");
            $(".name_show_two").attr("id", "");
        }else{
            $(this).attr("id", "checked");
            $(".name_show_one").attr("id", "");
            $(".name_show_two").attr("id", "");
        }

    });

    $(".submit4_button").on('click',function(){
        if($("#checked").length>0) {
            var name=$("input:checked").next("label").html();
            alert(name);
            $(".modal").fadeIn();
        }else{
            alert("请至少选择一个女神");
            return false;
        }
    });










});