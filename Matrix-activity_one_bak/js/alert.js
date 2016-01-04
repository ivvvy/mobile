$(function(){
        var pro_window = $(".alert--page");
        var windows = $(window);
        var ctop = (pro_window.height())/3;
        var cleft = (windows.width() - pro_window.width())/20;
        pro_window.css({"top":ctop + "px","left":cleft + "px"});

    })
