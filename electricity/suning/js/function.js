  //获取类名
  //IE下不能获取类名解决兼容问题
  //classname:类父容器名要加""
 //father:父容器，表示从哪个父容器来获取子容器
  function getClass(classname,father){
    var obj=father||document;
    //如果father存在就赋值给声明的obj。如果不存在就将document赋值给声明的obj(声明obj表示从哪个对象获取)
    //两个都为真时，会返回第一个函数的值即father；
    if(obj.getElementsByClassName){//为真时表示是现在浏览器
      return obj.getElementsByClassName(classname);
    }else{//为假时表示是IE
      var all=obj.getElementsByTagName("*");
      //"*"表示所有的 即获取所有的标签元素
      var arr=[];
      for(var i=0;i<all.length;i++){
        if(checkClass(all[i].className,classname)){
          arr.push(all[i]);
        }
      }
       return arr;//数组返回表示找到了
    }
  }
     function checkClass(str,classname){
    //checkClass检测一个元素是否有我们想要找的类名
      var newstr=str.split(" ");
    //将元素的类名（字符串）以空格分隔成数组
      for(var i=0;i<newstr.length;i++){
  //遍历这个数组，拿数组中的每个值与classname比较
        if(newstr[i]==classname){
          return true;//如果相同则表示这个函数返回真，return为终止
        }
      }
        return false;
      //等这个数组遍历完以后还没有找到相同的类名，则返回假
     }




  //IE获取文本innerText和火狐获取文本textContent
  //obj:从哪个对象例获取的文本
  //val：表示要设置的文本
  //FF：obj.textContent;
  //IE: obj.innerText;
      function getText(obj,val){//obj从哪个对象例来获取纯文本
     if(val!=undefined){//设置的文本存在
       if(obj.textContent!=undefined){//为火狐浏览器遵从W3c
        //if(obj.textContent||obj.textContent==""){
       obj.textContent=val;
          }else{//为IE下获取文本
       obj.innerText=val;
               }
       }else{
        if(obj.textContent){//为火狐浏览器遵从W3c
        return obj.textContent;
            }else{//为IE下获取文本
        return obj.innerText;
                 }
            }
     
     }



//兼容问题
//对象.currentStyle.属性 IE 用来获得实际的样式属性
//getComputedStyle(对象,null).属性 FF 用来获得实际的样式属性
//只能获取不能设置
     function getStyle(obj,attr){
       if(obj.currentStyle){//IE下获取对象样式属性
          return (obj.currentStyle[attr]);
       }else{//FF下获取对象样式
         return (window.getComputedStyle(obj,null)[attr]);
       }
   } 
//含有获取对象样式属性的兼容问题
//对象.["属性"];
/* document.write(getStyle(box,"color"));
  function getStyle(obj,arr){
    if(obj.currentStyle){
          return obj.currentStyle[arr];
    }else{
         return window.getComputedStyle(obj,null)[arr];
    }

  }
*/







//$相当于document.getElements
 //$(".box")[0];获取类名
 //$("#box");  获取id名
 //$("div")[0]; 从TagName中获取
function $(selector,father){
  var obj=father||document;
  if(typeof selector=="string"){
    selector=selector.replace(/^\s*|\s*$/g,"");//找出字符串前后的空格 
    //\s*|\s*表示前面的空格和后面的空格  /^表示开始 $/g表示结束
    if(selector.charAt(0)=="."){//获取类名
      return getClass(selector.slice(1),obj);
    }else if(selector.charAt(0)=="#"){//获取id名
      return obj.getElementById(selector.slice(1));
    }else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
    //获取标签名即TagName
    // 正则运算：/^表示开始  $/表示结束 
    // a-z表示首字母从a到z  [1-10]表示从1到10 例：h1,h2,h3,h4,h5,h6
      return obj.getElementsByTagName(selector);
    }
  }else if(typeof selector=="function"){//判断其为一个函数

    window.onload=function(){
      selector();
    }//相当于window.onload=function(){}
    /* 例如：$(function(){
      var box=$("  div  ")[0];
      alert(getStyle(box).height);
    })*/
  }
}







//获取对象的子节点
//a:获取元素节点  b：获取元素+文本节点
      function getChilds(father,type){ 
      var type=type||"a";//type没有赋值时默认为a，即第二个参数省略时，默认只获取元素节点
       var childs=father.childNodes;
       var child=[];
       for(var i=0;i<childs.length;i++){
        if(type=="a"){
          if(childs[i].nodeType==1){
          child.push(childs[i]);//获取对象元素子节点保存在数组中
         }
        }else if(type=="b"){//获取元素+文本节点
          if(childs[i].nodeType==1||(childs[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""&&childs[i].nodeType!=8)){
            //获取元素节点||通过nodeValue获取文本内容并去掉空格和注释内容
            child.push(childs[i]);
         }
        }       
       }
        return child;
      }
       //var all=getChilds(box);
      // alert(all.length);
      //document.write(all.length);

 //获取他的第一个节点
   function getFirst(father){
     return getChilds(father)[0]; 
   }
   //例：
       //var first=getFirst(box);
       //first.style.background="blue";
 //获取他的最后一个节点
  function getLast(father){
    return getChilds(father)[getChilds(father).length-1]
  }
 //获取指定的子节点
function getNum(father,num){
  return  getChilds(father)[num];
     }
  //例：
    /*var num=getNum(box,2);
    num.style.background="black";*/
//获得下一个兄弟节点
  function getDown(obj){
     var next=obj.nextSibling;
     //如果为最后一个元素节点，FF和IE下能够识别后面的空格
     while(next.nodeType==3||next.nodeType==8){
            next=next.nextSibling;
         if(next==null){
            return false;
         }
     }
     return next;
  }
  //例：
    // alert(getDown(box).nodeName);
 
 //获取他上一个兄弟的节点
function getUp(obj){
     var up=obj.previousSibling;
     if(up==null){//假如是第一个元素，IE下无法识别他前面的空格
            return false;
         }
     while(up.nodeType==3||up.nodeType==8){
      //FF中为第一个元素时，他前面的空格可以看作文本节点
            up=up.nextSibling;
         if(up==null){
            return false;
            }      
     }
     return up;
  }
//获取对象的子节点




//插入到某个对象之后
//newobj：要插入的对象    obj：某个的对象
/*   var obj=new Object();
   Object.prototype.insertAfter=function(){

   }
   obj.insertAfter=function(){

   }*/
  //对象共有的方法一般是加在原型上的，而原型只能给构造函数添加，所以共有的方法是添加到对象的构造函数原型上的。
  //this：指的是最终调用这个方法的对象，而这个对象是构造函数new出来的对象
  Object.prototype.insertAfter=function insertAfter(newobj,obj){
    var down=getDown(obj);//getDown是获得他下一个兄弟节点，下一个节点的前面就是当前节点的后面
    if(down){
       this.insertBefore(newobj,down);//下一个对象之前
     }else{//如果是最后一个对象下一个兄弟节点不存在
        this.appendChild(newobj);//直接追加到父容器的最后面
     }
  }
  //插入到某个对象之后





//漂浮窗的函数
//div表示漂浮的div  close表示关闭开关
//spx表示沿X轴的速度 spy表示沿Y轴的速度
   function floatwindow(div,close,spx,spy){
  var t=setInterval(move,20);
   var sheepx=spx||5;//速度x
   var sheepy=spy||5;//速度y
   var sheight=div.offsetHeight;//自身高度
   var swidth=div.offsetWidth;//自身宽度
   var cwidth=document.documentElement.clientWidth;//窗口宽度
   var cheight=document.documentElement.clientHeight;//窗口高度
   window.onresize=function(){//获取窗口大小变化
      cwidth=document.documentElement.clientWidth;//窗口宽度
      cheight=document.documentElement.clientHeight;//窗口高度
   }
  // windo.onload:文档加载完成事件
  // window.scroll:窗口滚动事件
  // window.resize:窗口改变事件
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
//漂浮窗

/*********************************************************/

 //鼠标滚动事件对象兼容函数
   function mouseWheel(obj,upfun,downfun){
    //添加滚轮事件的兼容问题
     if(obj.attachEvent){
      obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
   }else if(obj.addEventListener){
      obj.addEventListener("mousewheel",scrollFn,false);
     //chrome,safari -webkitdocument.
     obj.addEventListener("DOMMouseScroll",scrollFn,false);
   //firefox -moz-  
       }

      function scrollFn(e){
        var ev=e||window.event;
        if(ev.detail==-3||ev.wheelDelta==120){//FF 滚轮往上 -3；IE，谷歌 滚轮往上 120 
          if(upfun){
            upfun();
          }
        }
        if(ev.detail==3||ev.wheelDelta==-120){//FF滚轮往下 3;IE，谷歌 滚轮往下 -120
          if(downfun){
            downfun();
          }
        }
            
      //事件对象阻止浏览器默认行为
      if (ev.preventDefault){
        ev.preventDefault(); //阻止默认浏览器动作(W3C)
        }else{
        ev.returnValue = false;//IE中阻止函数器默认动作的方式
        }

      }  
   }

//例子：mouseWheel(document,function(){},function(){})
/*       mouseWheel(document,function(){
         var arr=10;
         var height=box.offsetHeight;
         var width=box.offsetWidth;
         height=height+arr;
         width=width+arr;
         if(height>300){
          height=300;
          width=300;
         }
         box.style.height=height+"px";
         box.style.width=width+"px";
       },function(){
         var arr=10;
         var height=box.offsetHeight;
         var width=box.offsetWidth;
         height=height-arr;
         width=width-arr;
         if(height<100){
           height=100;
           width=100;
         }
         box.style.height=height+"px";
         box.style.width=width+"px";
       })*/
/*********************************************************/




//同一个事件添加多个处理程序的兼容函数
   function addEvent(obj,event,fun){
     if(obj.addEventListener){//FF下添加
       obj.addEventListener(event,fun,false);
     }else{
       obj.attachEvent("on"+event,fun);
      //IE下的添加
     }
   }


//同一个事件移出多个处理程序的兼容函数
    function removeEvent(obj,event,fun){
     if(obj.removeEventListener){//FF下添加
        return obj.removeEventListener(event,fun,false);
     }else{//IE下添加
      return obj.detachEvent("on"+event,fun);
     }
   }



/*********************************************************/


//hover=onmouseover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
//hover=onmouseover
 */
/* obj      要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun    鼠标移除需要处理的函数*/

function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
/*********************************************************/

//获取事件对象的兼容函数
 function getEvent (e) {
      return e||window.event;
 }


//阻止事件流（事件对象的操作）的兼容函数
 function stopEvent(obj){
   if(obj.stopProgation){
     obj.stopProgation();//FF
   }else{
     obj.cancelBubble=true;//IE
   }
 }

//获得目标事件源的对象
//IE： 事件对象.srcElement
//FF: 事件对象.target

//事件对象阻止浏览器默认行为
function stopClient(obj){
  if (obj.preventDefault ){
      obj.preventDefault(); //阻止默认浏览器动作(W3C)
   }else{
      obj.returnValue = false;//IE中阻止函数器默认动作的
   }
}
/*******************************************************/



    //动画算法
  /*
        Linear：无缓动效果(匀速运动)；
      Quad：二次方的缓动；
      Cubic：三次方的缓动
      Quartic：四次方的缓动；
      Quintic：五次方的缓动；
      Sinusoidal：正弦曲线的缓动；
      Exponential：指数曲线的缓动；
      Circular：圆形曲线的缓动；
      Elastic：指数衰减的正弦曲线缓动；
      Back：超过范围的三次方缓动）；
      Bounce：指数衰减的反弹缓动。
      

      每个效果都分三个缓动方式（方法），分别是：
      easeIn：从0开始加速的运动；
      easeOut：减速到0的运动；
      easeInOut：前半段从0开始加速，后半段减速到0的运动。
      


      函数的四个参数分别代表：
        t--- current time（当前时间）；0 +=60   
        b--- beginning value（初始值）；100  
        c--- change in value（变化量）；500-100
        d---duration（持续时间）  5000
      Tween.Quad.easeInt()
        运算的结果就是当前的运动路程。
       整理翻译:Code宝宝
       翻译或解释不对的地方希望各位修正、批评。
       50
          */
      
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }


   function animate (obj,attrObj,dur,fun,callback) {
   clearInterval(obj.t);
  var fun=fun==undefined?Tween.Quad.easeIn:fun;
    var time=0;
  var start={};var change={};
    for (var i in attrObj) {
   start[i]=setCss(obj,i);
   change[i]=attrObj[i]-start[i];
    }
  obj.t=setInterval(function(){
    if(time>=dur){
     clearInterval(obj.t);
     for (var i in attrObj) {
     setCss(obj,i,attrObj[i]);
     }
     if(callback){
       callback.call(obj);
     }
    }else{
    for (var i in attrObj) {
     setCss(obj,i,fun(time,start[i],change[i],dur));
    }
    time+=60
    }
  },60)
  }




 function setCss (obj,attr,val) {
   if(obj.nodeType!==1){
     return;
   }

   //初始化参数
  var attr=attr.replace(/^\s*|\s*$/g,"");
     //获取值
   if(arguments.length==2){
       //位置和尺寸
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
  var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
    if(!val){
     var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());

     val=obj[str];
    }
    return val;
    }

    
     if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
      var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));

       return cc;
     }
        //透明度
    if(attr=="opacity"){
      return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
    }
    //颜色
    if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
       var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
       //获取对象
    
       return getColor(colors);
         
    }
      if(attr=="scrollTop"||attr=="scrollLeft"){
        return obj[attr];
      }

    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];


   }else if(arguments.length==3){
     switch (attr) {
     case "width":
   case "height":
   case "top":
   case "left":
   case "bottom":
   case "right":
   case "padding":
   case "margin":
   case "paddingLeft":
   case "paddingRight":
   obj.style[attr]=val+"px";
   break;
     case "opacity":
   obj.style[attr]=val;
   obj.style.filter="alpha(opacity="+val*100+")"
   break;
   case 'color':
    case "background":
    case "backgroundColor":
    case 'borderBottomColor':
    case 'borderLeftColor':
    case 'borderRightColor':
    case 'borderTopColor':
    obj.style[attr]=val;
   break;
        case 'scrollTop':
        case 'scrollLeft':
        obj[attr]=val;
    break;
   default:
   obj.style[attr]=val;
     }

   }
 }

 //颜色渐变动画
 //获得颜色
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 进制
    if(color.charAt(0)==="#"){
    str=color.substring(1)
    r=parseInt(str.substr(0,2),16);
    g=parseInt(str.substr(2,2),16);
    b=parseInt(str.substr(4,2),16);
    arr=[r,g,b]
    return arr;
  }else{
    str=color.substring(4,color.length-1)
    return str.split(",")
  }
  }
  if(color instanceof Array){
    return color;
  }
}

function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
   if(times>=dur){
     clearInterval(obj.time)
       obj.time=null;
       if(callback){
          callback()
        }
      
   }else{
     r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
     g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
   b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur) 
    
   setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
     }
  },60)

}
