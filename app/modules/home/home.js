module.exports = angular.module('him.home', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'content@': {
                        template: require('./home.html')
                    }
                },
                data: {
                    requireLogin: false
                }
            })
    }])
;
