angular.module('Insta_Clone')
  .controller('SignupCtrl', function($scope, $auth, API) {

    $scope.signup = function() {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      // Satellizer
      $auth.signup(user)
        .catch(function(response) {
          console.log(response.data);
        });
    };

  });