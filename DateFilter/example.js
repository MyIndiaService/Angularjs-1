
var app = angular.module('myApp', []);
app.controller('datCtrl', function($scope) {
    $scope.today = new Date();
	
	$scope.dateFilter = [{ 
		"name":"DateFilter",
		"title":"best school",
		"postDate": 'March 20 2016'
	},
	{ 
		"name":"DateFilter",
		"title":"best school",
		"postDate":'Dec 20 2016'
	},
	{ 
		"name":"DateFilter",
		"title":"best school",
		"postDate":'Jan 20 2016'
	},
	{ 
		"name":"DateFilter",
		"title":"best school",
		"postDate":'Feb 20 2016'
	}];
});




