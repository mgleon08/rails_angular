app.service('UserService', function($http) {
  this.getUsers = function() {
    return $http.get('/api/users');
  };

  this.getUser = function(userID) {
    return $http.get('/api/users/' + userID);
  };

  this.createUser = function(params) {
    return $http.post('/api/users/', {
      user: params
    });
  };

  this.updateUser = function(userID, params) {
    return $http.put('/api/users/' + userID, {
      user: params
    });
  };

  this.deleteUser = function(userID) {
    return $http.delete('/api/users/' + userID);
  };
});
