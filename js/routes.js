define(['./app'], function (app) {
  'use strict';
  return app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/test', {
        templateUrl: 'partials/teaser.html',
        controller: 'teaserListController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
  }]);
});
