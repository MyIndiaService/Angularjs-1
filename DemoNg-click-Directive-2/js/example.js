var app=angular.module("mainApp",[]);

app.controller("userController",function($scope){
    $scope.users=[
        {id:1,name:"Amit",Gender:"Male",City:"Delhi"},
        {id:2,name:"smit",Gender:"Male",City:"Delhi"},
        {id:3,name:"Ramesh",Gender:"Male",City:"Delhi"},
        {id:4,name:"Annu",Gender:"Female",City:"Noida"},
        {id:5,name:"Priyanka",Gender:"Female",City:"Lakshmi Nager"}
    ];
});