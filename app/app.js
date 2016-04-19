/* global module, require */
'use strict';

let oath = require('./config/oath.js'),
    templates = require('../dist/templates'),
    components = require('./components/components'),
    home = require('./modules/home/home'),
    login = require('./modules/login/login'),
    register = require('./modules/register/register'),
    dashboard = require('./modules/dashboard/dashboard'),
    dependencies = ['ngAnimate', 'ui.router', 'ui.bootstrap', 'satellizer',
        'him.templates', components.name, home.name, login.name, dashboard.name, register.name
    ]
;

angular.module('him', dependencies)
    .constant('oath', oath)
    .config(/* @ngInject */($locationProvider, $urlRouterProvider, $compileProvider, $authProvider, $stateProvider, $httpProvider,
                            oath)=>{
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
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
    .run(/* @ngInject */ ($templateCache)=>{

    })
;
