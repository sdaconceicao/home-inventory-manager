/* global module, require */
'use strict';

let oath = require('./config/oath'),
    uri = require('./config/uri'),
    templates = require('../dist/templates'),
    components = require('./components/components'),
    home = require('./modules/home/home'),
    login = require('./modules/login/login'),
    logout = require('./modules/logout/logout'),
    register = require('./modules/register/register'),
    dashboard = require('./modules/dashboard/dashboard'),
    dependencies = ['ngAnimate', 'ui.router', 'ui.bootstrap', 'satellizer', 'ngStorage',
        'him.templates',
        components.name, home.name, login.name, logout.name, dashboard.name, register.name
    ]
;

angular.module('him', dependencies)
    .constant('oath', oath)
    .constant('uri', uri)
    .config(/* @ngInject */($locationProvider, $urlRouterProvider, $compileProvider, $authProvider, $stateProvider, $httpProvider,
                            oath)=>{
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $authProvider.facebook({
            clientId: oath.facebookId,
            responseType: 'token'
        });
        $stateProvider.state('app', {
            abstract: true,
            data: {
                requireLogin: true
            }
        });
        //$httpProvider.interceptors.push('SessionInjector');
    })
    .run(/* @ngInject */ ($templateCache, $rootScope, SessionService)=>{
        $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
            let requireLogin = toState.data.requireLogin;

            if (requireLogin && SessionService.getUser() === undefined) {
                event.preventDefault();
            }
        });
    })
;
