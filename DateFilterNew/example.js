
var app = angular.module('myApp', []);
app.controller('datCtrl', function($scope) {
    $scope.today = new Date();
    $scope.changeOrder = function() {
    	if($scope.ordering == 'asc') {
    		$scope.ordering = 'desc';
    		$scope.objectList.sort(function(a, b){
    			return moment(a.postDate) < moment(b.postDate)
    		});
    	}
    	else {
    		$scope.ordering = 'asc';
    		$scope.objectList.sort(function(a, b){
    			return moment(a.postDate) > moment(b.postDate)
    		});
    	}
    }

    $scope.ordering = "asc";
	
	$scope.objectList = [];

	for(var i=0;i<10;i++) {
		
		$scope.objectList.push({
			'name': 'Date Filter-'+i,
			'title': 'based match',
			'postDate': moment().add(i, 'days').format('lll')
		});
	}
});




