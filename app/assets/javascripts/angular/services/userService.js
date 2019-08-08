app.service("UserService", [
  "$http",
  function($http) {
    this.getUser = function(userID) {
      return $http.get("/users/" + userID);
    };

    this.updateUser = function(userID, params) {
      return $http.put("/users/" + userID, {
        user: params
      });
    };
  }
]);
