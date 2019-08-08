app.controller("UsersNewController", function($scope, $window, UserService) {
  $scope.createUser = function(user) {
    UserService.createUser(user).then(
      function(response) {
        $window.location.href = "/users/" + response.data.id.$oid;
      },
      function(response) {
        alert("Create user error");
      }
    );
  };
});
