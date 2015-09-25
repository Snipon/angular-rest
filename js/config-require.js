

define({
  baseUrl : 'js',
  paths : {
    angular : '../vendor/angularjs/angular.min',
    domReady : '../vendor/requirejs-domready/domReady',
    angularRoute : '../vendor/angular-route/angular-route.min',
    angularSocketIo : '../vendor/angular-socket-io/socket.min'
  },
  shim : {
    angular : {
      exports : 'angular'
    },
    angularRoute : ['angular'],
    angularSocketIo : ['angular'],
  }
});
