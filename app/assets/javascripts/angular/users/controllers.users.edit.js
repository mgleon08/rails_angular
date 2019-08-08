app.controller('UsersEditController',
  ['$scope', '$http', '$stateParams', '$window', function($scope, $http, $stateParams, $window){
    var userID = $stateParams.id
    var getUser = function(){
      $http.get('/users/' + userID).then(
        function success(response) {
          $scope.user = response.data;
        }, function error(response) {
          alert('get user info error')
        }
      );
    };
    $scope.updateUser = function(){
      $http.put('/users/' + userID, { user: $scope.user }).then(
        function success(response) {
          $window.location.href = '/users/' + userID;
        }, function error(response) {
          alert('update error')
        }
      );
    }

    getUser();
}]);
