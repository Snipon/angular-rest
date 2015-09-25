define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('teaserListController', function ($scope, $http, $sce, $location) {
    // Get path.
    var path = ($location.path());

    // Get json.
    $http({
      url: 'http://api.test.dev/rest' + path,
      method: 'GET',
      headers: {
        'Accept' : 'application/json'
      }
    })
    .success(function (data) {
      // Send data to scope.
      $scope.teasers = data;
      // Render html function.
      $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
      };

      // Go to url.
      $scope.goto = function (path) {
        $location.path(path);
      };

      // Bookmark.
      $scope.bookmarkThis = function () {
        console.log('Click');
      };
    })
    .error(function () {
      console.log('error');
    });
  });
});
