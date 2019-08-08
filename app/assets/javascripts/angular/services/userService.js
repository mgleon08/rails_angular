app.service("UserService", function($http) {
  this.getUsers = function() {
    return $http.get("/users");
  };

  this.getUser = function(userID) {
    return $http.get("/users/" + userID);
  };

  this.createUser = function(params) {
    return $http.post("/users/", {
      user: params
    });
  };

  this.updateUser = function(userID, params) {
    return $http.put("/users/" + userID, {
      user: params
    });
  };

  this.deleteUser = function(userID) {
    return $http.delete("/users/" + userID);
  };
});
