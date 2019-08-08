app.controller('UsersEditController',
  ['$scope', '$stateParams', '$window', 'UserService',
  function($scope, $stateParams, $window, UserService){
    var userID = $stateParams.id
    var getUser = function(){
      UserService.getUser(userID).then(
        function(response) {
          $scope.user = response.data;
        }, function(response) {
          alert('get user info error')
        }
      );
    };
    $scope.updateUser = function(){
      UserService.updateUser(userID, $scope.user).then(
        function(response) {
          $window.location.href = '/users/' + userID;
        }, function(response) {
          alert('update error')
        }
      );
    }

    getUser();
}]);
