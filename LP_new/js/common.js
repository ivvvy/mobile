
$(function(){
    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;
   /* var container = w * 1.125;
    $("#container").css("top",container+"px");*/

    $('#mask').css("height",h+"px");

    var img_up = w * 1.4946;
    $("#index_up").css("top",img_up+"px");

    var wrapper_content = w * 0.292;
    $("#wrapper_content").css("top",wrapper_content+"px");

    var content = w * 0.288;
    $("#content").css("top",content+"px");

    var wrap = w * 0.2946;
    $("#common_wrap").css("top",wrap+"px");

    var section_one=w*0.6453;
    $(".section_one").css("top",section_one+"px");

    var exchange = w * 0.25;
    $(".exchange").css("top",exchange+"px");

    var shopping_guess_item=w*0.2053;
    $(".shopping_guess_item").css("height",shopping_guess_item+"px");

    var item_content_pic=w*0.492;
    $(".item_content_pic").css("height",item_content_pic+"px");

    var alert = w * 0.212;
    $("#alert").css("top",content+"px");
   /* var password_option=w*0.928;
    $(".password_option").css("top",password_option+"px");*/

    var address_box=w*1.09375;
    $(".address--box").css("height",address_box+"px");

    var address_box_t=h*0.14084507;
    $(".address--box").css("top",address_box_t+"px");

    /*var user_options=w*0.78125;
    $(".user_options").css("height",user_options+"px");*/
    var address_inner=w*0.925;
    $(".address--inner").css("height",address_inner+"px");

    var close_btn=w*0.234375;
    $(".close--btn").css("top",close_btn+"px");

    var options_btn=w*1.4375;
    $(".options--btn").css("top",options_btn+"px");



    $(".product_detail").bind("click",function(){
        if($(".product_detail_inner").is(":visible")){
            $(".product_detail_inner").hide();
            $(".arrow_top").removeClass("arrow_top").addClass("arrow_bottom");
        }else{
            $(".product_detail_inner").show();
            $(".arrow_bottom").addClass("arrow_top");
        }

    })

    $(".remove").bind("click",function(){
        var delect=$(this).parents("dl");
        if(delect.css("display")=="block"){
            delect.css('display','none');
        }else{
            delect.css('display','block');
        }

    })

    $(".waste").bind("click",function(){
        var selectList=$(this).parents(".credits_record_list");
        if(selectList.css("display")=="block"){
            selectList.css('display','none');
        }else{
            selectList.css('display','block');
        }
    })

    $(".cart_checkbox").bind("click",function(){
       if($(this).hasClass("checked")){
           $(this).removeClass("checked");
       }else{
           $(this).addClass("checked");
       }
    })

    $(".day").bind("click",function(){
        $(this).addClass("day_active").siblings().removeClass("day_active");
    })

    $(".sex_m").bind("click",function(){
        if($(this).attr("id")==""){
            $(this).attr("id","sex_selected");
            $(".sex_w").attr("id","");
        }else{
            $(this).attr("id","");
            $(".sex_w").attr("id","sex_selected");
        }
    })

    $(".close").bind("click",function(){
        $(".alert--page").hide();
        $("#modal").hide();
    })

    $(".sex_w").bind("click",function(){
        if($(this).attr("id")==""){
            $(this).attr("id","sex_selected");
            $(".sex_m").attr("id","");
        }else{
            $(this).attr("id","");
            $(".sex_m").attr("id","sex_selected");
        }
    })

    $("#file").bind("click",function(){
        $(".photo").append("<div class='select_img'></div>");
    })

    $(".info-show").on('touchstart',function(){
        if($(".info-show").hasClass("select_click")){
            $(this).removeClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_info_select").removeClass("icon_info_select");
        }else{
            $(this).addClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_info").addClass("icon_info_select");
        }
    })
    $(".divide-show").on('touchstart',function(){
        if($(".divide-show").hasClass("select_click")){
            $(this).removeClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_allocate").removeClass("icon_allocate_select");
        }else{
            $(this).addClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_allocate").addClass("icon_allocate_select");
        }
    })
    $(".exchange-show").on('touchstart',function(){

        if($(".exchange-show").hasClass("select_click")){
            $(this).removeClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_record_select").removeClass("icon_record_select");
        }else{
            $(this).addClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_record").addClass("icon_record_select");
        }
    })
    $(".shopping-show").on('touchstart',function(){
        if($(".shopping-show").hasClass("select_click")){
            $(this).removeClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_cart_select").removeClass("icon_cart_select");
        }else{
            $(this).addClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_cart").addClass("icon_cart_select");
        }
    })
    $(".news--show").on('touchstart',function(){
        if($(".news--show").hasClass("select_click")){
            $(this).removeClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_news_select").removeClass("icon_news_select");
        }else{
            $(this).addClass("select_click").siblings().removeClass("select_click");
            $(this).children().find(".icon_news").addClass("icon_news_select");

        }
    })

    $(".close--btn").bind("click",function(){
        $("#mask").hide();
    })

})