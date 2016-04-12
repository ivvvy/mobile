$(function() {

    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;

    $('.swiper-slide').css("height",h+"px");
    $('.info').css("height",h+"px");
    $('.success_page').css("height",h+"px");

    var options_box_h=w*0.734375;
    $(".options_box").css("height",options_box_h+"px");
    var options_box=w*0.75;
    $(".options_box").css("top",options_box+"px");

    var input_edit_h=w*0.59375;
    $(".input_edit").css("height",input_edit_h+"px");


    var name=w*0.1;
    $(".name").css("top",name+"px");

    var tel=w*0.228125;
    $(".tel").css("top",tel+"px");

    var project=w*0.353125;
    $(".project").css("top",project+"px");

    var house=w*0.478125;
    $(".house").css("top",house+"px");

    var input_txt=w*0.04375;
    $(".txt_input").css("font-size",input_txt+"px");

    var confirm=w*0.6;
    $(".confirm").css("top",confirm+"px");

    var confirm_h=w*0.10625;
    $(".confirm").css("height",confirm_h+"px");
    $(".btn").css("height",confirm_h+"px");

    var call=w*0.590625;
    $(".call").css("top",call+"px");


    var call_h=w*0.109375;
    $(".call").css("height",call_h+"px");
    $(".vip_line").css("height",call_h+"px");





    $(".btn").on('click',function(){
        var name=$("#username").val();
        var phone=$("#ContactNumber").val();
        var project=$("#project").val();
        var house=$("#house_num").val();
        if(name ==''){
            alert("请填写名字");
            return false;
        }
        if(phone ==''){
            alert("请填写手机号码");
            return false;
        }
        if(project ==''){
            alert("请填写所购项目");
            return false;
        }
        if(house ==''){
            alert("请填写购买房号");
            return false;
        }

        $.ajax({
            url: "http://10.0.0.29/haipojia/add_userinfo.php/Home/User/add",
            cache:false,
            async:false,
            type:"POST",
            data:{
                name:name,
                mobile:phone,
                project:project,
                room_number:house
            },
            dataType: "json",
            success:function(data){
                if(data.code== 0){
                    $(".success_page").css('display','block');
                }else{
                    alert(data.info);
                }
            }

        });


    })
});