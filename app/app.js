/* global module, require */
'use strict';

let oath = require('./config/oath.js'),
    templates = require('../dist/templates'),
    components = require('./components/components'),
    home = require('./modules/home/home'),
    login = require('./modules/login/login'),
    dashboard = require('./modules/dashboard/dashboard'),
    dependencies = ['ngAnimate', 'ui.router', 'ui.bootstrap', 'satellizer',
        'him.templates', components.name, home.name, login.name, dashboard.name
    ]
;

angular.module('him', dependencies)
    .constant('oath', oath)
    .config(/* @ngInject */($locationProvider, $urlRouterProvider, $compileProvider, $authProvider, oath)=>{
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
        $authProvider.facebook({
            clientId: oath.facebookId,
            responseType: 'token'
        });
    })
    .run(/* @ngInject */ ($templateCache)=>{

    })
;
