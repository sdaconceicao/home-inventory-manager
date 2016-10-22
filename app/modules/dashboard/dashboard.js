let comp = require('./dashboard-component');

module.exports = angular.module('him.dashboard', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        component: 'dashboard'
                    }
                }
            })
    }])
    .component('dashboard', comp)
;
