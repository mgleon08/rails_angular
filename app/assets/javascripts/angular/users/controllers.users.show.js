app.controller("UsersShowController", function(
  $scope,
  $stateParams,
  UserService
) {
  var userID = $stateParams.id;

  var getUser = function getUser() {
    UserService.getUser(userID).then(
      function(response) {
        $scope.user = response.data;
      },
      function(response) {
        alert("Get user error");
      }
    );
  };

  getUser();
});
