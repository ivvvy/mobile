$(function(){

    var w = document.documentElement.clientWidth||document.body.clientWidth;
    var h = document.documentElement.clientHeight||document.body.clientHeight;

    $('#mask').css("height",h+"px");
   /* var img_up = w * 1.395;
    $("#index_up").css("top",img_up+"px");*/
   /* var img_up = w * 1.439;
    $("#index_up").css("top",img_up+"px");*/
    //var img_up = w * 1.493;
    //$("#index_up").css("top",img_up+"px");

    var container = w * 0.96;
    $("#container").css("top",container+"px");

    var section = w * 0.852;
    $(".section_one").css("top",section+"px");

    var all_links = w * 0.1191;
    $("#all_links").css("top",all_links+"px");

    var section_two=w*1.2266;
    $(".section_two").css("top",section_two+"px");

    var banner=w*0.326;
    $(".banner").css("height",banner+"px");

    var item_content_pic=w*0.492;
    $(".item_content_pic").css("height",item_content_pic+"px");

    var shopping_guess_item=w*0.2053;
    $(".shopping_guess_item a").css("height",shopping_guess_item+"px");


    var address_box=w*1.09375;
    $(".address--box").css("height",address_box+"px");

    var address_box_t=w*0.234375;
    $(".address--box").css("top",address_box_t+"px");

    /*var user_options=w*0.78125;
     $(".user_options").css("height",user_options+"px");*/
    var address_inner=w*0.925;
    $(".address--inner").css("height",address_inner+"px");

    var close_btn=w*0.234375;
    $(".close--btn").css("top",close_btn+"px");

    var options_btn=w*1.4375;
    $(".options--btn").css("top",options_btn+"px");










    /*var user_list_show= w * 0.288;
    $(".user_list_show").css("top",user_list_show+"px");*/

    /*var special=w*0.125;
    document.getElementById('special').style.height = special+"px";
    document.getElementById('hair_tool').style.height = special+"px";
    document.getElementById('promote').style.height = special+"px";
    document.getElementById('customer').style.height = special+"px";
    document.getElementById('colors').style.height = special+"px";
    document.getElementById('user_center').style.height = special+"px";*/

    var special=w*0.156;
    $("#special").css("top",special+"px");
    var hair_tool=w*0.292;
    $("#hair_tool").css("top",hair_tool+"px");
    var promote=w*0.394;
    $("#promote").css("top",promote+"px");
    var customer=w*0.581;
    $("#customer").css("top",customer+"px");
    var colors=w*0.625;
    $("#colors").css("top",colors+"px");
    var user_center=w*0.722;
    $("#user_center").css("top",user_center+"px");

    $(".link_icon").bind('click',function(){
        if($("#all_links").is(":visible")){
            $("#all_links").hide();
            $("#modal").hide();
        }else{
            $("#all_links").show();
            $("#modal").show();
        }
    })

    $(".day").bind("click",function(){
        $(this).addClass("day_active").siblings().removeClass("day_active");
    })

    $(".product_detail").bind("click",function(){
        if($(".product_detail_inner").is(":visible")){
            $(".product_detail_inner").hide();
            $(".arrow_top").removeClass("arrow_top").addClass("arrow_bottom");
        }else{
            $(".product_detail_inner").show();
            $(".arrow_bottom").addClass("arrow_top");
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

    $(".remove").bind("click",function(){
        var delect=$(this).parents("dl");
        if(delect.css("display")=="block"){
            delect.css('display','none');
        }else{
            delect.css('display','block');
        }
    })

    $(".use_ticket").bind("click",function(){
        if($(this).hasClass("ticket_on")){
            $(this).removeClass("ticket_on");
        }else{
            $(this).addClass("ticket_on");
        }
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
    $(".sex_w").bind("click",function(){
        if($(this).attr("id")==""){
            $(this).attr("id","sex_selected");
            $(".sex_m").attr("id","");
        }else{
            $(this).attr("id","");
            $(".sex_m").attr("id","sex_selected");
        }
    })
    $(".close--btn").bind("click",function(){
        $("#mask").hide();
    });

   /* var top = ($(window).height() - $(".alert--page").height())/4;
    var scrollTop = $(document).scrollTop();
    $(".alert--page").css({ 'top' : top + scrollTop}).show();*/
})




