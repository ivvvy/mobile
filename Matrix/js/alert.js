$(function(){

            var pro_window = $(".alert--page");
            var windows = $(window);
    var ctop = (windows.height() - pro_window.height())+750;
    var cleft = (windows.width() - pro_window.width())/10;
   /* var ctop = (pro_window.height())/6;*/

            pro_window.css({"top":ctop + "px","left":cleft + "px"});

})




