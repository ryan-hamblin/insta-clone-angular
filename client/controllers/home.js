angular.module('Insta_Clone')

	.controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API){
		$scope.linkInstagram = function() {
		  $auth.link('instagram')
		    .then(function(response) {
		      $window.localStorage.currentUser = JSON.stringify(response.data.user);
		      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		      API.getFeed().success(function(data) {
		        $scope.photos = data;
		      });
		    });
		};

		$scope.isAuthenticated = function(){
			return $auth.isAuthenticated();
		};

		if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
  		API.getFeed().success(function(data) {
    	$scope.photos = data;
	  	});
		}
	});