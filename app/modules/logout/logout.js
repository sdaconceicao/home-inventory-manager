let ctrl = require('./logout-controller'),
    svc = require('./logout-service');

module.exports = angular.module('him.logout', [])
    .constant('logoutConfig', {
        animation: true,
        template: require('./logout.html'),
        controller: 'LogoutCtrl',
        controllerAs: 'ctrl',
        size: 'sm'
    })
    .controller('LogoutCtrl', ctrl)
    .service('LogoutService', svc)
;
