$(function () {
    var box1=$(".box1");
    var copy=$(".copy");
    var canvas=$("canvas");
    var cobj=canvas[0].getContext("2d");
    //  画布的样式
    canvas.attr({
        width:copy.width(),
        height:copy.height()
    });
    //  下拉菜单显示
    $(".hson").hover(function () {
        $(this).find(".conson").finish().slideDown(300);
    }, function () {
        $(this).find(".conson").finish().slideUp(300);
    })
//     功能
 //画图
    var obj=new shape(copy[0],canvas[0],cobj);
    $(".hson:eq(1)").find(".son").click(function () {
        obj.shaps=$(this).attr("role");
        obj.draw();
    })
  //填充背景颜色
    $(".bg").change(function(){
        obj.bgcolor=$(this).val();
        obj.type="fill";

    })
    //填充边框颜色
    $(".bd").change(function(){
        obj.bordercolor=$(this).val();

    })
    //画图样式
    $(".hua").click(function(){
        obj.type=$(this).attr("role");
    })
    //边框粗细
    $(".xian").click(function(){
        obj.lineWidth=$(this).attr("role");
    })

    //橡皮擦
        $(".xpsize .son").click(function(){
            var ow=$(this).attr("data-role");
            var oh=$(this).attr("data-role");
            obj.xp($(".xp"),ow,oh);
        })

    //打开目录
    $(".kai .son").click(function(){
        var index=$(this).index();
  //新建文件
       if(index==0){
           if(obj.history.length!=0){
             var yes=window.confirm("是否保存文件");
              if(yes){
                  location.href=(canvas[0].toDataURL().replace("data:image/png","data:stream/octet"));
              }
                  cobj.clearRect(0,0,canvas[0].width,canvas[0].height);
                  obj.history=[];
                  obj.history.push(cobj.getImageData(0,0,canvas[0].width,canvas[0].height));
           }

       }else if(index==1){  //返回
           var last=obj.history.pop();
           cobj.clearRect(0,0,canvas[0].width,canvas[0].height);
           cobj.putImageData(last,0,0);
       }else if(index==2){  //保存
           location.href=(canvas[0].toDataURL().replace("data:image/png","data:stream/octet"));
       }
    })

    //选中
     var selectbox=$(".selectbox");
       $(".select").click(function(){
          obj.selects(selectbox);
       })
})