/* global module, require */
'use strict';


var ctrl = require('./login-controller'),
    svc = require('./login-service')
;

module.exports = angular.module('him.login', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
        .state('browse', {
            url: '/login',
            views: {
                'content@': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginCtrl as lctrl'
                }
            },
            data: {}
        })
    }])
    .controller('LoginCtrl', ctrl)
    .service('LoginService', svc)
;