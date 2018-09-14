window.onload=function(){
 var xiala=$(".xiala")[0];
 var daohangzuo=$(".daohang-zuo")[0];
 var wangzhan=$(".wangzhan");
 
  for(var i=0;i<wangzhan.length;i++){
  	daohangzuo.onmouseover=function(){
  	daohangzuo.style.background="white";
 	var h=wangzhan[0].offsetHeight;
 	animate(xiala,{height:h*wangzhan.length},200,Tween.Linear);
   }
     daohangzuo.onmouseout=function(){
     daohangzuo.style.background="#f5f5f5";
     animate(xiala,{height:0},200,Tween.Linear);	
     }
 }
//下拉菜单2
 var daohangyou=$(".daohangyou");
 var dingdanbox=$(".dingdanbox");
 var dingdan=$(".dingdan");
 for(var i=0;i<dingdan.length;i++){
 	daohangyou[2].onmouseover=function(){
 	  var h=dingdan[0].offsetHeight;
 	  daohangyou[2].style.background="white";
 	  animate(dingdanbox[0],{height:h*4},200,Tween.Linear);
 	}
 	daohangyou[2].onmouseout=function(){
    daohangyou[2].style.background="#f5f5f5";
     animate(dingdanbox[0],{height:0},200,Tween.Linear);	
    }
 }
 //下拉菜单3
  for(var i=0;i<dingdan.length;i++){
 	daohangyou[3].onmouseover=function(){
 	  var h=dingdan[0].offsetHeight;
 	  daohangyou[3].style.background="white";
 	  animate(dingdanbox[1],{height:h*6},200,Tween.Linear);
 	}
 	daohangyou[3].onmouseout=function(){
    daohangyou[3].style.background="#f5f5f5";
     animate(dingdanbox[1],{height:0},200,Tween.Linear);	
    }
 }
 //下拉菜单4
  for(var i=0;i<dingdan.length;i++){
 	daohangyou[8].onmouseover=function(){
 	  var h=dingdan[0].offsetHeight;
 	  daohangyou[8].style.background="white";
 	  animate(dingdanbox[2],{height:h*7},200,Tween.Linear);
 	}
 	daohangyou[8].onmouseout=function(){
    daohangyou[8].style.background="#f5f5f5";
     animate(dingdanbox[2],{height:0},200,Tween.Linear);	
    }
 }
 //下拉菜单5
 var shoujibox=$(".shoujibox")[0];
 var shouji=$(".shouji")[0];
    daohangyou[5].onmouseover=function(){
 	  var h=shouji.offsetHeight;
 	  daohangyou[5].style.background="white";
 	  animate(shoujibox,{height:h},200,Tween.Linear);
 	}
 	daohangyou[5].onmouseout=function(){
    daohangyou[5].style.background="#f5f5f5";
     animate(shoujibox,{height:0},200,Tween.Linear);	
    } 


//搜索下拉
  var sousuoinput=$('.sousuoinput')[0];
  var sousuolabox=$('.sousuolabox')[0];
  var sousuola=$(".sousuola")[0];
  var fuhao=$('#fuhao');
  sousuoinput.onfocus=function(){
    var sousuoH=sousuola.offsetHeight;

    animate(sousuolabox,{height:sousuoH},500,Tween.Linear);

  }
  sousuoinput.onblur=function(){
    
    animate(sousuolabox,{height:0},500,Tween.Linear);
  }


//搜索下拉2
  var sousuoinputone=$('.sousuoinput')[1];
  var sousuolaboxone=$('.sousuolabox')[1];
  var sousuolaone=$(".sousuola")[1];

  sousuoinputone.onfocus=function(){
    var sousuoH=sousuola.offsetHeight;
    
    animate(sousuolaboxone,{height:sousuoH},500,Tween.Linear);

  }
  sousuoinputone.onblur=function(){
    
    animate(sousuolaboxone,{height:0},500,Tween.Linear);
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
//图片按需加载

//banner列表
var liebiaobox=$('.liebiaobox');
var liebiao=$('.liebiao');
var zhuzuo=$('.zhu-zuo-1');

  for(var i=0;i<zhuzuo.length;i++){
  zhuzuo[i].index=i;
  zhuzuo[i].onmouseover=function(){
    var aa=$('a',zhuzuo[this.index]);
    for(var j=0;j<aa.length;j++){
      aa[j].style.cssText='color:#666';
    }
    var liebiaoW=liebiao[0].offsetWidth;
    animate(liebiaobox[this.index],{width:liebiaoW},100,Tween.Linear);
  }
  zhuzuo[i].onmouseout=function(){
    var aa=$('a',zhuzuo[this.index]);
    for(var j=0;j<aa.length;j++){
      aa[j].style.cssText='color:white';
    }
    animate(liebiaobox[this.index],{width:0},300,Tween.Linear);
  }
 }






//选项卡
 var F1zhong=$(".F1zhong");
 var f1zhong=$(".f1-zhong");
  function xuan(f1zhong,F1zhong){
    for(var i=0;i<f1zhong.length;i++){
    f1zhong[i].index=i;
    f1zhong[i].onclick=function(){
     for(var j=0;j<F1zhong.length;j++){
      f1zhong[j].style.cssText="border-bottom:1px solid #ff6b80;color:#aaa;font-weight:bold;";
        F1zhong[j].style.zIndex=1;
     }
        f1zhong[this.index].style.cssText="border-bottom:2px solid #ff6b80;color:#666;font-weight:bold;"
        F1zhong[this.index].style.zIndex=3;
    }
   }
  }
  xuan(f1zhong,F1zhong);



//下拉搜索
  var yingcangbox=$('.yingcangbox')[0];
  var yingcang=$('.yingcang')[0];
  var zhuzuobox=$('.zhuzuobox')[0];
  var dazhuzuo=$('.zhu-zuo')[0];
  var yingcangleft=$('.yingcangleft')[0]; 
  yingcangleft.onmouseover=function(){
    var dazhuzuoH=dazhuzuo.offsetHeight;
    animate(zhuzuobox,{height:dazhuzuoH},500,Tween.Linear,function(){
     zhuzuobox.style.cssText='overflow:visible;';
     for(var i=0;i<zhuzuo.length;i++){
  zhuzuo[i].index=i;
  zhuzuo[i].onmouseover=function(){
    var aa=$('a',zhuzuo[this.index]);
    for(var j=0;j<aa.length;j++){
      aa[j].style.cssText='color:#666';
    }
    var liebiaoW=liebiao[0].offsetWidth;
    animate(liebiaobox[this.index],{width:liebiaoW},100,Tween.Linear);
  }
  zhuzuo[i].onmouseout=function(){
    var aa=$('a',zhuzuo[this.index]);
    for(var j=0;j<aa.length;j++){
      aa[j].style.cssText='color:white';
    }
    animate(liebiaobox[this.index],{width:0},300,Tween.Linear);
  }
 }
    }); 
  }

   
  yingcangleft.onmouseout=function(){
    animate(zhuzuobox,{height:0},500,Tween.Linear,function(){
    zhuzuobox.style.cssText='overflow:hidden;'; 
    });
  }
 //左栏滑动
    var guzuobox=$(".guzuobox")[0];
    var guzuo=$(".guzuo");
    var lou=$(".F1box");
    window.onscroll=function(){
       var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      

        //图片按需加载
        
     for(var i=0;i<lou.length;i++){
        if(lou[i].offsetTop<obj.scrollTop+ch){
      var imgs=$("img",lou[i]);
      for(var j=0;j<imgs.length;j++){
        imgs[j].src=imgs[j].getAttribute("aa");
      }
    }
  }
        

       //图片按需加载

       guyouqian[7].onclick=function(){
        animate(obj,{scrollTop:0},500,Tween.Linear);
       }
       var flag=true;
       var flag2=true;
       if(obj.scrollTop>=1056){
            if(flag){
              animate(yingcangbox,{top:0},500,Tween.Linear);
              flag=false;
              flag2=true;
            }
          }else{
            if(flag2){
            animate(yingcangbox,{top:-60},500,Tween.Linear);
            flag=true;
            flag2=false;
            }
          }
       


       if(obj.scrollTop>924){
          guzuobox.style.display="block";
       }else{
         guzuobox.style.display="none";
       }

       for(var i=0;i<lou.length;i++){
       	 
       	 if(obj.scrollTop>lou[i].offsetTop-80){
       	  for(var j=0;j<lou.length;j++){
       	  guzuo[j].style.background="#ccc";
       	    }
       	  guzuo[i].style.background="#393838";
       	 }
          guzuo[i].index=i;
         guzuo[i].onclick=function(){
         	animate(obj,{scrollTop:lou[this.index].offsetTop},200,Tween.Linear);
         }
       }

          

    }


//右栏固定
    var guyou=$(".guyou");
    var guyouqianbox=$(".guyouqianbox");
    var guyouqian=$(".guyouqian");

    for(var i=0;i<guyou.length;i++){
       guyou[i].index=i;
       guyou[i].onmouseover=function(){
       	var w=guyouqian[this.index].offsetWidth;
       	animate(guyouqianbox[this.index],{width:w},200,Tween.Linear);
       }
       guyou[i].onmouseout=function(){
       	 animate(guyouqianbox[this.index],{width:0},200,Tween.Linear);
       }
    }



    var f11zhongbox=$(".f11zhongbox")[0];
    var f11zhong=$(".f11zhong");
    var dianzuo=$(".dianzuo")[0];
    var dianyou=$(".dianyou")[0];
    var dianhua=$(".dianhua");

    f11zhongbox.onmouseover=function(){
     dianzuo.style.display="block";
     dianyou.style.display="block";
    }
    f11zhongbox.onmouseout=function(){
     dianzuo.style.display="none";
     dianyou.style.display="none";
    }

    var f11hua=$(".f11hua")[0];
    var f11zhong=$(".f11zhong");
    var len=f11zhong.length;
    var zhongw=f11zhong[0].offsetWidth;
    for(var i=0;i<f11zhong.length;i++){
       if(i!=0){
         f11zhong[i].style.left=zhongw+'px';
       }
    }
    var now=0;
    var next=0; 
    var flag=true;
    for(var i=0;i<dianhua.length;i++){
      dianhua[i].index=i;

      dianhua[i].onmouseover=function(){
      	if(now==this.index||!flag){
            return;
   		}
   		 flag=false;
   		if(now<this.index){
   			f11zhong[this.index].style.left=zhongw+"px";
   			animate(f11zhong[now],{left:-zhongw},800);
   		}else{
   			f11zhong[this.index].style.left=-zhongw+"px";
   			animate(f11zhong[now],{left:zhongw},800);
   		}
   		animate(f11zhong[this.index],{left:0},800,Tween.Linear,function(){
   			flag=true;
   		})

   		 dianhua[now].style.background="white";
         dianhua[this.index].style.background="#ffaa00";
   		 now=this.index;
   		 
      }     
    }

     dianzuo.onclick=function(){
     	if(!flag){
           return;
          }
        flag=false;
      	next--;
      	if(next<0){
      		next=len-1;
      	}
      	f11zhong[next].style.left=-zhongw+'px';
      	animate(f11zhong[now],{left:zhongw},800);
        animate(f11zhong[next],{left:0},800,Tween.Linear,function(){
        	flag=true;
        });
        dianhua[now].style.background="white";
   		dianhua[next].style.background="#ffaa00";
        now=next;
      }
     
     dianyou.onclick=function(){ 
     	if(!flag){
          return;
         }
        flag=false;
    	next++;
      	if(next==len){
      	   next=0;
      	}
      	f11zhong[next].style.left=zhongw+'px';
      	animate(f11zhong[now],{left:-zhongw},800);
      	animate(f11zhong[next],{left:0},800,Tween.Linear,function(){
      		flag=true;
      	});
      	dianhua[now].style.background="white";
   		dianhua[next].style.background="#ffaa00";
      	now=next;
     }




     //banner轮播
     var imgtu=$(".imgtu");
     var zhubox=$(".zhubox")[0];
     var classlist=$('.zhu-zhong-2');
     var bannerleft=$('.bannerleft')[0];
     var bannerright=$('.bannerright')[0];
     var bannerbox=$(".zhu-zhong")[0];
     var bgyanse=["#5a21bc","#fe7cde","#f53d9f","#e90044","#fa25a1","#e52822","#e7193d","#f23e3f","#7000bf","#fd0a42","#ff7a23"];
   
     for(var i=0;i<classlist.length;i++){
       classlist[i].index=i;
      classlist[i].onmouseover=function(){
       
        for(var j=0;j<imgtu.length;j++){
          classlist[j].style.cssText='opacity:0.5';
          imgtu[j].style.zIndex=1;
        }
         
         classlist[this.index].style.cssText='opacity:0.8';
         imgtu[this.index].style.zIndex=5;
         zhubox.style.background=bgyanse[this.index];
      }
      classlist[i].onmouseout=function(){
        
        num=this.index+1;
      } 
     }
      var t=setInterval(lunbo,2000);
      var num=0;
      function lunbo(){
        if(num==11){
          num=0;
        }
      for(var k=0;k<imgtu.length;k++){
        imgtu[k].style.zIndex=1;
        classlist[k].style.cssText='opacity:0.5';
      }
        imgtu[num].style.zIndex=5;
         classlist[num].style.cssText='opacity:0.8';
        zhubox.style.background=bgyanse[num];
        num++;
      }
     bannerbox.onmouseover=function(){
        clearInterval(t);
        bannerright.style.display="block";
        bannerleft.style.display="block";
        
      }
      bannerbox.onmouseout=function(){
        bannerright.style.display="none";
        bannerleft.style.display="none";
        t=setInterval(lunbo,2000);
      }
    
      bannerright.onclick=function(){
          for(var i=0;i<classlist.length;i++){
            if(getStyle(imgtu[i],"zIndex")=='5'){
              var srr=i;
            }
          }
          for(var j=0;j<classlist.length;j++){
              classlist[j].style.cssText='opacity:0.5';
              imgtu[j].style.zIndex=1;
              } 
             if(srr==10){
              srr=-1;
             }
             classlist[srr+1].style.cssText='opacity:0.8';
             imgtu[srr+1].style.zIndex=5;
             zhubox.style.background=bgyanse[srr+1];
     }
     bannerleft.onclick=function(){
        for(var i=0;i<classlist.length;i++){
            if(getStyle(imgtu[i],"zIndex")=='5'){
              var srr=i;
            }
          }
          for(var j=0;j<classlist.length;j++){
              classlist[j].style.cssText='opacity:0.5';
              imgtu[j].style.zIndex=1;
            } 
            if(srr==0){
              srr=11;
            }
            classlist[srr-1].style.cssText='opacity:0.8';
             imgtu[srr-1].style.zIndex=5;
             zhubox.style.background=bgyanse[srr-1];
     }
     
    
 }