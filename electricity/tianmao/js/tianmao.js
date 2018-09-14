//获取类名
  //IE下不能获取类名解决兼容问题
  //classname:类父容器名要加""
 //father:父容器，表示从哪个父容器来获取子容器
window.onload=function(){
 var obj=document.documentElement.scrollTop?document.documentElement:document.body;
//obj.scrollTop=0;

 function getClass(classname,father){
    var obj=father||document;
    if(obj.getElementsByClassName){
      return obj.getElementsByClassName(classname);
    }else{
      var all=obj.getElementsByTagName("*");
      var arr=[];
      for(var i=0;i<all.length;i++){
        if(checkClass(all[i].className,classname)){
          arr.push(all[i]);
        }
      }
       return arr;
    }
  }
     function checkClass(str,classname){
      var newstr=str.split(" ");
      for(var i=0;i<newstr.length;i++){
        if(newstr[i]==classname){
          return true;
        }
      }
        return false;
     }
//获取类名


//图片按需加载
var zong=$(".zong")[0];
var tupians=$("img",zong);
var songsubox=$(".songsubox")[0];
var daohanbox=$(".daohanbox");
for(var i=0;i<tupians.length;i++){
   var val=tupians[i].getAttribute("src");
   tupians[i].setAttribute("aa",val);
   tupians[i].setAttribute("src","");
}
//图片按需加载
var ch=document.documentElement.clientHeight;







//国际大牌，时尚潮牌选项卡
var chaopai=getClass("chaopai");
var songsu=getClass("songsu-zhong1");
for(var i=0;i<chaopai.length;i++){
    chaopai[i].index=i;
    chaopai[i].onclick=function(){
      for(var j=0;j<songsu.length;j++){
      	songsu[j].style.display="none";
      	chaopai[j].style.fontWeight="normal";
      	chaopai[j].style.textDecoration="none"
      }
       var suotu=$("img",songsu[this.index]);
        for(var j=0;j<suotu.length;j++){
          suotu[j].src=tupianku[j];
        }
        newtuku=tupianku.sort(randomsort); 
       songsu[this.index].style.display="block";
       chaopai[this.index].style.fontWeight="bold";
      chaopai[this.index].style.textDecoration="underline";
    }
 }
//国际大牌，时尚潮牌选项卡


//换一批
 var huanyipi=$(".huanyipi")[0];
 var tupianku=[];
 for(var i=1;i<=34;i++){
   tupianku.push("img/a"+i+".jpg");
 }
 function randomsort(a,b){
     return Math.random()>0.5 ? -1:1;
 }

  var newtuku=tupianku.sort(randomsort);

  huanyipi.onclick=function(){
    for(var i=0;i<songsu.length;i++){
      if(songsu[i].style.display="block"){
        var suotu=$("img",songsu[i]);
        for(var j=0;j<suotu.length;j++){
          suotu[j].src=tupianku[j];
        }
         newtuku=tupianku.sort(randomsort); 
      }
    }
  }
//换一批



//banner轮播
var celanbox=$(".celanbox")[0];
 var img=$(".datu");
 var list=$(".yuan");
 var yanse=["#64c9a7","#b90af9","#dcdcdc","#fff701","#dcdcdc"];
       for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onmouseover=function(){
          clearInterval(t);
          for(var j=0;j<img.length;j++){
           img[j].style.zIndex=2;//zIndex表示层数，2<3,数字越大越在上面
           list[j].style.background="#333";
          }
          img[this.index].style.zIndex=3;
           celanbox.style.background=yanse[this.index];
          list[this.index].style.background="#ccc";
        }
        list[i].onmouseout=function(){
          t=setInterval(aa,2000);
          num=this.index+1;//直接移到下一张图
        }
       }

       var t=setInterval(aa,2000);
       var num=1;
       function aa(){
        if(num==5){
          num=0;
        }
        for(var k=0;k<img.length;k++){
          img[k].style.zIndex=2;
          list[k].style.background="#333";
        }
        img[num].style.zIndex=4;
        list[num].style.background="#ccc";
        celanbox.style.background=yanse[num];
        num++;
       }
  //banner轮播
  //
  //左边列表轮播
     var imgtwo=$(".datu1");
     var celanzuoli=$(".celan-zuoli");
     var bgyanse=["#b90af9","#dcdcdc","#fff701","#dcdcdc","#64c9a7","#b90af9","#dcdcdc","#fff701","#dcdcdc","#64c9a7","#b90af9","#dcdcdc","#fff701","#dcdcdc","#64c9a7","#b90af9"]
  


//漂浮搜索栏
  var gunlan=$(".gunlan")[0];
    var flag=true;//滚动条下拉时，第一次开，这个开关要保证每次下拉时开关都是开着的 
    var flag2=true; //滚动条上拉的开关
window.onscroll=function(){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var scrollTop=obj.scrollTop;
    // document.title=scrollTop;
    guyouyou[9].onclick=function(){
      animate(obj,{scrollTop:0},500,Tween.Linear);

    }
    // 
//图片按需加载
  for(var i=0;i<lou.length;i++){
    if(lou[i].offsetTop<obj.scrollTop+ch){
      var imgs=$("img",lou[i]);
      for(var j=0;j<imgs.length;j++){
        imgs[j].src=imgs[j].getAttribute("aa");
      }
    }
  }
    if(songsubox.offsetTop<obj.scrollTop+ch){
      var imgs=$("img",songsubox);
      for(var j=0;j<imgs.length;j++){
      imgs[j].src=imgs[j].getAttribute("aa");
      }
    }

    for(var i=0;i<daohanbox.length;i++){
    if(daohanbox[i].offsetTop<obj.scrollTop+ch){
      var imgs=$("img",daohanbox[i]);
      for(var j=0;j<imgs.length;j++){
        imgs[j].src=imgs[j].getAttribute("aa");
      }
    }
  }
//图片按需加载



     if(scrollTop>=714){
      if(flag){
        animate(gunlan,{top:0},500,Tween.Linear);
        flag=false;//关掉开关，往上拉时在打开，保证下次能出现
        flag2=true;
      } 
     }else{
      if(flag2){
        animate(gunlan,{top:-60},500,Tween.Linear); 
        flag=true; //打开开关，保证下一次能出现
        flag2=false;
      } 
     }
//左边的侧栏选择框
  //滚栏对应列表
    if(scrollTop>=1056){
    guzuobox.style.display="block";
   }else{
    guzuobox.style.display="none";
       }
    for(var i=0;i<guzuo.length;i++){
    lou[i].ot=lou[i].offsetTop;
    if(scrollTop>(lou[i].ot-150)){
    for(var j=0;j<guzuo.length;j++){
     guzuo[j].style.background=""; 
     guzuo[j].innerHTML="";
    }
     guzuo[i].style.background="red";
     guzuo[i].innerHTML=i+1;

   }
  }
//滚栏对应列表
//
//点击滑动楼层
   for(var k=0;k<guzuo.length;k++){
    guzuo[k].index=k;
    guzuo[k].onclick=function(){
      animate(obj,{scrollTop:(lou[this.index].offsetTop-80)},500,Tween.Linear);
    }
   }
//点击滑动楼层
}

//漂浮搜索栏


//左边的侧栏选择框
//滚栏对应列表
var guzuobox=$(".guzuobox")[0];
var lou=$(".nvzhuangbox");
var guzuo=$(".guzuo");
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
//函数在上一个window.onscroll中；
/*window.onscroll=function(){
  var scrollTop=obj.scrollTop;
  if(scrollTop>=1056){
    guzuobox.style.display="block";
  }else{
    guzuobox.style.display="none";
  }
  for(var i=0;i<guzuo.length;i++){
   lou[i].ot=lou[i].offsetTop;
   if(scrollTop>(lou[i].ot-100)){
    for(var j=0;j<guzuo.length;j++){
     guzuo[j].style.background=""; 
     guzuo[j].innerHTML="";
    }
     guzuo[i].style.background="red";
     guzuo[i].innerHTML=i+1;

   }
  }
}*/
/*//点击滑动楼层
   for(var k=0;k<guzuo.length;k++){
    guzuo[k].index=k;
    guzuo[k].onclick=function(){
      animate(obj,{scrollTop:(lou[this.index].offsetTop-80)},500,Tween.Linear);
    }
   }*/
//点击滑动楼层
//左边的侧栏选择框


//楼层左侧点击滑动
var nvzhuangbao=$(".nvzhuangbao");
var nvzhuangleft=getClass("nvzhuangleft");
var nvzhuangright=getClass("nvzhuangright");
for(var i=0;i<nvzhuangbao.length;i++){
  nvzhuangleft[i].index=i;
  nvzhuangleft[i].onclick=function(){  
    var bb=this.index;
    animate(nvzhuangbao[this.index],{left:-90},1000,Tween.Linear,
      function(){
     var first=getChilds(nvzhuangbao[bb])[0]; 
      nvzhuangbao[bb].appendChild(first);
      nvzhuangbao[bb].style.left=0;
    }) 
  }  
}
  for(var j=0;j<nvzhuangbao.length;j++){
   nvzhuangright[j].index=j;
  nvzhuangright[j].onclick=function(){
    var last=getLast(nvzhuangbao[this.index]);
    nvzhuangbao[this.index].insertBefore(last,getFirst(nvzhuangbao[this.index]));
    nvzhuangbao[this.index].style.left="-90px";
    animate(nvzhuangbao[this.index],{left:0},1000,Tween.Linear);
   }
  }
//楼层左侧点击滑动




//下拉菜单1
 var shoucangbox=$(".shoucangbox")[0];
 var shoucang=$(".shoucang");
 var taobao=$(".dinglanli")[1];
 
 taobao.onmouseover=function(){
  var h=shoucang[0].offsetHeight;
  animate(shoucangbox,{height:h*shoucang.length},200,Tween.Linear);
 } 
 taobao.onmouseout=function(){
  animate(shoucangbox,{height:0},200,Tween.Linear);
 } 
//下拉菜单2
var cangbox=$(".cangbox")[0];
var cang=$(".cang");
var jia=$(".dinglanli")[4];
jia.onmouseover=function(){
  var h=cang[0].offsetHeight;
  animate(cangbox,{height:h*cang.length},200,Tween.Linear);
}
jia.onmouseout=function(){
  animate(cangbox,{height:0},200,Tween.Linear);
}
//下拉菜单3
var shangjiabox=$(".shangjiabox")[0];
var shangjia=$(".shangjia");
var zhongxin=$(".dinglanli")[7];
zhongxin.onmouseover=function(){
  var h=shangjia[0].offsetHeight;
  animate(shangjiabox,{height:h*shangjia.length},200,Tween.Linear); 
}
zhongxin.onmouseout=function(){
  animate(shangjiabox,{height:0},200,Tween.Linear);
}
//下拉菜单4
var daolan=$(".daolan");
var daolanbox=$(".daolanbox")[0];
var daoquan=$(".dinglanli")[8];
daoquan.onmouseover=function(){
  var h=daolan[0].offsetHeight;
  animate(daolanbox,{height:h*daolan.length},200,Tween.Linear);
}
daoquan.onmouseout=function(){
  animate(daolanbox,{height:0},200,Tween.Linear);
}



//左拉列表
var meinv=$(".meinv");
var celanzuotwo=$(".celan-zuo-two");
var celanzuoli=$(".celan-zuoli");
var getse;
 for(var i=0;i<celanzuoli.length;i++){
  celanzuoli[i].index=i;
  celanzuoli[i].onmouseover=function(){
    for(var j=0;j<meinv.length;j++){
      meinv[j].style.display="none"; 
    }
    meinv[this.index].style.display="block";
    if(this.index>0){
            clearInterval(t);
            imgtwo[this.index-1].style.display="block";          
            getse=celanbox.style.background;
            celanbox.style.background=bgyanse[this.index-1];
      }
    
      celanzuotwo[this.index].style.display="block";
      var bb=this.index;
      celanzuotwo[bb].onmouseover=function(){
       celanzuotwo[bb].style.display="block";
      }
     celanzuoli[bb].onmouseout=function(){
      celanzuotwo[bb].style.display="none";
      if(bb>0){
            t=setInterval(aa,2000);
            meinv[bb].style.display="block";
            imgtwo[bb-1].style.display="none";
            celanbox.style.background=getse;
      }
    }
     celanzuotwo[bb].onmouseout=function(){
       celanzuotwo[bb].style.display="none";
     } 
  }
    
 }

//固定右边
var guyouyou=$(".guyouyou");
var guyou=$(".guyou");
var guyouyoubox=$(".guyouyoubox");
 for(var i=0;i<guyou.length;i++){
   guyou[i].index=i;
  guyou[i].onmouseover=function(){
    var w=getStyle(guyouyou[this.index],"width");
    animate(guyouyoubox[this.index],{width:w},200,Tween.Linear);
  }
  guyou[i].onmouseout=function(){
    
    animate(guyouyoubox[this.index],{width:0},200,Tween.Linear);
  }
 }




}




