require.config({
  baseUrl : '/',
  paths : {
    angular : 'vendor/angularjs/angular.min',
    app : 'js/app'
  },
  shim : {
    angular : {
      exports : 'angular'
    }
  }
});


require(['app', 'js/controllers/teasers'], function (app) {
  'use strict';
  app.init(app);
});
