window.onload=function(){
	var container=$(".container")[0];
	var clientH=document.documentElement.clientHeight;
	var now=0;
	var next=0;
	var flag=true;
	var lis=$("li");
	var floor=$(".floor");
	floor[0].style.top=0;
	mouseWheel(window,function(){
      if(!flag){
        return
      }
      flag=false;
      next--;
      if(next<0){
      	next=3
      }
      floor[now].style.zIndex=1;
      floor[next].style.cssText="z-index:10;top:-100%";
      lis[now].className="";
   	  lis[next].className="hot";
      animate(floor[next],{top:0},800,Tween.Linear,function(){
      	floor[now].style.top="-100%";
      	now=next;
      	flag=true;
      })
	},function(){
       if(!flag){
       return;
      }
    flag=false;
   	next++;
   	if(next==floor.length){
   		next=0;
   	}
   	floor[now].style.zIndex=1;
   	floor[next].style.zIndex=10;
   	lis[now].className="";
   	lis[next].className="hot";  
   	animate(floor[next],{top:0},800,Tween.Linear,function(){
      floor[now].style.top="100%";
      now=next;
      flag=true;   
    }); 
	})
	for(var i=0;i<lis.length;i++){
	  lis[i].index=i;
	  lis[i].onmouseover=function(){
	  	if(!flag||this.index==now){
            return;
	  	}
	  	
	  	if(this.index>now){
          floor[this.index].style.zIndex=10;
	  	}else{
          floor[this.index].style.cssText="z-index:10;top:-100%";
	  	}
	  	  flag=false;
	  	  lis[now].className="";
	  	  lis[this.index].className="hot";
	  	floor[now].style.zIndex=1;
	  	var that=this;
	  	animate(floor[this.index],{top:0},800,Tween.Linear,function(){
	  		flag=true;
	  		floor[now].style.top="100%";
	  		now=that.index;
	  	})
 	
	  }
	}


   var box=$("#box");
   var guan=$(".guan")[0];
   var one=floor[0];
     
//漂浮窗的函数
//div表示漂浮的div  close表示关闭开关
//spx表示沿X轴的速度 spy表示沿Y轴的速度
   function floatwindow(div,close,spx,spy,big){
  var t=setInterval(move,20);
   var sheepx=spx||5;//速度x
   var sheepy=spy||5;//速度y
   var sheight=div.offsetHeight;//自身高度
   var swidth=div.offsetWidth;//自身宽度
   var cwidth=big.offsetWidth;
   var cheight=big.offsetHeight;
   function move(){
   var selfleft=div.offsetLeft;//自身的左边距
   var selfTop=div.offsetTop;//自身的上边距
   var newleft=selfleft+sheepx;//加速之后的左边距
   var newtop=selfTop+sheepy;//加速之后的上边距
   if(newtop>=(cheight-sheight)){//触碰到下边距
      newtop=cheight-sheight;//上边距的最大值
      sheepy*=-1;//反方向加速
    }
    if(newtop<=0){//触碰到上边距
      newtop=0;//
       sheepy*=-1;//反向加速
    }
    if(newleft>=(cwidth-swidth)){//触碰到右边距
      newleft=cwidth-swidth;
      sheepx*=-1;
    }
    if(newleft<=0){//触碰到左边距
      newleft=0;
      sheepx*=-1;
    }
   div.style.left=newleft+"px";
   div.style.top=newtop+"px";
   }
   div.onmouseover=function(){
    clearInterval(t);
   }
  div.onmouseout=function(){
    t=setInterval(move,20);
   }
   close.onclick=function(){
    div.style.display="none";
   }
    
}
 floatwindow(box,guan,5,5,one);
}