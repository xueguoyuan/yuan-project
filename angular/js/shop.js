 angular.module("myapp",[])
                .controller("carCtrl",["$scope"/*,"$http"*/,function($scope){
                    $scope.infos=[{
                        id:1,name:"衣服",price:60,num:2,alls:function(){
                            return  this.num*this.price;
                        }
                    },{
                        id:2,name:"零食",price:70,num:3,alls:function(){
                            return  this.num*this.price;
                        }
                    },{
                        id:3,name:"玩的",price:50,num:3,alls:function(){
                            return  this.num*this.price;
                        }
                    },{
                        id:4,name:"喝的",price:70,num:2,alls:function(){
                            return  this.num*this.price;
                        }
                    },{
                        id:5,name:"帽子",price:90,num:3,alls:function(){
                            return  this.num*this.price;
                        }
                    }]
                    //总价
                    $scope.allprice=function(){
                        var aa=0;
                        for(var i=0;i<$scope.infos.length;i++){
                            aa+=Number($scope.infos[i].num*$scope.infos[i].price);
                        }
                        return  aa;
                    }
                    //总数
                    $scope.all=function(){
                        var aa=0;
                        for(var i=0;i<$scope.infos.length;i++){
                            aa+=Number($scope.infos[i].num);
                        }
                        return  aa;
                    }
                    //  排序
                    $scope.type="id";
                    $scope.orderType="";
                    $scope.order= function (type) {
                        $scope.type=type;
                        if ($scope.orderType=="-"){
                            $scope.orderType="";
                        }else {
                            $scope.orderType="-";
                        }
                    }
                    //删除
                    $scope.del=function(id){
                        angular.forEach($scope.infos,function(obj,index){
                            if(obj.id==id){
                                $scope.infos.splice(index,1)
                            }
                        })
                    }
                    //清除全部
                    $scope.clear=function(){
                        $scope.infos=[];
                    }
                    //减
                    $scope.jian=function(id){
                        angular.forEach($scope.infos,function(obj,index){
                            if(obj.id==id){
                                if(obj.num==0){
                                    return;
                                }
                                obj.num--;
                            }
                        })
                    }
                    //加
                    $scope.jia= function (id) {
                        angular.forEach($scope.infos, function (obj, index) {
                            if(obj.id==id){
                                obj.num++;
                            }
                        });
                    }
                    /*                 //监测
                     $scope.$watch("infos",function(newv,oldv){//监测
                     angular.forEach(newValue, function (obj,index) {
                     if(obj.num==""){
                     obj.num=0;
                     }else if(!Number(obj.num)&&obj.num!=""&&obj.num!=0){
                     obj.num=oldValue[index].num;
                     }
                     if(obj.num.charAt(0)=='0'){
                     obj.num=obj.num.substring(1);
                     }
                     })
                     },true)*/
                    //            自带的方法  监测
                    $scope.$watch("infos", function (newv,oldv) { //  当内容发生改变
                        angular.forEach($scope.infos, function (obj,index) {
                            if (obj.num!=oldv[index].num){
                                if (!Number(obj.num)){
                                    obj.num=0;
                                    var yes=confirm("是否要删除");
                                    if (yes){
                                        $scope.infos.splice(index,1);
                                    }else {
                                        obj.num=oldv[index].num;
                                    }
                                }
                            }
                        })
                    },true);

                }])
        // var a=!Number();//a=true;
        //  alert(a);