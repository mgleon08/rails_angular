app.directive('userForm', function($window) {
  return {
    restrict: 'E',
    scope: {
      user: '=',
      showEdit: '=',
    },
    controller: function controller($scope, UserService) {
      var update = function(){
        UserService.updateUser($scope.user.id.$oid, $scope.user).then(
          function(response) {
            alert('update success');
          },
          function(response) {
            alert('update error');
          }
        );
      }

      var create = function(){
        UserService.createUser($scope.user).then(
          function(response) {
            $window.location.href = '/users';
          },
          function(response) {
            alert('Create user error');
          }
        );
      }

      $scope.createOrUpdateUser = function() {
        if($scope.user.id === undefined){
          create();
        }else{
          update();
          $scope.showEdit = !$scope.showEdit;
        };
      };
    },
    templateUrl: '/templates/users/form.html'
  };
});
