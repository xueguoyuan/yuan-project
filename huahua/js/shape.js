function shape(copy,canvas,cobj){
    this.copy=copy;
    this.canvas=canvas;
    this.cobj=cobj;
//    保存背景颜色
    this.bgcolor="#000";
    // 边框颜色
    this.bordercolor="#000";
    //  线条宽度
    this.lineWidth=1;
  //描边
    this.type="stroke";
    //画线
    this.shaps="line";
    this.width=canvas.width;
    this.height=canvas.height;
    this.history=[];
}
shape.prototype={
    init:function(){
        //  初始化
        this.cobj.fillStyle=this.bgcolor;
        this.cobj.strokeStyle=this.bordercolor;
        this.cobj.lineWidth=this.lineWidth;

    },
    line: function (x,y,x1,y1) {

        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        this.cobj.lineTo(x1,y1);
        this.cobj.closePath();
        this.cobj.stroke();
    },
    rect: function (x,y,x1,y1) {
        this.cobj.beginPath();
        this.cobj.rect(x,y,x1-x,y1-y);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    circle: function (x,y,x1,y1) {

        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.beginPath();
        this.cobj.arc(x,y,r,0,Math.PI*2);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    five:function(x,y,x1,y1){
        var r=Math.sqrt((x1-x)*(x1-x)-(y1-y)*(y1-y));
        var r1=r/2;
        this.cobj.beginPath();
        this.cobj.moveTo(x+r,y);
        for(var i=0;i<10;i++){
            if(i%2==0){
                this.cobj.lineTo(x+Math.cos(i*36*Math.PI/180)*r,y+Math.sin(i*36*Math.PI/180)*r);
            }else{
                this.cobj.lineTo(x+Math.cos(i*36*Math.PI/180)*r1,y+Math.sin(i*36*Math.PI/180)*r1);
            }
        }
        this.cobj.closePath();
        this.cobj[this.type]();
    },
    draw:function () {

        var that=this;
        if(that.shaps=="pen"){
            that.pen();
            return;
        }
        that.copy.onmousedown= function (e) {
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.copy.onmousemove=function(e){
                that.cobj.clearRect(0,0,that.width,that.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.init();
                that[that.shaps](startx,starty,endx,endy);

            }
            that.copy.onmouseup= function () {
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    pen:function(){
        var that=this;
        that.copy.onmousedown= function (e) {
            that.init();
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(startx,starty);
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.cobj.lineTo(endx,endy);
                that.cobj.stroke();
            }
            that.copy.onmouseup= function () {
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;

            }
        }
    },
    xp:function(xobj,x,y){
        var cw=this.width;
        var ch=this.width;
        var that=this;
        that.copy.onmousemove=function(e){
           var ex= e.offsetX;
           var ey= e.offsetY;
           var w=ex-x/2;
           var h=ey-y/2;
           xobj.css({
               width:x,height:y, display:"block",
              top:h, left:w
           })
            if(w<0){
                w=w;
            }else if(w>cw-x){
                w=cw-x ;
            }
            if(h<0){
                h=h;
            }else if(h>ch-y){
                h=ch-y ;
            }
       }
        that.copy.onmousedown=function(){
            that.init();
            that.copy.onmousemove=function(e){

                var ex= e.offsetX;
                var ey= e.offsetY;
                var w=ex-x/2;
                var h=ey-y/2;
                xobj.css({
                    top:h, left:w
                })
                if(w<0){
                    w=w;
                }else if(w>cw-x){
                    w=cw-x ;
                }
                if(h<0){
                    h=h;
                }else if(h>ch-y){
                    h=ch-y ;
                }
                that.cobj.clearRect(w,h,x,y);
                that.copy.onmouseup=function(e){
                    xobj.css({
                        display:"none"
                    })
                    that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                    that.copy.onmousemove=null;
                    that.copy.onmouseup=null;

                }
            }

        }
    },
    selects:function(selectbox){
        var that=this;
        that.copy.onmousedown=function(e){
            var startx=e.offsetX;
            var starty= e.offsetY;
            var minx,miny, w,h;
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                 minx=startx>endx?endx:startx;
                 miny=starty>endy?endy:starty;
                 w=Math.abs(endx-startx);
                 h=Math.abs(endx-startx);
                selectbox.css({
                    width:w,height:h,
                    top:miny,left:minx,
                    display:"block"
                })
            }
            that.copy.onmouseup=function(e){
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.tp=that.cobj.getImageData(minx,miny,w,h);
                that.cobj.clearRect(minx,miny,w,h);
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.cobj.putImageData(that.tp,minx,miny);
                that.drag(minx,miny,w,h,selectbox);

            }
        }
    },
    drag:function(x,y,w,h,selectbox){
         var that=this;
        that.copy.onmousemove=function(e){
            var ox= e.offsetX;
            var oy= e.offsetY;
            var cx=ox-x;
            var cy=oy-y;
            if(ox>x&&ox<x+w&&oy>y&&oy<y+h){
                that.copy.style.cursor="move";
            }else{
                that.copy.style.cursor="default"
            }
        }
        that.copy.onmousedown=function(e){
            var ox= e.offsetX;
            var oy= e.offsetY;
            var cx=ox-x;
            var cy=oy-y;
            if(ox>x&&ox<x+w&&oy>y&&oy<y+h){
                that.copy.style.cursor="move";
            }else{
               that.copy.style.cursor="default"
            }
            that.copy.onmousemove=function(e){
                that.cobj.clearRect(0,0,that.width,that.height);
                if(that.history.length!==0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
               var endx= e.offsetX;
                var endy= e.offsetY;
                var lefts=endx-cx;
                var tops=endy-cy;
                selectbox.css({
                    left:lefts,
                    top:tops
                })
                x=lefts;
                y=tops;
                that.cobj.putImageData(that.tp,lefts,tops);
            }
            that.copy.onmouseup=function(){

                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.drag(x,y,w,h,selectbox);
            }
        }
    }
}