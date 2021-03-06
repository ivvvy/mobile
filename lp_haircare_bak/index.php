<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta http-equiv="Cache" content="no-cache">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="blank">
    <meta name="format-detection" content="telephone=no,email=no,adress=no">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <link rel="stylesheet" href="css/global.css" type="text/css">
    <link rel="stylesheet" href="css/swiper.3.1.2.min.css" type="text/css"/>
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <title></title>
</head>
<body>
    <div class="swiper-container swiper-container-h">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="box_inner">
                    <div class="box_inner--text ">
                       <!-- <img data-src="images/txt1a.png" class="text first swiper-lazy" />
                        <img data-src="images/txt1b.png" class="text second swiper-lazy" />
                        <img data-src="images/txt1c.png" class="text third swiper-lazy" />
                        <div class="swiper-lazy-preloader"></div>-->
                        <img src="images/txt1a.png" class="text first" />
                        <img src="images/txt1b.png" class="text second" />
                        <img src="images/txt1c.png" class="text third" />
                     </div>
                    <div class="bottom_arrow">
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="box_inner--diff">
                    <div class="box_inner--second">
                       <img src="images/img1a.png" class="img--right pic" />
                        <img src="images/txt2a.png" class="img--right txt" />
                        <img src="images/txt2b.png" class="img--right txt--one" />
                    </div>
                    <div class="bottom_arrow">
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="box_inner--button">
                    <img src="images/bg_03.png" class="link_button" />
                    <div class="select">
                            <a class="little" href="pro_one.html"></a>
                            <a class="middle" href="pro_two.html"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="js/swiper.3.1.2.jquery.min.js" type="text/javascript"></script>
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
    <script src="js/basic.js" type="text/javascript"></script>
    <script src="js/imgcomplete.js" type="text/javascript"></script>
    <script src="js/imgload.js" type="text/javascript"></script>
    <script src="js/noclickdelay.js" type="text/javascript"></script>
    <script>
        setTimeout(function(){
                    $('.first').fadeIn(1000,function(){
                        $('.second').fadeIn(1000,function(){
                            $('.third').fadeIn(1000,function(){});
                        });
                    })
        });
        var swiperH = new Swiper('.swiper-container-h', {
            direction: 'vertical',
            slidesPerView:1,
            lazyLoading : true,
            paginationClickable: true,
            onSlideChangeStart: function () {
                $('.text').fadeOut(1000,function(){});
                $('.img--right').fadeOut(1000,function(){});

            },
            onSlideChangeEnd: function () {
                var s = swiperH.activeIndex;
                switch (s){
                    case 0:

                        $('.first').fadeIn(1000,function(){
                            $('.second').fadeIn(1000,function(){
                                $('.third').fadeIn(1000,function(){});
                            });
                        });
                        break;
                    case 1:
                        $('.txt').fadeIn(1000,function(){
                            $('.pic').fadeIn(1000,function(){
                                $('.txt--one').fadeIn(1000,function(){});
                            });
                        });
                        break;
                   case 3:
                        $('.top--one').fadeIn(1000,function(){
                            $('.top--two').fadeIn(1000,function(){
                                $('.pro--one').fadeIn(1000,function(){
                                    $('.pro--two').fadeIn(1000,function(){
                                        $('.pro--three').fadeIn(1000,function(){});
                                    });
                                });
                            });
                        });
                        break;
                }
            }
        });

        if($.cookie("page") == 2){
            swiperH.slideTo(2);
            $.cookie("page","1");
        }else{
            swiperH.slideTo(0);
        }
    </script>
</body>
</html>
