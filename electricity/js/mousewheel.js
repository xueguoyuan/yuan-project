$.fn.extend({
	mouseWheel:function(upcallback,downcallback){
        this.each(function(){//this整个元素集合
        	mw(this,upcallback,downcallback)//this当前元素
        });
	}
})
function mw(obj,ucb,dcb){
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
		          if(ucb){
		            ucb.call(obj);
		          }
		        }
		        if(ev.detail==3||ev.wheelDelta==-120){//FF滚轮往下 3;IE，谷歌 滚轮往下 -120
		          if(dcb){
		            dcb.call(obj);
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