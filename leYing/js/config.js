/**
 * Created by lenovo on 2017/3/28.
 */
var app=angular.module("app");
//自定义指令渲染电影页面内容
app.directive("movieCon",function(){
    return{
        templateUrl:"tpl/movieCont.html",
        restrict:"ACEM",
        scope:{
            movieCont:"="
        },
        controller:function($scope){

        }
    }
})
//活动页
app.directive("activeCon",function(){
    return{
        templateUrl:"tpl/activeCont.html",
        restrict:"ACEM",
        scope:{
            activeCont:"="
        },
        controller:function($scope){

        }
    }
})
//全局数据
app.run(function($rootScope,$timeout){
    $rootScope.data=[
        {
            img:"images/1.png",
            title:"金刚:骷髅岛",
            news:"新",
            stamp:"IMAX 3D",
            screen:"中国巨幕3D",
            score:"7.5分",
            drama:"经典怪兽片《金刚前传》",
            status:"36家影院上映2.155场",
            btn:"购票"
        },
        {
            img:"images/2.png",
            title:"美女与野兽",
            stamp:"IMAX 3D",
            score:"8.3分",
            drama:"童年经典神还原",
            status:"36家影院上映600场",
            btn:"购票"
        },
        {
            img:"images/3.png",
            title:"欢乐喜剧人",
            news:"新",
            score:"7.3分",
            drama:"欢乐喜剧人大电影",
            status:"36家影院上映600场",
            btn:"购票"
        },
        {
            img:"images/4.png",
            title:"八月",
            news:"新",
            score:"8.5分",
            drama:"金马奖最佳影片",
            status:"36家影院上映600场",
            btn:"购票"
        },
        {
            img:"images/5.png",
            title:"绑架者",
            news:"新",
            score:"7.3分",
            drama:"导演：徐静蕾",
            status:"36家影院上映600场",
            btn:"购票"
        },
        {
            img:"images/6.png",
            title:"嫌疑人X的献身",
            news:"新",
            score:"7.3分",
            drama:"导演：苏有朋",
            status:"36家影院上映600场",
            btn:"购票"
        }
    ]
    $rootScope.active=[
        {
            img:"images/banner1.png",
            title:"嘉裕12月活动（九龙坡）",
            content:"2015年12月08日--2015年12月31日"
        },
        {
            img:"images/banner2.png",
            title:"慈云寺店 | 早场开放啦！",
            content:"2015年12月08日--2015年12月31日"
        },
        {
            img:"images/banner1.png",
            title:"嘉裕12月活动（九龙坡）",
            content:"2015年12月08日--2015年12月31日"
        },
        {
            img:"images/banner2.png",
            title:"慈云寺店 | 早场开放啦！",
            content:"2015年12月08日--2015年12月31日"
        }
    ]
    $rootScope.town=function(){
        $rootScope.brandslistshow=false
        $rootScope.regionListshow=!$rootScope.regionListshow
    }
    $rootScope.brand=function(){
        $rootScope.regionListshow=false
        $rootScope.brandslistshow=!$rootScope.brandslistshow
    }
    $rootScope.area=function(param){
        $rootScope.filterName=param;
        $rootScope.brandslistshow=false
        $rootScope.regionListshow=false
    }
    var heights={};
    $timeout(function(){
        var city_list=document.getElementsByClassName("city_list");
        for(var i=0;i<city_list.length;i++){
            heights[city_list[i].innerHTML]=city_list[i].offsetTop
        }
    },1000)
    $rootScope.scrollTo=function(val){
        var scroll=document.getElementsByClassName("section")[0];
        scroll.scrollTop=heights[val]-4
    }
})
/*
app.filter("screen",function(){
    return function(data,param){
        var arr=[];
        for(var i=0;i<data.length;i++){
            if(data[i][0].indexOf(param)>-1 || data[i][1].indexOf(param)>-1 || data[i][2].indexOf(param)>-1){
                arr.push(data[i])
            }
        }
        return arr;
    }
})*/

//配置路由
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("movie");
    $stateProvider
    .state("movie",{
        url:"/movie",
        templateUrl:"tpl/movie.html"
    })
    .state("cinema",{
        url:"/cinema",
        templateUrl:"tpl/cinema.html",
        resolve:{
            data:function($http){
                return $http.get("server/cinema.json")
            }
        },
        controller:function(data,$scope){
            $scope.country=data.data.regionList.datas;
            $scope.brands=data.data.cinemaGroup.datas;
            $scope.data=data.data.cinemaList.datas;
        }
    })

    .state("active",{
        url:"/active",
        templateUrl:"tpl/active.html"
    })
    .state("locate",{
        url:"/locate",
        templateUrl:"tpl/city.html",
            resolve:{
                citylist:function($http){
                    return $http.get("server/city.json")
                }
            },
            controller:function($scope,citylist){
                $scope.data=citylist.data.data.citylist;
            }
    })
})