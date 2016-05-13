/* global angular, module, require */
'use strict';

let ctrl = require('./logout-controller'),
    svc = require('./logout-service')
    ;

module.exports = angular.module('him.logout', [])
    .value('logoutConfig', {
        animation: true,
        templateUrl: 'logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'ctrl',
        size: 'sm'
    })
    .controller('LogoutCtrl', ctrl)
    .service('LogoutService', svc)
;
