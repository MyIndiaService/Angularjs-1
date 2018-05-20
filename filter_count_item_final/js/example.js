var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	//college name left side nav name
	$scope.collegeName = [
	
		{"colName":"college Name 1", "type":"college1"},
		{"colName":"college Name 2", "type":"college2"},
		{"colName":"college Name 3", "type":"college3"},
		{"colName":"college Name 4", "type":"college4"},
		{"colName":"college Name 5", "type":"college5"}
	
	];
	//select option years list
	$scope.collegeListYear = [
	
		{"yearList":"2016"},
		{"yearList":"2017"},
		{"yearList":"2018"},
		{"yearList":"2019"}
	
	];

	//checkbox left side nav name
	$scope.collegechecklist = [
	
		{"colName":"college Checkbox 1", "type":"checkbox1",status:false},
		{"colName":"college Checkbox 2", "type":"checkbox2",status:false},
		{"colName":"college Checkbox 3", "type":"checkbox3",status:false}
	
	];
	

	$scope.college = [{ 
		"name":"college Name 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1",
        "chktype":"checkbox1",
		"year":"2016"
		
	}
	,
	{
		"name":"college Name 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1",
        "chktype":"checkbox3",
		"year":"2016"
		
	},
	{
		"name":"college Name 1 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1",
        "chktype":"checkbox2",
		"year":"2016"
	},	
	{
		"name":"college Name 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2",
        "chktype":"checkbox2",
		"year":"2017"
		
	},
	{
		"name":"college Name 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2",
        "chktype":"checkbox2",
		"year":"2017"
		
	},
	{
		"name":"college Name 3 Item 1",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
        "chktype":"checkbox3",
		"year":"2018"
		
	},
	{
		"name":"college Name 3 Item 2",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
        "chktype":"checkbox3",
		"year":"2018"
		
	},
	{
		"name":"college Name 3 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
        "chktype":"checkbox3",
		"year":"2016"
		
	},
	{
		"name":"college Name 3 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
        "chktype":"checkbox3",
		"type":"college3",
		"year":"2017"
	},
	{
		"name":"college Name 4 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2018"
		
	},
	{
		"name":"college Name 4 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2019"
		
	},
	{
		"name":"college Name 4 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2017"
		
	},
	{
		"name":"college Name 4 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2018"
		
	},
	{
		"name":"college Name 4 Item 5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2019"
		
	},
	{
		"name":"college Name 4 Item 6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
        "chktype":"checkbox4",
		"year":"2017"
	},
	{
		"name":"college Name 5 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college5",
        "chktype":"checkbox5",
		"year":"2018"
	},
	{
		"name":"college Checkbox 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox1",
        "chktype":"checkbox1",
		"year":"2016"
	},
	{
		"name":"college Checkbox 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox1",
        "chktype":"checkbox1",
		"year":"2017"
	},
	{
		"name":"college Checkbox 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
        "chktype":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
        "chktype":"checkbox2",
		"year":"2018"
	},
	{
		"name":"college Checkbox 2 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
        "chktype":"checkbox2",
		"type":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 2 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
        "chktype":"checkbox2",
		"year":"2017"
	},
	{
		"name":"college Checkbox 3 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
        "chktype":"checkbox3",
		"year":"2016"
	},
	{
		"name":"college Checkbox 3 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
        "chktype":"checkbox3",
		"year":"2016"
	},
	{
		"name":"college Checkbox 3 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
        "chktype":"checkbox3",
		"year":"2016"
	}];
	
	$scope.allitem = $scope.college.length;
    
	   //display product with year wise
	$scope.Selectyear=$scope.collegeListYear[0];
    
    $scope.DisplayProList="";
    
	//count college item
	$scope.getCollCount=function(type){
        var count=0;
        $scope.college.filter(function(x){
            if(x.type==type)
            {
               count++;     
            }
            
        });
        return count;
    }
// count college with checkbox count
$scope.getCollCountCheck=function(type){
        var count=0;
        $scope.college.filter(function(x){
            if(x.type==type)
            {
               count++;     
            }
            
        });
        return count;
    }
// display on click college list then display related item


    
	$scope.displayProd=function(type){

		if(type=="all")
		{
			 $scope.DisplayProList="";
		}
		else
        {
			$scope.DisplayProList=type;
		}	
    }
	
    

});




