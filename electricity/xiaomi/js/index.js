window.onload=function(){
  var zhubanone=$(".zhuban-left-one");
  var listbox=$(".listbox");
  for(var i=0;i<zhubanone.length;i++){
  	zhubanone[i].index=i;
  	zhubanone[i].onmouseover=function(){
  		for(var j=0;j<listbox.length;j++){
  			listbox[j].style.display="none";
  		}
  		listbox[this.index].style.display="block";
  	}
  	zhubanone[i].onmouseout=function(){
  		listbox[this.index].style.display="none";
  	}
  	listbox[i].index=i;
  	listbox[i].onmouseout=function(){
  		listbox[this.index].style.display="none";
  	}
  }
   

//图片按需加载
var zong=$(".zong")[0];
var tupians=$("img",zong);
for(var i=0;i<tupians.length;i++){
   var val=tupians[i].getAttribute("src");
   tupians[i].setAttribute("aa",val);
   tupians[i].setAttribute("src","");
}
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var scrollTop=obj.scrollTop;
    if(zong.offsetTop<obj.scrollTop+ch){
      var imgs=$("img",zong);
      for(var j=0;j<imgs.length;j++){
      imgs[j].src=imgs[j].getAttribute("aa");
      }
    }
}
//图片按需加载


//购物车
  var gouwuce=$(".gouwuce")[0];
  var gouwucexia=$('.gouwucexia')[0];
  var gouwucexiabox=$('.gouwucexiabox')[0];
  var gh=gouwucexia.offsetHeight;
  gouwuce.onmouseover=function(){
  animate(gouwucexiabox,{height:gh},300,Tween.Linear);
  }
  gouwuce.onmouseout=function(){
  animate(gouwucexiabox,{height:0},300,Tween.Linear);
  }
//搜索
  var logoinput=$(".logoinput")[0];
  var charu=$(".charu")[0];
  var xialabox=$('.xialabox')[0];
  var xiala=$('.xiala');

  for(var i=0;i<xiala.length;i++){
    logoinput.onfocus=function(){
      var xialah=xiala[0].offsetHeight;
      charu.style.display="none";
      animate(xialabox,{height:xialah*(i-5)},500,Tween.Linear);
    }
    logoinput.onblur=function(){
      charu.style.display="block";
      animate(xialabox,{height:0},500,Tween.Linear);
    }
  }


  var logozhongli=$(".logo-zhong-li");
  var logoneibox=$(".logoneibox");
  var logoneibao=$(".logoneibao")[0];
  var logoh=logoneibao.offsetHeight;
  for(var i=0;i<logozhongli.length;i++){
  	logozhongli[i].index=i;
  	logozhongli[i].onmouseover=function(){
  	  animate(logoneibox[this.index],{height:logoh},500,Tween.Linear);  
  	}
  	  logozhongli[i].onmouseout=function(){
  		animate(logoneibox[this.index],{height:0},500,Tween.Linear);  
  	}
  	   
  	
  }

  //轮播
  
function hualunbo(tu,listli,left,right,box){
  var tuw=tu[0].offsetWidth;
  var len=tu.length;
  for(var i=0;i<len;i++){
    if(i!=0){
      tu[i].style.left=tuw+"px";
    }
  }
   var now=0;
   var next=0;
   var flag=true;
   var lilen=listli.length;
   
   var t=setInterval(aa,2000);
   function aa(){
      if(!flag){
       return;
      }
     flag=false;
     next++;
     if(next==len){
      next=0;
     }
     tu[next].style.left=tuw+"px";
     animate(tu[now],{left:-tuw},800);
     animate(tu[next],{left:0},800,Tween.Linear,function(){
      flag=true;
     });
     listli[now].className="";
     listli[next].className="hot";
     now=next;
    }
  
  
   for(var i=0;i<lilen;i++){
    listli[i].index=i;
    listli[i].onmouseover=function(){
      if(now==this.index||!flag){
            return;
      }
       flag=false;
      if(now<this.index){
        tu[this.index].style.left=tuw+"px";
        animate(tu[now],{left:-tuw},800);
      }else{
        tu[this.index].style.left=-tuw+"px";
        animate(tu[now],{left:tuw},800);
      }
        animate(tu[this.index],{left:0},800,Tween.linear,function(){
             flag=true;
        });
         listli[now].className="";
          listli[this.index].className="hot";
          now=this.index;
          next=this.index;
          
    }
   }
   left.onclick=function(){
    if(!flag){
       return;
    }
    flag=false;
    next--;
    if(next<0){
       next=len-1;
    }
    tu[next].style.left=-tuw+"px";
    animate(tu[now],{left:tuw},800);
    animate(tu[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    });
    listli[now].className="";
    listli[next].className="hot";
    now=next;
   }
   right.onclick=function(){
     if(!flag){
       return;
      }
    flag=false;
    next++;
    if(next==len){
      next=0;
    }
    tu[next].style.left=tuw+"px";
    animate(tu[now],{left:-tuw},800);
    animate(tu[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    });
    listli[now].className="";
    listli[next].className="hot";
     now=next;
   }
    box.onmouseover=function(){
      right.style.display="block";
      left.style.display="block";
      clearInterval(t);
    }
    box.onmouseout=function(){
      right.style.display="none";
      left.style.display="none";
      t=setInterval(aa,2000);
    }
} 
  var banner=$(".banner");
  var listul=$(".listul")[0];
  var listulli=$("li",listul);
  var bannerleft=$(".bannerleft")[0];
  var bannerright=$(".bannerright")[0];
  var zhuban=$(".zhuban")[0];
hualunbo(banner,listulli,bannerleft,bannerright,zhuban);





//底部内容滑动
     var bigneirong=$(".bigneirong");
     var neirongul=$(".neirong-ul")[0];
     var neirongli=$("li",neirongul); 
     var neirongleft=$(".neirongleft")[0];
     var neirongright=$(".neirongright")[0];
     var neirong=$(".neirong")[0];
      
function dongtai(tu,listli,left,right,box){
  var tuw=tu[0].offsetWidth;
  var len=tu.length;
  for(var i=0;i<len;i++){
  	if(i!=0){
  		tu[i].style.left=tuw+"px";
  	}
  }
   var now=0;
   var next=0;
   var flag=true;
   var lilen=listli.length;
   for(var i=0;i<lilen;i++){
   	listli[i].index=i;
   	listli[i].onmouseover=function(){
   		if(now==this.index||!flag){
            return;
   		}
   		 flag=false;
   		if(now<this.index){
   			tu[this.index].style.left=tuw+"px";
   			animate(tu[now],{left:-tuw},800);
   		}else{
   			tu[this.index].style.left=-tuw+"px";
   			animate(tu[now],{left:tuw},800);
   		}
   		  animate(tu[this.index],{left:0},800,Tween.linear,function(){
   		  	   flag=true;
   		  });
   		   listli[now].className="";
       	  listli[this.index].className="quan";
       	  now=this.index;
          next=this.index;
       	  
   	}
   }
   left.onclick=function(){
    if(!flag){
       return;
    }
    flag=false;
    next--;
   	if(next<0){
   	   next=len-1;
   	}
   	tu[next].style.left=-tuw+"px";
   	animate(tu[now],{left:tuw},800);
   	animate(tu[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    });
   	listli[now].className="";
   	listli[next].className="quan";
   	now=next;
   }
   right.onclick=function(){
     if(!flag){
       return;
      }
    flag=false;
   	next++;
   	if(next==len){
   		next=0;
   	}
   	tu[next].style.left=tuw+"px";
   	animate(tu[now],{left:-tuw},800);
   	animate(tu[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    });
   	listli[now].className="";
   	listli[next].className="quan";
   	 now=next;
   }
    box.onmouseover=function(){
      right.style.display="block";
      left.style.display="block";
      
    }
    box.onmouseout=function(){
      right.style.display="none";
      left.style.display="none";
    }
      
} 

dongtai(bigneirong,neirongli,neirongleft,neirongright,neirong);

     var bigneirongone=$(".bigneirongone");
     var neirongulone=$(".neirong-ulone")[0];
     var neironglione=$("li",neirongulone); 
     var neirongleftone=$(".neirongleftone")[0];
     var neirongrightone=$(".neirongrightone")[0];
     var neirongone=$(".neirong")[1];
dongtai(bigneirongone,neironglione,neirongleftone,neirongrightone,neirongone); 
     var bigneirongtwo=$(".bigneirongtwo");
     var neirongultwo=$(".neirong-ultwo")[0];
     var neironglitwo=$("li",neirongultwo); 
     var neironglefttwo=$(".neironglefttwo")[0];
     var neirongrighttwo=$(".neirongrighttwo")[0];
     var neirongtwo=$(".neirong")[2];
dongtai(bigneirongtwo,neironglitwo,neironglefttwo,neirongrighttwo,neirongtwo); 
     var bigneirongthree=$(".bigneirongthree");
     var neirongulthree=$(".neirong-ulthree")[0];
     var neironglithree=$("li",neirongulthree); 
     var neirongleftthree=$(".neirongleftthree")[0];
     var neirongrightthree=$(".neirongrightthree")[0];
     var neirongthree=$(".neirong")[3];
dongtai(bigneirongthree,neironglithree,neirongleftthree,neirongrightthree,neirongthree); 


//小米明星单品
  var changpingbao=$(".changpingbao")
  var titleleft=$(".titleone")[0];
  var titleright=$(".titletwo")[0];
  
  function zuoyou(changpingbao,titleleft,titleright){
  var changpingbaow=changpingbao[0].offsetWidth;
  var len=changpingbao.length;
  for(var i=0;i<len;i++){
    if(i!=0){
      changpingbao[i].style.left=changpingbaow+"px";
    }
  }
   var now=0;
   var next=0;
   var flag=true;
   titleleft.onclick=function(){
    if(!flag){
       return;
    }
    flag=false;
    next--;
    if(next<0){
       next=len-1;
    }
    changpingbao[next].style.left=-changpingbaow+"px";
    animate(changpingbao[now],{left:changpingbaow},800);
    animate(changpingbao[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    });
    now=next;
   }
   titleright.onclick=function(){
      if(!flag){
       return;
      }
    flag=false;
    next++;
    if(next==len){
      next=0;
    }
    changpingbao[next].style.left=changpingbaow+"px";
    animate(changpingbao[now],{left:-changpingbaow},800);
    animate(changpingbao[next],{left:0},800,Tween.Linear,function(){
      flag=true;
    }); 
    now=next;
   }
}
  zuoyou(changpingbao,titleleft,titleright);
  


//为你推荐
   var tuijianleft=$(".titleone")[1];
   var tuijianright=$(".titletwo")[1];
   var baochang=$('.baochang');
   zuoyou(baochang,tuijianleft,tuijianright);


    var yingjianone=$(".yingjian-one");
    var huangse=$(".huangse");
     for(var i=0;i<yingjianone.length;i++){
     	yingjianone[i].index=i;
     	yingjianone[i].onmouseover=function(){
     		for(var j=0;j<huangse.length;j++){
     		  huangse[j].style.display="none";
     		}
     		 huangse[this.index].style.display="block";
     	}
      yingjianone[i].onmouseout=function(){
        huangse[this.index].style.display="none";
      }

     }



     


   var dapeiright=$(".dapei-right");
   var yingjianright=$(".yingjianright");
   for(var i=0;i<dapeiright.length;i++){
    dapeiright[i].index=i;
    dapeiright[i].onclick=function(){
      for(var j=0;j<dapeiright.length;j++){
        yingjianright[j].style.zIndex=1;
        dapeiright[j].style.cssText='text-decoration:none;color:#333333;';
      }
        yingjianright[this.index].style.zIndex=5;
        dapeiright[this.index].style.cssText='text-decoration:underline;color:#ff6700;';
    }
   }


}