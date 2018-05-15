var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http){
    $http.get('sampal_json.js')
		.then(function (response){
			$scope.jsondata = response.data;
			console.log("status:" + response.status);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
			 console.log("Task Finished.");
		});
	
}); 

//Note: Above code Supported with Mozila Firefox if we want run it on chrom  then need to upload Sample_Json.js file on Server 

//http://triangular-api.oxygenna.com/email/inbox
/*
$http.get with .then
Calling .then callback on promise object obtained from $http.get returns new promise object and can be used as sequential operation. It takes a single object for response. 

promise.then: On successful promise .then is called. If $http.get fetches a URL successfully then AngularJS .then is executed. 
promise.catch: It is called when promise is failed. 
promise.finally: This method is called in both scenario whether promise is successful or failed. 

///////////////////////////////////////////////////////////////////////////////////////////////////////


Find the properties of response object. 
data: It contains response body. 
status: HTTP status code. 
headers: Access headers. 
config: Configuration object to generate request. 
statusText: HTTP status text. 

In .then() we get response object and using this object we get the properties as response.data, response.status 

*/