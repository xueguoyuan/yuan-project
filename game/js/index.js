function game(){
	this.clientW=document.documentElement.clientWidth;
	this.clientH=document.documentElement.clientHeight;
	this.letter=["A","B","C","D","E","F","G","H","I","J","H","I","J","K","L","M",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	// 一次出现的个数
	this.letterlen=5;
	// 速度
	this.speed=2;
	// 定义数组用于存放取出的元素
  this.spans=[];
  // 生命值
  this.del=10;
  this.delEle=document.getElementsByTagName('li')[0];
  // 的分
  this.score=0;
  this.scoreEle=document.getElementsByTagName('li')[1];  
  // 过关要求消掉的字母数
  this.step=10;
  // 当前关数的分数
  this.nowscore=0;
  // 关数
  this.aa=1;
  // 页面显示元素的数组
  this.nowarr=[];
  // 页面显示元素的位置
  this.posarr=[];
}
game.prototype={
	play:function(){
         this.getletter(this.letterlen);
         this.move();
         this.key();
	},
  // 移动
  move:function(){
    var that=this;
    // 利用时间函数
    that.t=setInterval(function(){
      // 遍历spans数组
      for(var i=0;i<that.spans.length;i++){
        // 获取每次时间函数调用获取top值
        var top=that.spans[i].offsetTop+that.speed;
        that.spans[i].style.top=top+"px";
        // 如果top值超出浏览器
        if(top>that.clientH){
          // 删除span标签
          document.body.removeChild(that.spans[i]);
          // 删除页面中对应显示字母及位置
          that.nowarr.splice(i,1);
          that.posarr.splice(i,1);
          // 删除spans数组对应元素
          that.spans.splice(i,1);
          that.getletter(1);
          // 生命值
          that.del--;
          that.delEle.innerHTML=that.del; 
          if(that.del<=0){
            clearInterval(that.t)
            $(".box2").slideDown(300);
            // 刷新页面
            setTimeout(function(){
               history.go(0);
             },3000)
           
          }

        }

      }

     
    },60)

  },
  // 键盘事件
  key:function(){
    var that=this;
    // 键盘按下
    document.onkeydown=function(e){

      var ev=e||window.event;
      // 获取对应键盘码的字母String.fromCharCode;
      var code=String.fromCharCode(ev.keyCode);
     // 遍历数组spans
      for(var i=0;i<that.spans.length;i++){
        // 如果键盘码对应的字母存在于span中
        if(code==that.spans[i].innerHTML){
          // 删除span标签
          document.body.removeChild(that.spans[i]);
          // 删除页面中对应显示字母及位置
          that.nowarr.splice(i,1);
          that.posarr.splice(i,1);
          // 删除spans数组对应元素
          that.spans.splice(i,1);
          // 重新添加一个新字母
          that.getletter(1);
          // 得分
          that.score++;
          that.scoreEle.innerHTML=that.score;
          that.nowscore++;
          // 判断是否过关
          if(that.nowscore%that.step==0){
            that.aa++;
            $(".box1").html("第"+that.aa+"关").slideDown(500);
            that.next();            
            setTimeout(function(){

              $(".box1").slideUp(300);
              
            },1000);
           
          }

          return;
        }
      }
    }
  },
  // 下一关
  next:function(){
    // 终止时间函数
     clearInterval(this.t);
     // 清除span标签
     for(var i=0;i<this.spans.length;i++){
      document.body.removeChild(this.spans[i]);
     }
     // 增加消除字母数
     this.step++;
     // 清空当前关数的分数
     this.nowscore=0;
     // 清空数组
     this.spans=[];
     // 清空保存页面元素的数组
     this.nowarr=[];
     // 清空保存页面元素位置信息的数组
     this.posarr=[];
     // 速度加一
     this.speed++;
     // 出现字母加一
     this.letterlen++;
     // 调用play方法
     var that=this;
     setTimeout(function(){
      that.play();
     },1500)
  },
	// 显示字母
	getletter:function(num){
    // 获取显示的字母
		var arr=this.rand(num);
		// 用于存放每个元素的left,top值
		var parr=[];
    // 遍历数组
    for(var i=0;i<arr.length;i++){
      var width=60;
      // 创建span添加内容并且添加样式
      var span=document.createElement("span");
      span.innerHTML=arr[i];

      // 随机获取元素的x轴的left
      var x=(this.clientW-200)*Math.random()+100;
      // 随机获取元素y轴的top
      var y=10*Math.random();
      // 防止创建与页面显示元素在x轴上重合,如果重合继续获取x轴left值
      while(this.check2(this.posarr,x,width)){
          x=(this.clientW-200)*Math.random()+100;
      }
      // 将不重合的放到数组中     
      parr.push({minx:x,maxx:x+width});
      // 将不重复的放到this.posarr
      this.posarr.push({minx:x,maxx:x+width});
     span.style.cssText="width:"+width+"px;position:absolute;left:"+x+"px;top:"+y+
     "px;color:#ced1f0;height:80px;width:60px;font-size:0px;background:url(img/"+arr[i]+".png)";
     document.body.appendChild(span);
     // 将span放到数组spans中
     this.spans.push(span);

    }
		
    console.log(this.spans);
	},
  // 判断是否与其它元素在x轴上重合
  check2:function(arr,x,width){
       for(var i=0;i<arr.length;i++){
        // 如果x与数组中某个元素重合返回真
        if(!(arr[i].minx-width>x||arr[i].maxx<x)){
          return true;
        }
       }
       // 否则返回假
       return false;
  },
	// 随机取num个字母
    rand:function(num){
      var arr=[];
      for(var i=0;i<num;i++){
      	// 随机获取0-this.letter.length间的随机数
      	var random=Math.floor(Math.random()*this.letter.length);
      	// 判断是否与this.nowarr数组中重复(页面显示的字母)
      	while(this.check1(this.nowarr,this.letter[random])){
           random=Math.floor(Math.random()*this.letter.length);
      	}
      	// 将不重复的放到数组arr
      	arr.push(this.letter[random]);
        // 将不重复的放到this.nowarr;
        this.nowarr.push(this.letter[random]);
      }
      // 返回数组
      return arr;
    },
    // 判断数组arr是否与num存在重复的元素
    check1:function(arr,val){
         for(var i=0;i<arr.length;i++){
                if(arr[i]==val){
                	return true;
                }
         }
         return false;
    }
}