var app=angular.module("mainApp",[]);

app.controller("userController",function($scope){
    var Technologys=[
        {id:1,Technology:"Angular-1",Likes:0,Dislikes:0},
        {id:2,Technology:"Angular-6",Likes:0,Dislikes:0},
        {id:3,Technology:"HTML",Likes:0,Dislikes:0},
        {id:4,Technology:"CSS",Likes:0,Dislikes:0},
        {id:5,Technology:"JS",Likes:0,Dislikes:0}    
    ];
    
    $scope.Technologys=Technologys;
    
    $scope.incrementLike=function(techno){
        techno.Likes++;
    }
    $scope.incrementDilike=function(techno)
    {
        techno.Dislikes++;
    }
});