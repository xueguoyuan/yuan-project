$(function(){
	  $(".zone").hover(function(){
  	$(".zonezi").addClass("bian1")
  	$(".zone2").addClass("bian2")
  	$(this).addClass("animated swing");
  	$(".ztwo").css({display:"none"});
  	$(".zyou").finish().animate({right:60},1000)
  	
  },function(){
  	$(this).removeClass("animated swing");
  	$(".zonezi").removeClass("bian1")
  	$(".zone2").removeClass("bian2") 	
  	$(".zyou").finish().animate({right:-580},1000,function(){
  		$(".ztwo").css({display:"block"});
  	})
  })
   $(".ztwo").hover(function(){
  	$(".ztwo1").addClass("bian1")
  	$(".ztwo2").addClass("bian2")
  	$(this).addClass("animated swing");
  	$(".zone").css({display:"none"});
  	$(".zzuo").finish().animate({left:60},1000)
  	
  },function(){
  	$(this).removeClass("animated swing");
  	$(".ztwo1").removeClass("bian1")
  	$(".ztwo2").removeClass("bian2") 	
  	$(".zzuo").finish().animate({left:-580},1000,function(){
  		$(".zone").css({display:"block"});
  	})
  })
})