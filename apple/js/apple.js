$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $(".header1").css("display",'none');
            $(".header2").css("display",'block');
            $(".footer-list").css("display","none");
            $(".title").css("border-bottom","1px solid #ececec");
            $(".title span").css("display","block");
        }else{
            $(".header1").css("display",'block');
            $(".header2").css("display",'none');
            $(".footer-list").css("display","block");
            $(".title").css("border-bottom","0px");
            $(".title span").css("display","none");
        }
    })
    $(window).resize();

    $(".title span").click(function(){
        $(this).parent().next(".footer-list").slideToggle(200);
    })
    $(".title span").mousedown(function(e){
        e.preventDefault();
    })
    //nav左边
    var flag=true;
    $('.one').click(function(){
        $(this).css("cursor","pointer");
        $(".big").slideToggle(300);
        if(flag){
            $('body').css("overflow-y","hidden");
            $(".nav-list").css("display","none");
            flag=false;
        }else{
            $('body').css("overflow-y","auto");
            $(".nav-list").css("display","block");
            flag=true;
        }
    })
    $('.one').mousedown(function(e){
        e.preventDefault();
    })
    //nav 右边
    $(".nav-list").click(function(){
        $(".nav-list .big2").slideToggle(100);
    })
    $(".nav-list").mousedown(function(e){
        e.preventDefault()
    })
    //轮播
    var t=setInterval(move,2000);
    var num=0;
    function move(){
        num++;
        if(num==($(".list").length-1)){
            $(".box").animate({marginLeft:num*-100+'%'},function(){
                $(".box").css("margin-left",0);
            });
            num=0;
        }else{
            $(".box").animate({marginLeft:num*-100+'%'});
        }
        $(".link li").removeClass("hot").eq(num).addClass("hot");
    }

        $(".banner").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,2000);
        })

    $(".link li").click(function(){
        var index=$(this).index(".link li");
        $(this).finish();
        num=index;
        if(num==($(".list").length-1)){
            $(".box").animate({marginLeft:num*-100+'%'},function(){
                $(".box").css("margin-left",0);
            });
            num=0;
        }else{
            $(".box").animate({marginLeft:num*-100+'%'});
        }
        $(".link li").removeClass("hot").eq(num).addClass("hot");
    })
    $("a").click(function(){
        return false;
    })



    //触摸滑动
    var margin;
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft;
        clearInterval(t);
        //console.log(margin);
    })
    touch.on(".box","drag",function(e){
        $(".box").css("margin-left",margin+e.x)
    })
    touch.on(".box","dragend",function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=="left"){
                num++;
                if(num==($(".list").length-1)){
                    $(".box").animate({marginLeft:num*-100+'%'},function(){
                        $(".box").css("margin-left",0);
                    });
                    num=0;
                }else{
                    $(".box").animate({marginLeft:num*-100+'%'});
                }
                $(".link li").removeClass("hot").eq(num).addClass("hot");
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:num*-100+'%'});
                    return;
                }else{
                    $(".box").animate({marginLeft:num*-100+'%'});
                }
                $(".link li").removeClass("hot").eq(num).addClass("hot");
            }
        }else{
            $(".box").animate({marginLeft:num*-100+'%'});
        }
    })
    $(".box").mousedown(function(e){
        e.preventDefault();
    })
/*
    touch.on('.class', 'touchstart', function(ev){
        ev.startRotate();
        ev.preventDefault();
    });
    touch.on(".class","rotate",function(ev){
        //ev.rotation();
        $(".class")[0].style.webkitTransform='rotate('+ev.rotation+'deg)';
        //this.style.webkitTransform = 'rotate(' + ev.rotation + 'deg)'
    })
*/

//底部

    /*底部效果*/
    var $ht=$(".column h3");
    var $uls=$(".column ul");
    $ht.click(function(){
        var i=$(this).index(".column h3");
        if($(this).hasClass("title")){
            $uls.eq(i).slideToggle(200);
            $(this).find(".jia").toggleClass("revolve");
        }else{
            return false;
        }
    })
    var $btn=$(".btn");
    var $minnav=$(".min-nav");
    var $maxnav=$(".max-nav");
    $btn.click(function(){
        $(this).toggleClass("active")
        $maxnav.slideToggle(200)
    })
    resizeWin();
    $(window).resize(resizeWin)

    function resizeWin(){
        var ww=$(window).width();
        var wh=$(window).height();
        $maxnav.css({'display':''})
        $btn.removeClass("active");
        if(ww>768){
            $maxnav.css({'display':'block','height':'100%'});
            $(".column h3").removeClass("title");
            $(".column ul").css({'display':'block'})

        }
        if(ww<768){
            $maxnav.css({'height':wh-44,'display':'none'});
            $(".column h3").addClass("title");
            $(".column ul").css({'display':'none'})
        }
    }

})