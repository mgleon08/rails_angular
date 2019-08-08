app.directive("userForm", function() {
  return {
    restrict: "E",
    scope: false,
    controller: function controller($scope, $window, UserService) {
      $scope.userID = null;
      $scope.$on("editUser", function(e, userID) {
        $scope.userID = userID;
        getUser();
      });

      var getUser = function getUser() {
        UserService.getUser($scope.userID).then(
          function(response) {
            $scope.user = response.data;
          },
          function(response) {
            alert("get user info error");
          }
        );
      };

      $scope.updateUser = function() {
        UserService.updateUser($scope.userID, $scope.user).then(
          function(response) {
            $window.location.href = "/users/" + $scope.userID;
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
