app.controller("UsersIndexController", function($scope, UserService) {
  var getUsers = function getUsers() {
    UserService.getUsers().then(
      function(response) {
        $scope.users = response.data;
      },
      function(response) {
        alert("Get users error");
      }
    );
  };

  $scope.deleteUser = function(userID) {
    UserService.deleteUser(userID).then(
      function(response) {
        location.reload();
      },
      function(response) {
        alert("Delete user error");
      }
    );
  };

  $scope.showUserEdit = false;

  $scope.editUser = function(userID) {
    $scope.showUserEdit = true;
    $scope.$broadcast("editUser", userID);
  };

  getUsers();
});
