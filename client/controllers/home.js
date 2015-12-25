angular.module('Insta_Clone')

	.controller('HomeCtrl', function($scope, $window, $rootScope, $auth){
		$scope.linkInstagram = function(){
			$auth.link('instagram')
    		.then(function(response) {
      		$window.localStorage.currentUser = JSON.stringify(response.data.user);
      		$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
	    	});
		};

		$scope.isAuthenticated = function(){
			return $auth.isAuthenticated();
		};
	});