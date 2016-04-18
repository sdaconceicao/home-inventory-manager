/* global angular, module, require */
'use strict';

let ctrl = require('./dashboard-controller')
    ;

module.exports = angular.module('him.dashboard', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'dashboard/dashboard.html',
                        controller: 'DashboardCtrl as ctrl'
                    }
                },
                data: {}
            })
    }])
    .controller('DashboardCtrl', ctrl)
;
