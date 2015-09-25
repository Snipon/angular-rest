define(['./module', 'angularSocketIo'], function (services) {
  'use strict';
  services.factory('socket', function (socketFactory) {
    return socketFactory({
      prefix : '',
      ioSocket : 'localhost:3000'
    });
  });
});
