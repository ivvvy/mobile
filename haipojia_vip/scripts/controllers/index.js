$(function() {

    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;

    $('.container').css("height",h+"px");

    var wrapper_inner=w*0.65625;
    $(".container--inner").css("top",wrapper_inner+"px");

    var wrapper_inner_h=w*0.84375;
    $(".container--inner").css("height",wrapper_inner_h+"px");

   /* var input_edit=w*0.596875;
    $(".input_edit").css("top",input_edit+"px");*/

    var input_edit_h=w*0.84375;
    $(".input_edit").css("height",input_edit_h+"px");

    var input_txt_h=w*0.125;
    $(".txt_input").css("height",input_txt_h+"px");

    var name=w*0.065625;
    $(".name").css("top",name+"px");

    var tel=w*0.2125;
    $(".tel").css("top",tel+"px");

    var project=w*0.365625;
    $(".project").css("top",project+"px");

    var confirm=w*0.6;
    $(".confirm").css("top",confirm+"px");

    var confirm_h=w*0.10625;
    $(".confirm").css("height",confirm_h+"px");
    $(".btn").css("height",confirm_h+"px");


    $(".btn").on('click',function(){
        var name=$("#username").val();
        var phone=$("#ContactNumber").val();
        var project=$("#project").val();
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
       /* $('.btn').attr("disabled","disabled");*/
        $.ajax({
            url: "http://10.0.0.26:8080/lp_activity/home.php",
            cache:false,
            async:false,
            type:"POST",
            data:{
                name:name,
                phone:phone,
                project:project
            },
            dataType: "json",
            success:function(data){
                if(data.msg=='false'){
                    alert(data.text);
                   /* $('.btn').removeAttr("disabled","disabled");*/
                }else{
                    alert("提交成功");
                }
            },
            error:function(){
                alert(error);
            }
        });


    })
});