app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
    })
    .state('users', {
      url: '/users',
      controller: 'UsersIndexController',
      templateUrl: '/templates/users/index.html'
    })
    .state('users_show', {
      url: '/users/:id',
      controller: 'UsersShowController',
      templateUrl: '/templates/users/show.html'
    })
    .state('users_new', {
      url: '/users/new',
      templateUrl: '/templates/users/new.html'
    })
    .state('users_edit', {
      url:'/users/:id/edit',
      templateUrl: '/templates/users/edit.html'
    });
  }
])
