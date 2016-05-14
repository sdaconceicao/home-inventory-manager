/* global angular, module, require */
'use strict';

let ctrl = require('./login-controller'),
    svc = require('./login-service')
;

module.exports = angular.module('him.login', [])
    .constant('loginConfig', {
        animation: true,
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl',
        size: 'sm'
    })
    .controller('LoginCtrl', ctrl)
    .service('LoginService', svc)
;
