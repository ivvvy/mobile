$(function(){
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;

    var wrapper_inner=w*0.28125;
    $(".wrapper--inner").css("top",wrapper_inner+"px");

    var wrapper_inner_h=w*1.25;
    $(".wrapper--inner").css("height",wrapper_inner_h+"px");

   /* var add_h=w*1.25;
    $(".add").css("height",wrapper_inner_h+"px");*/

    var add=w*0.2875;
    $(".add").css("top",add+"px");
    $("#file").css("top",add+"px");

    var file_h=w*0.2625;
    $("#file").css("height",file_h+"px");

    var input_edit_h=w*0.575;
    $(".input--edit").css("height",input_edit_h+"px");

    var input_edit=w*0.859375;
    $(".input--edit").css("top",input_edit+"px");

    var name=w*0.1875;
    $(".name").css("top",name+"px");

    var tel=w*0.278125;
    $(".tel").css("top",tel+"px");

   /* var address=w*0.33125;
    $(".address").css("top",address+"px");
*/
  var address=w*0.35625;
    $(".address--edit").css("top",address+"px");

     var address_h=w*0.203125;
    $(".address--edit").css("height",address_h+"px");

    var word=w*0.040625;
    $(".word").css("fontSize",word+"px");

    var confirm=w*0.58125;
    $(".confirm").css("top",confirm+"px");

    var confirm_h=w*0.075;
    $(".confirm").css("height",confirm_h+"px");

    var tips=w*0.484375;
    $(".tips").css("top",tips+"px");

    var close=w*0.415625;
    $(".close").css("top",close+"px");

    $(".confirm").bind("click",function(){
        $(".wrapper--box").show();
    });

    $(".close").bind("click",function(){
        $(".wrapper--one").show();
        $(".wrapper--box").hide();
    });



})