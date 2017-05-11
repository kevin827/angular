/**
 * Created by lenovo on 2017/3/31.
 */
var app=angular.module("app");
//自定义指令
app.directive("screen",function(){
    return {
        templateUrl:'tpl/screen.html',
        replace:true,
        scope:{
            list:"=",
            items:"="
        },
        controller:function ($scope) {

        },
        link:function(scope,ele){
            scope.item=function(name,idx){
                scope.flag=name;
                var lis=ele.find("ol").eq(0).find("li");
                lis.removeClass("activeOn");
                lis.eq(idx).addClass("activeOn");
            }
        }
    }
})
app.directive("reorder",function(){
    return{
        restrict:"E",
        template:"<ul class='orderContent'>" +
        "<li ng-click='order1()'>按照价格由小到大</li>" +
        "<li ng-click='order2()'>按照评分由高到低</li>" +
        "</ul>",
        controller:function($scope){
            $scope.order1=function(){
                $scope.sign='price'
                $scope.blackPage=false
                $scope.orderHide=true;
            }
            $scope.order2=function(){
                $scope.sign='title'
                $scope.orderHide=true;
                $scope.blackPage=false
            }
        }
    }
})
app.filter("screenList",function(){
    return function(data,param){
        var arr=[];
        if(!param || param=="all") return data;
        angular.forEach(data,function(value,index){
            if(value.d==param){
                arr.push(value)
            }
        })
        return arr;
    }
})
app.run(function($rootScope){
    $rootScope.filterService=function(){
        $rootScope.blackPage=!$rootScope.blackPage
    }
    $rootScope.order=function(){
        $rootScope.blackPage=!$rootScope.blackPage
    }
})
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("home/shopIntroduct")
    $stateProvider
        .state("home",{
            url:"/home",
            templateUrl:"tpl/home.html"
        })
        .state("home.serviceList",{
            url:"/serviceList",
            templateUrl:"tpl/serviceList.html",
            resolve:{
                data:function($http){
                    return $http.get("server/list.json")
                }
            },
            controller:function(data,$scope){
                $scope.sign="";
                $scope.list = data.data.data;
                $scope.data = data.data.info;
                $scope.items = data.data.services;
                $scope.screenHide=true;
                $scope.orderHide=true;
                $scope.screener=function(){
                    $scope.screenHide=!$scope.screenHide
                    $scope.orderHide=true;
                }
                $scope.reorder=function(){
                    $scope.orderHide=!$scope.orderHide
                    $scope.screenHide=true;
                }
            }
        })
        .state("home.shopIntroduct",{
            url:"/shopIntroduct",
            templateUrl:"tpl/shopIntroduct.html"
        })
})