app.config([
  '$httpProvider',
  function($httpProvider) {
    var headers = $httpProvider.defaults.headers.common;
    var token_tag = document.querySelector('meta[name=csrf-token]');

    headers['X-CSRF-TOKEN'] = token_tag.content;
    headers['X-Requested-With'] = 'XMLHttpRequest';
  }
]);
