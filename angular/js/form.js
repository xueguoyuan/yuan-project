 angular.module("myapp",[]).controller("all",function ($scope){

        }).directive("passWord",function (){
            return {
                restrict:"A",
                require:"ngModel",
                link:function (a,b,c,d){
                    var attrVal=c.passWord;
                    var target=document.getElementsByName(attrVal)[0];
                    var same=function (val){
                        if (val==target.value) {
                            d.$setValidity("can",true);
                        } else {
                            d.$setValidity("can",false);
                        }
                    }
                    d.$parsers.push(same);
                }
            }
        }).directive("ajax",["$http",function ($http){
            return {
                restrict:"A",
                require:"ngModel",
                link:function (a,b,c,d){
                    var urls= c.ajax;
                    var ajax=function (val){
                        $http.get(urls).success(function (data){
                            if (data==val) {
                                d.$setValidity("ajax",false);
                            } else {
                                d.$setValidity("ajax",true);
                            }
                        })
                        return val;
                    }
                    d.$parsers.push(ajax);
                }
            }
        }])