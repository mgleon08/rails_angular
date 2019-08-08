app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
    })
    .state('users_edit', {
      url:'/users/:id/edit',
      controller: 'UsersEditController',
      templateUrl: '/templates/users/edit.html'
    });
  }
])
