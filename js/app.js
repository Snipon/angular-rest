define(['angular'], function (angular) {
  'use strict';

  var app = angular.module('testApp', []);

  app.init = function () {
    angular.bootstrap(document, ['testApp']);
  };

  return app;
});
