var app=angular.module("mainApp",[]);

app.controller("userController",function($scope){
    $scope.users=[
        {id:1,name:"Amit",Gender:"Male",City:"Delhi"},
        {id:2,name:"smit",Gender:"Male",City:"Delhi"},
        {id:3,name:"Ramesh",Gender:"Male",City:"Delhi"},
        {id:4,name:"Annu",Gender:"Female",City:"Noida"},
        {id:5,name:"Priyanka",Gender:"Female",City:"Lakshmi Nager"}
    ];
    
    $scope.DisplayCity="";
    
    $scope.delhiCount=0;
    $scope.noidaCount=0;
    $scope.laximiCount=0;
    
    $scope.getCityCount=function(cityName)
    {
        var count=0;
        console.log(cityName);
        $scope.users.filter(function(user){
            
            if(user.City==cityName)
            {
               count++;     
            }
            
        });
        return count;
    }
    
    $scope.ChangeCity=function(cityName)
    {
        $scope.DisplayCity=cityName;
    }
    
     $scope.citys=[
         {id:1,cityName:"Delhi"},
         {id:2,cityName:"Noida"},
         {id:3,cityName:"Lakshmi Nager"}
     ];
    $scope.count=0;
});