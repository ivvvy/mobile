$(function(){
    var text = $('.material ').find("option:selected(i)").text();
    var count=text.length;
    if (count <=3) {
            $('.material ').addClass("text_indent");
        }
        else if (count >=6) {
            $('.material ').addClass("text_indent_short");
        }
        else if (count <=10) {
            $('.material ').addClass("text_indent_short");
        }
        else if (count >=11) {
            $('.material ').removeClass("text_indent");

        }
        else {
            $('.material ').removeClass("text_indent");
        }



})