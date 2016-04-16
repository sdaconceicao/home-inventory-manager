/* global angular, module, require */
'use strict';

let ctrl = require('./register-controller')
    ;

module.exports = angular.module('him.register', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'register/register.html',
                        controller: 'RegisterCtrl as ctrl'
                    }
                },
                data: {}
            })
    }])
    .controller('RegisterCtrl', ctrl)
;
