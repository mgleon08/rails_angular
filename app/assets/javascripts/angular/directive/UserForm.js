app.directive("userForm", function() {
  return {
    restrict: "E",
    scope: {
      user: "=",
    },
    controller: function controller($scope, UserService) {
      $scope.updateUser = function(user) {
        UserService.updateUser(user.id.$oid, user).then(
          function(response) {
            location.reload();
          },
          function(response) {
            alert("update error");
          }
        );
      };
    },
    templateUrl: "/templates/users/form.html"
  };
});
